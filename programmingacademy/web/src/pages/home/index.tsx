import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    function handleLogin(e: FormEvent) {

        e.preventDefault();
        navigate('/profile');
    }

    return (
        <div className="bg-background h-screen bg-no-repeat bg-cover flex justify-center items-center">

            <form onSubmit={handleLogin} className="py-6 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] bg-neutral-800 rounded shadow-2xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-zinc-100 mb-5">Login</h1>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-100" htmlFor="">Email</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all" type="email" placeholder="Exemplo@gmail.com" />
                </div>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-100" htmlFor="">Senha</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all" type="password" placeholder="*************" />
                </div>

                <div className="w-[90%] mt-7">
                    <button type='submit' className="w-full h-10 rounded text-white font-bold bg-gradient-to-r from-red-500 to-red-600 shadow-md hover:opacity-90 transition-all ">Entrar</button>
                </div>


                <div className='mt-10 text-red-500 text-center'>
                    <Link className='flex items-center justify-center gap-2 hover:opacity-90 transition-all' to='/register'> Você ainda não tem uma conta?</Link>
                </div>

            </form>

        </div>
    )
}