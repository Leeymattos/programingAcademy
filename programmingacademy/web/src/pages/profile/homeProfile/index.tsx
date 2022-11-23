import { useContext } from 'react'
import Nav from '../../../components/nav';
import Navbar from '../../../components/navbar'
import { AuthContext } from '../../../contexts/AuthContext'
import { Pages } from '../../../Enums/Pages'

export default function Profile() {
    const { user } = useContext(AuthContext);

    console.log(user)
    return (
        <div className='bg-background h-screen overflow-hidden'>

            <Nav pageNow='Home' user={user} />
            <div className='h-full flex justify-center items-center'>

                <main className='h-[80%] w-[90%] rounded mb-10 px-12 bg-neutral-800 flex justify-around items-center'>

                    <div className='w-[35%] '>
                        <h1 className=' text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-400'>Bem vindo, {user?.name}</h1>
                        <p className='text-zinc-300 text-lg'>Estamos felizes em ter você aqui novamente, aproveite todos recursos da nossa plataforma e bons estudos!</p>
                    </div>

                    <div className='border-2 border-transparent'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xGXJP0JJIik" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>

                </main>

            </div>

        </div>
    )
}