import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

type FormValues = {
    email: string
    password: string
}

export default function Home() {
    const { register, handleSubmit } = useForm<FormValues>();
    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate();

    async function handleLogin(data: FormValues) {
        try {
            await signIn(data);

            navigate('/profile');

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const res = error.response;
                if (res) {
                    alert(res.data.message);
                }
            }
            console.log(error);
        }
    }

    return (
        <div className="bg-background h-screen bg-no-repeat bg-cover flex justify-center items-center">
            <form onSubmit={handleSubmit(handleLogin)} className="py-6 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] bg-neutral-800 rounded shadow-2xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-zinc-100 mb-5">Login</h1>
                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-100" htmlFor="">Email</label>
                    <input
                        {...register('email')}
                        name='email'
                        type="email"
                        placeholder="Exemplo@gmail.com"
                        className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all"
                    />
                </div>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-zinc-100" htmlFor="">Senha</label>
                    <input
                        {...register('password')}
                        name='password'
                        type="password"
                        placeholder="••••••••••••••••"
                        className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all"
                    />
                </div>

                <div className="w-[90%] mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-400">
                            Continuar conectado
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-500 hover:text-blue-600 transition-all">
                            Esqueci minha senha
                        </a>
                    </div>

                </div>

                <div className="w-[90%] mt-7">
                    <button type='submit' className="w-full h-10 rounded text-white font-bold bg-gradient-to-r from-red-500 to-red-600 shadow-md hover:opacity-90 transition-all ">Entrar</button>
                </div>


                <div className='mt-10 text-blue-500 text-center'>
                    <Link className='flex items-center justify-center gap-2 hover:opacity-90 transition-all' to='/register'> Você ainda não tem uma conta?</Link>
                </div>
            </form>

        </div>
    )
}