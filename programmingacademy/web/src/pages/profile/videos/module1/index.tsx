import Navbar from '../../../../components/navbar'
import { Pages } from '../../../../Enums/Pages'
import { FiPlayCircle, FiArrowDown } from 'react-icons/fi'


export default function ModuleOne() {
    return (
        <div className="bg-background h-screen overflow-hidden">
            <Navbar pageActive={Pages.profileVideos} />

            <div className='h-full flex justify-between'>
                <div className='w-[70%] h-[70%] bg-neutral-800'>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/xGXJP0JJIik" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>

                <div className='w-[30%] h-[100%] border-l-4 border-neutral-800 flex flex-col bg-neutral-700 overflow-auto'>

                    <div className='h-[8%] flex px-5 rounded-b-md items-center justify-between bg-zinc-300 border-2'>
                        <p className='text-lg font-bold'>Módulo 1</p>
                        <FiArrowDown size={25} />
                    </div>

                    <div className='h-[8%] flex px-5 items-center justify-between bg-zinc-300 border-2 hover:bg-zinc-400'>
                        <p className='text-lg font-semibold'>Introdução a programação</p>
                        <FiPlayCircle size={25} />
                    </div>

                    <div className='h-[8%] flex px-5 items-center justify-between bg-zinc-300 border-2  hover:bg-zinc-400'>
                        <p className='text-lg font-semibold'>Preparando o ambiente</p>
                        <FiPlayCircle size={25} />
                    </div>
                    <div className='h-[8%] flex px-5 items-center justify-between bg-zinc-300 border-2  hover:bg-zinc-400'>
                        <p className='text-lg font-semibold'>Variáveis e operadores lógicos</p>
                        <FiPlayCircle size={25} />
                    </div>
                    <div className='h-[8%] flex px-5 items-center justify-between bg-zinc-300 border-2  hover:bg-zinc-400'>
                        <p className='text-lg font-semibold'>Funções nativas do Portugol</p>
                        <FiPlayCircle size={25} />
                    </div>
                    <div className='h-[8%] flex px-5 items-center justify-between bg-zinc-300 border-2  hover:bg-zinc-400'>
                        <p className='text-lg font-semibold'>Funções da biblioteca Matemática</p>
                        <FiPlayCircle size={25} />
                    </div>






                </div>

            </div>
        </div>
    )
}