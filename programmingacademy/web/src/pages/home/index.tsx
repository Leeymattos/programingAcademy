import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <div className="bg-[url('/background2.png')] h-screen bg-no-repeat bg-cover flex justify-center items-center">

            <form action="" className="h-[60%] w-[30%] bg-white rounded shadow-2xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-zinc-800 my-7">Login</h1>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-700" htmlFor="">Email</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-violet-600 transition-all" type="email" placeholder="Exemplo@gmail.com" />
                </div>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-700" htmlFor="">Senha</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-violet-600 transition-all" type="password" placeholder="*************" />
                </div>

                <div className="w-[90%] mt-7">
                    <button className="w-full h-10 rounded text-white font-bold bg-amber-600 shadow-md hover:opacity-90 transition-all ">Entrar</button>
                </div>


                <div className='mt-7 text-amber-600'>
                    <Link className='hover:opacity-90 transition-all' to='/register'>Você ainda não tem uma conta?</Link>
                </div>


            </form>

        </div>
    )
}