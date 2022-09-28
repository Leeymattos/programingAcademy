import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="bg-[url('/background.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">

            <form action="" className="w-[60%] h-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] bg-white rounded drop-shadow-lg flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-900 my-7">Login</h1>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-gray-600" htmlFor="">Email</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-violet-600 transition-all" type="email" placeholder="Exemplo@gmail.com" />
                </div>

                <div className="flex flex-col w-[90%] mb-3">
                    <label className="block mt-4 font-bold text-gray-600" htmlFor="">Senha</label>
                    <input className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-violet-600 transition-all" type="password" placeholder="*************" />
                </div>

                <div className="w-[90%] mt-7">
                    <button className="w-full h-10 rounded text-white font-bold bg-violet-600 shadow-md hover:bg-violet-500 transition-all ">Entrar</button>
                </div>


                <div className='mt-7 text-violet-600'>
                    <Link className='hover:opacity-80 transition-all' to='/register'>Você ainda não tem uma conta?</Link>
                </div>


            </form>

        </div>
    )
}