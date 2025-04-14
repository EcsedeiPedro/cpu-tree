import { students } from "./mock-data";

export const Home = () => {
  return (
    <section className="h-[calc(100vh-64px)] mt-16 bg-[#181513]">
      <div className="container flex items-center justify-center h-full">
        <div className="bg-[#1f1b18] p-10 rounded-2xl shadow-xl max-w-3xl w-full animate-fade-in">
          <article className="flex flex-col items-center gap-6 text-white">
            <h1 className="text-4xl font-extrabold text-center text-white">
              Trabalho de{" "}
              <span className="text-cyan-400">Arquitetura e Organização</span>{" "}
              de Computadores
            </h1>

            <p className="text-xl font-semibold text-cyan-300 text-center">
              Cronologia dos Processadores
            </p>

            <h2 className="text-2xl font-bold mt-4 border-b border-cyan-400 pb-2">
              Membros do Trabalho
            </h2>

            <ul className="text-lg flex flex-col gap-3">
              {students.map((student, index) => (
                <li key={index}>
                  {student.name}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
