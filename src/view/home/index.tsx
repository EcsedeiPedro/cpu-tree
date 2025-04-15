import { students } from "./mock-data";

export const Home = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] md:mt-16 bg-[#181513]">
      <div className="container flex items-center justify-center h-full px-4">
        <div className="bg-[#1f1b18] p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl w-full animate-fade-in">
          <article className="flex flex-col items-center gap-6 text-white text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Trabalho de{" "}
              <span className="text-cyan-400">Arquitetura e Organização</span>{" "}
              de Computadores
            </h1>

            <p className="text-lg md:text-xl font-medium text-cyan-300">
              Cronologia dos Processadores
            </p>

            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-bold mb-2 border-b-2 border-cyan-400 pb-2">
                Membros do Trabalho
              </h2>

              <div className="max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400/50 scrollbar-track-transparent rounded-md">
                <ul className="text-base md:text-lg flex flex-col gap-2 mt-2 px-2">
                  {students.map((student, index) => (
                    <li key={index} className="hover:text-cyan-300 transition">
                      {student.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
