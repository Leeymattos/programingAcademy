import Navbar from "../../../components/navbar";
import { Pages } from "../../../Enums/Pages";

export default function Book() {
    return (
        <div className="bg-background h-screen overflow-hidden">
            <Navbar pageActive={Pages.profileBook} />

            <div className='h-full flex justify-center items-center overflow-hidden'>

                <main className='h-[70%] w-[70%] rounded mb-10 px-12 bg-neutral-800 flex flex-col items-center justify-center'>

                    <h1 className="text-4xl text-zinc-100 font-bold animate-bounce">Em desenvolvimento...</h1>

                </main>

            </div>

        </div>
    )
}