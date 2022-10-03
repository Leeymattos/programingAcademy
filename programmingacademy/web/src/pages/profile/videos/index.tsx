import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import { Pages } from "../../../Enums/navbar";

export default function Videos() {
    return (
        <div className="bg-background h-screen">
            <Navbar pageActive={Pages.profileVideos} />

            <div className='h-full flex justify-center items-center '>

                <main className='h-[70%] w-[70%] rounded px-12 bg-neutral-800 flex items-center justify-center gap-20'>

                    <div className="w-[25%] p-2 bg-zinc-300 rounded hover:scale-105 hover:opacity-90 transition-all">
                        <Link to=''>
                            <div>
                                <div className="text-center">
                                    <h2 className="text-red-500 text-3xl font-bold mb-2">Módulo 1</h2>
                                </div>

                                <p className="text-lg font-semibold">- Lógica de programação</p>
                                <p className="text-lg font-semibold">- JavaScript</p>
                                <p className="text-lg font-semibold">-TypeScript</p>
                            </div>
                        </Link>
                    </div>

                    <div className="w-[25%] p-2 bg-zinc-300 rounded hover:scale-105 hover:opacity-90 transition-all">
                        <Link to=''>
                            <div>
                                <div className="text-center">
                                    <h2 className="text-red-500 text-3xl font-bold mb-2">Módulo 2</h2>
                                </div>

                                <p className="text-lg font-semibold">- Banco de dados</p>
                                <p className="text-lg font-semibold">- MySQL</p>
                                <p className="text-lg font-semibold">- Nest</p>
                            </div>
                        </Link>
                    </div>

                    <div className="w-[25%] p-2 bg-zinc-300 rounded hover:scale-105 hover:opacity-90 transition-all">
                        <Link to=''>
                            <div>
                                <div className="text-center">
                                    <h2 className="text-red-500 text-3xl font-bold mb-2">Módulo 3</h2>
                                </div>

                                <p className="text-lg font-semibold">- Indefinido</p>
                                <p className="text-lg font-semibold">- Indefinido</p>
                                <p className="text-lg font-semibold">- Indefinido</p>
                            </div>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    )
}