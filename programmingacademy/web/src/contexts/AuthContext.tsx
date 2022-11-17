import { createContext, ReactNode } from "react";
import api from "../services/api";

interface Props {
    children?: ReactNode
}

type AuthContextType = {
    isAuthenticated: boolean
}

type SignInData = {
    name: string
    email: string
    password: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: Props) {
    const isAuthenticated = false;

    async function signIn({ name, email, password }: SignInData) {
        const user = await api.post('auth/login', { name, email, password });


    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}