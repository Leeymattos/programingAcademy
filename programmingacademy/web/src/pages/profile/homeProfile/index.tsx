import Navbar from '../../../components/navbar'

export default function Profile() {
    return (
        <div className='h-screen bg-neutral-600'>
            <Navbar pageActive='home' />

            <div className='h-full flex justify-center items-center'>

                <main className='h-[70%] w-[80%] rounded mb-10 px-16 bg-neutral-800 flex justify-between items-center'>

                    <div className='w-[35%] '>
                        <h1 className='text-zinc-100 text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-400'>Bem vindo, Weslley Matos </h1>
                        <p className='text-zinc-300 text-lg'>Estamos felizes em ter você aqui novamente, aproveite todos recursos da nossa plataforma e bons estudos!</p>

                    </div>

                    <div className='border-2 border-transparent'>
                        <iframe className='border-spacing-5 ' width="560" height="315" src="https://www.youtube.com/embed/xGXJP0JJIik?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>

                </main>

            </div>




        </div>
    )
}