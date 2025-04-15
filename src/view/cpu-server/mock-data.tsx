import { CarouselItemData } from "@/src/components/core-carousel";

const serverCpuContent: CarouselItemData[] = [
  {
    title: "Os Titãs do Silício: O Início dos Servidores (1960-1970)",
    image: "/images/server/1960-server.png",
    description:
      "Décadas marcadas pelo surgimento e consolidação dos mainframes, com destaque para a IBM. Começo da virtualização e da memória virtual.",
    content: (
      <ul className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">IBM</h3>

        <li>
          <span className="font-bold">IBM System/360 (1964)</span>: Primeiro
          grande processador para servidores corporativos. Estabeleceu o padrão
          de mainframes compatíveis.
        </li>
        <li>
          <span className="font-bold">IBM System/370 (1970)</span>: Evolução do
          System/360 com suporte a virtualização e memória virtual.
        </li>
      </ul>
    ),
  },
  {
    title: "Do RISC ao Xeon: A Revolução nos Data Centers (1980-1990)",
    image: "/images/server/1980-server.png",
    description:
      "Avanço das arquiteturas RISC, servidores Unix e início da linha Xeon. A arquitetura x86 começa a ganhar força em ambientes corporativos.",
    content: (
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Intel 80286 (1982)</span>: Introduziu o
            modo protegido, possibilitando uso em servidores básicos.
          </li>
          <li>
            <span className="font-bold">Intel 80386 (1985)</span>: Suporte a
            multitarefa real, essencial para servidores multitarefa.
          </li>
          <li>
            <span className="font-bold">Intel Pentium Pro (1995)</span>:
            Desenvolvido com foco em servidores. Introduziu cache L2 integrado.
          </li>
          <li>
            <span className="font-bold">Intel Xeon (1998)</span>: Primeira linha
            de processadores dedicada a servidores.
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">IBM</h3>

          <li>
            <span className="font-bold">IBM POWER (1990)</span>: Início da linha
            POWER, arquitetura RISC para servidores de alto desempenho.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Sun</h3>

          <li>
            <span className="font-bold">SPARC (1987)</span>: Arquitetura RISC
            criada pela Sun Microsystems, popular em servidores Unix.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">DEC</h3>

          <li>
            <span className="font-bold">DEC Alpha 21164 (1996)</span>:
            Processador RISC muito veloz, usado em servidores e workstations.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Virtualização, Multicore e o X86-64 em Ação (2000-2010)",
    image: "/images/server/2000-server.png",
    description:
      "Surgimento do x86-64, virtualização em larga escala e popularização de múltiplos núcleos. ARM começa a aparecer no cenário.",
    content: (
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Intel Itanium (2001)</span>: IA-64
            voltado para servidores de missão crítica. Apesar da inovação, teve
            pouca adoção.
          </li>
          <li>
            <span className="font-bold">Intel Xeon 5100 (2006)</span>: Baseado
            na arquitetura Core, oferecia maior eficiência energética.
          </li>
          <li>
            <span className="font-bold">Intel Xeon E5-2600 (2011)</span>: Muito
            utilizado em servidores corporativos e data centers.
          </li>
          <li>
            <span className="font-bold">Intel Xeon Scalable (2017)</span>: Nova
            arquitetura modular com maior escalabilidade.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD Opteron (2003)</span>: Primeiro
            x86-64 para servidores. Trouxe controlador de memória integrado.
          </li>
          <li>
            <span className="font-bold">AMD EPYC “Naples” (2017)</span>: Até 32
            núcleos, alta performance multicore.
          </li>
          <li>
            <span className="font-bold">AMD EPYC “Rome” (2019)</span>: Até 64
            núcleos. Desempenho revolucionário no mercado.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Amazon</h3>

          <li>
            <span className="font-bold">Amazon Graviton (2018)</span>: Primeiro
            processador ARM da AWS, focado em eficiência para nuvem.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Nuvem, ARM e o Futuro dos Servidores (2020-Presente)",
    image: "/images/server/2020-server.png",
    description:
      "Explosão de servidores ARM, foco em sustentabilidade e altíssimo número de núcleos. A nuvem domina o cenário.",
    content: (
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD EPYC “Milan” (2021)</span>:
            Arquitetura Zen 3, com melhorias em IPC e eficiência.
          </li>
          <li>
            <span className="font-bold">AMD EPYC “Genoa” (2022)</span>: Suporte
            a DDR5, PCIe 5.0 e até 96 núcleos.
          </li>
          <li>
            <span className="font-bold">AMD EPYC “Bergamo” (2023)</span>: Versão
            otimizada para cloud-native, com até 128 núcleos.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMPERE</h3>

          <li>
            <span className="font-bold">Ampere Altra (2020)</span>: Processador
            ARM com até 80 núcleos, ideal para data centers.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AWS</h3>

          <li>
            <span className="font-bold">Amazon Graviton2/3 (2021–2023)</span>:
            Sucessores com mais desempenho por watt, usados amplamente na AWS.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">APPLE</h3>

          <li>
            <span className="font-bold">Apple M1/M2 (2020+)</span>: Apesar de
            usados principalmente em desktops, mostram a viabilidade do ARM em
            cargas profissionais.
          </li>
        </ul>
      </div>
    ),
  },
];

export { serverCpuContent };
