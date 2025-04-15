import { students } from "./mock-data";

export const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#181513] px-4">
      <div className="bg-[#1f1b18] p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl w-full">
        <article className="flex flex-col items-center gap-8 text-white text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent flex flex-col gap-2">
            A evolução dos Processadores

            <span className="text-white/60 text-sm">Arquitetura e Organização de Computadores</span>
          </h1>

          <p className="text-lg md:text-xl font-semibold text-white">
            Cronologia dos Processadores
          </p>

          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b-2 border-purple-400 pb-2">
              Membros do Trabalho
            </h2>

            <div className="max-h-52 overflow-y-auto scrollbar-custom rounded-md">
              <ul className="text-base flex flex-col gap-4 mt-4 px-2">
                {students.map((student, index) => (
                  <li key={index} className="hover:text-purple-800 transition">
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};