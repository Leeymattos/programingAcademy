import jwtDecode from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface Props {
    children?: ReactNode;
}

type DecodedToken = {
    exp: number;
    iat: number;
    name: string;
    role: string;
    sub: string;
    githubUrl: string;
    email: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null,
    signIn: (data: SignInData) => Promise<void>;
}

type SignInData = {
    email: string;
    password: string;
}

export type User = {
    name: string;
    role: string;
    githubUrl: string;
    email: string;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded: DecodedToken = jwtDecode(token);

            const userNow = {
                name: decoded.name,
                role: decoded.role,
                githubUrl: decoded.githubUrl,
                email: decoded.email
            }

            setUser(userNow);
        }
    }, [])

    async function signIn({ email, password }: SignInData) {
        const response = await api.post('auth/login', { email, password });

        const { token } = response.data;

        const decoded: DecodedToken = jwtDecode(token);

        const userNow: User = {
            name: decoded.name,
            role: decoded.role,
            githubUrl: decoded.githubUrl,
            email: decoded.email
        }

        setUser(userNow);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}