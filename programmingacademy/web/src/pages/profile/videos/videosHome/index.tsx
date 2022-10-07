import { Link } from "react-router-dom";
import Navbar from "../../../../components/navbar";
import { Pages } from "../../../../Enums/Pages";
import { BsPlayCircle } from 'react-icons/bs'

export default function Videos() {

    return (
        <div className="bg-background h-screen overflow-hidden">
            <Navbar pageActive={Pages.profileVideos} />
            <div className='h-full flex justify-center items-center'>

                <main className='h-[70%] w-[70%] rounded mb-10 px-12 bg-neutral-800 flex flex-col justify-center items-center gap-10 '>

                    <Link to="/profile/videos/module1" className="w-[80%] h-[20%] p-2 rounded flex justify-between items-center gap-5 bg-zinc-200 hover:scale-105 transition-all">

                        <img src="/logic.svg" alt="" className="h-full" />

                        <div className="w-[80%] h-[95%] p-2 rounded shadow-lg bg-zinc-300 flex items-center gap-2">

                            <div>
                                <h2 className="text-center text-xl font-bold">Módulo 1</h2>
                                <p className="mt-1">
                                    Neste módulo aprendemos lógica de programação utilizando Portugol Studio,
                                    e conceitos da linguagem Javascript e Typescript
                                </p>
                            </div>
                            <BsPlayCircle size={70} />
                        </div>
                    </Link>

                    <Link to="/profile/videos/module2" className="w-[80%] h-[20%] p-2 rounded flex justify-between items-center gap-5 bg-zinc-200 hover:scale-105 transition-all">

                        <img src="/server.svg" alt="" className="h-full" />

                        <div className="w-[80%] h-[95%] p-2 rounded shadow-lg bg-zinc-300 flex items-center gap-2">

                            <div>
                                <h2 className="text-center text-xl font-bold">Módulo 2</h2>
                                <p className="mt-1">
                                    Neste módulo aprendemos lógica de programação utilizando Portugol Studio,
                                    e conceitos da linguagem Javascript e Typescript
                                </p>
                            </div>
                            <BsPlayCircle size={70} />
                        </div>
                    </Link>

                    <Link to="/profile/videos/module3" className="w-[80%] h-[20%] p-2 rounded flex justify-between items-center gap-5 bg-zinc-200 hover:scale-105 transition-all">

                        <img src="/front.svg" alt="" className="h-full" />

                        <div className="w-[80%] h-[95%] p-2 rounded shadow-lg bg-zinc-300 flex items-center gap-2">

                            <div>
                                <h2 className="text-center text-xl font-bold">Módulo 3</h2>
                                <p className="mt-1">
                                    Neste módulo aprendemos lógica de programação utilizando Portugol Studio,
                                    e conceitos da linguagem Javascript e Typescript
                                </p>
                            </div>
                            <BsPlayCircle size={70} />
                        </div>
                    </Link>

                </main>

            </div>

        </div>
    )
}