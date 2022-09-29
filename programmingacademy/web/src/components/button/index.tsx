import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IsActive {
    isActive: boolean;
    children: ReactNode;
    to: string;
}

export default function Button({ isActive, children, to }: IsActive) {
    if (isActive) {
        return (
            <Link
                className='flex items-center h-full border-2 border-transparent border-b-red-500 text-zinc-100'
                to={to}>
                {children}
            </Link>
        )
    }
    else {
        return (
            <Link
                className='flex items-center h-full border-2 border-transparent hover:border-b-red-500 hover:text-zinc-100 text-zinc-500 transition-all'
                to={to}>
                {children}
            </Link>
        )
    }
}