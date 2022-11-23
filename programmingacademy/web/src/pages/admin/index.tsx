import Nav from "../../components/nav";

export default function Admin() {
  return (
    <div>
      <Nav />
      <main>
        <div className="bg-background h-screen overflow-hidden">
          <div className='h-full flex justify-center items-center'>

            <section className='h-[80%] w-[90%] rounded mb-10 px-12 bg-zinc-900 flex justify-center items-center '>
              <h1 className="text-4xl text-zinc-100 font-bold animate-bounce">Em desenvolvimento...</h1>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}