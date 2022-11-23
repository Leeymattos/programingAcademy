import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import api from '../../services/api';

type FormValues = {
  name: string
  email: string
  githubUrl: string
  password: string
}

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  async function handleRegister(data: FormValues) {
    try {
      const response = await api.post('user', data);

      alert('Cadastro realizado com sucesso!');

      navigate('/');

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res)
          alert(res.data.message);
      }
      console.log(error);
    }
  }
  return (
    <div className="bg-background h-screen bg-no-repeat bg-cover flex justify-center items-center">

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="py-6 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] bg-neutral-800 rounded shadow-2xl flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-zinc-100 mb-5">Registrar</h1>

        <div className="flex flex-col w-[90%] mb-3">
          <label className="block mt-4 font-bold text-zinc-100" htmlFor="name">Nome</label>
          <input
            {...register('name')}
            name='name'
            type="name"
            placeholder="Nome"
            required
            className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all"
          />
        </div>

        <div className="flex flex-col w-[90%] mb-3">
          <label className="block mt-4 font-bold text-zinc-100" htmlFor="email">Email</label>
          <input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Exemplo@gmail.com"
            required
            className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all"
          />
        </div>

        <div className="flex flex-col w-[90%] mb-3">
          <label className="block mt-4 font-bold text-zinc-100" htmlFor="githubUrl">GithubUrl</label>
          <input
            {...register('githubUrl')}
            name="githubUrl"
            type="githubUrl"
            placeholder="https://github.com/exemplo"
            required
            className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all"
          />
        </div>

        <div className="flex flex-col w-[90%] mb-3">
          <label className="block mt-4 font-bold text-zinc-100" htmlFor="">Senha</label>
          <input
            {...register('password')}
            name="password"
            type="password"
            placeholder="••••••••••••••••"
            required
            className="border-2 shadow rounded h-10 bg-gray-200 p-2 mt-1 focus:outline-none focus:bg-gray-50 focus:border-blue-400 transition-all" />
        </div>

        <div className="w-[90%] mt-7">
          <button type='submit' className="w-full h-10 rounded text-white font-bold bg-gradient-to-r from-red-500 to-red-600 shadow-md hover:opacity-90 transition-all ">Cadastrar</button>
        </div>

        <div className='mt-8 text-blue-500'>
          <Link className='hover:opacity-90 transition-all' to='/'>Você já possui uma conta?</Link>
        </div>
      </form>

    </div>

  )
}