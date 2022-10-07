import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import Button from "../button";
import { Pages } from "../../Enums/Pages";

interface PageActive {
    pageActive: Pages;
}

export default function Navbar({ pageActive }: PageActive) {
    return (
        <nav className="flex items-center justify-center gap-10 h-[70px] w-full bg-neutral-800">
            <h1 className="absolute left-10 text-lg text-zinc-100">Programing Academy</h1>
            <Button to="/profile" isActive={pageActive == Pages.profileHome ? true : false} >Home</Button>
            <Button to="/profile/github" isActive={pageActive == Pages.profileGithub ? true : false} >Githubs</Button>
            <Button to="/profile/book" isActive={pageActive == Pages.profileBook ? true : false} >Book</Button>
            <Button to="/profile/videos" isActive={pageActive == Pages.profileVideos ? true : false} >Videos</Button>
            <Link to='/' className="absolute right-10 h-8 w-16 flex gap-1 items-center justify-center rounded text-white font-bold bg-gradient-to-r from-red-500 to-red-600 shadow-md hover:opacity-90 transition-all "><FiArrowLeft />Sair</Link>
        </nav>
    )
}