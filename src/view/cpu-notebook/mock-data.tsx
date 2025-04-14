import { CarouselItemData } from "../../components/core-carousel";

export const notebookCpuContent: CarouselItemData[] = [
  {
    title: "Os Primeiros Passos da Mobilidade (1990-1999)",
    image: "/images/notebook-1990s.png",
    description:
      "Os notebooks começaram a ganhar espaço no mercado com processadores adaptados de desktops, com foco em eficiência energética e tamanho reduzido.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>
          <li>
            <span className="font-bold">Intel 486SL (1992)</span>: Primeira
            versão do 486 otimizada para notebooks, com modos de economia de
            energia.
          </li>
          <li>
            <span className="font-bold">Intel Pentium MMX Mobile (1997)</span>:
            Voltado para notebooks, trouxe instruções multimídia e baixo
            consumo.
          </li>
          <h3 className="text-xl font-bold">AMD</h3>
          <li>
            <span className="font-bold">AMD K6-2+ Mobile (1999)</span>:
            Primeiros modelos móveis da AMD com foco em baixo consumo e bom
            desempenho.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Consolidação dos Notebooks (2000-2009)",
    image: "/images/notebook-2000s.png",
    description:
      "A década marcou a popularização dos notebooks e o surgimento de arquiteturas dedicadas exclusivamente à mobilidade.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>
          <li>
            <span className="font-bold">Intel Pentium M (2003)</span>: Parte da
            plataforma Centrino, focada em mobilidade e eficiência energética.
          </li>
          <li>
            <span className="font-bold">Intel Core Duo (2006)</span>: Início da
            transição para múltiplos núcleos em notebooks.
          </li>
          <li>
            <span className="font-bold">Intel Core 2 Duo Mobile (2006)</span>:
            Sucesso entre notebooks intermediários.
          </li>
          <h3 className="text-xl font-bold">AMD</h3>
          <li>
            <span className="font-bold">AMD Turion 64 (2005)</span>: Rival da
            Intel com suporte a 64 bits e consumo reduzido.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Eficiência, Desempenho e o Surgimento do ARM (2010-2019)",
    image: "/images/notebook-2010s.png",
    description:
      "Com a chegada dos ultrabooks e a evolução dos processadores móveis, a década foi marcada pela eficiência e surgimento da concorrência ARM.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>
          <li>
            <span className="font-bold">
              Intel Core i3/i5/i7 U-Series (2010–2019)
            </span>
            : Processadores voltados para eficiência em ultrabooks.
          </li>
          <li>
            <span className="font-bold">Intel Core H-Series (2014)</span>:
            Voltado para notebooks de alto desempenho.
          </li>
          <li>
            <span className="font-bold">Intel Xeon Mobile (2015)</span>:
            Workstations móveis para uso profissional.
          </li>
          <h3 className="text-xl font-bold">AMD</h3>
          <li>
            <span className="font-bold">AMD A-Series APUs (2011–2016)</span>:
            Combinação de CPU e GPU em um só chip para notebooks básicos.
          </li>
          <li>
            <span className="font-bold">AMD Ryzen Mobile (2017)</span>: Com a
            arquitetura Zen, trouxe concorrência real à Intel em notebooks.
          </li>
          <h3 className="text-xl font-bold">ARM/OUTROS</h3>
          <li>
            <span className="font-bold">Qualcomm Snapdragon 8cx (2019)</span>:
            Chip ARM voltado para notebooks com Windows.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Alta Performance e Chips Proprietários (2020-atualidade)",
    image: "/images/notebook-2020s.png",
    description:
      "A performance dos notebooks atingiu novos patamares com chips de múltiplos núcleos, arquitetura híbrida e maior eficiência energética.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>
          <li>
            <span className="font-bold">
              Intel Core 10ª a 14ª Geração (2020–2024)
            </span>
            : Com destaque para as séries U, P e H, abrangendo desde ultrabooks
            até notebooks gamer.
          </li>
          <li>
            <span className="font-bold">Intel N100/N200 (2023)</span>:
            Substitutos modernos para os Celeron e Pentium em notebooks básicos.
          </li>
          <li>
            <span className="font-bold">
              Intel Core Ultra (Meteor Lake, 2024)
            </span>
            : Nova arquitetura com unidades de IA integradas.
          </li>
          <h3 className="text-xl font-bold">AMD</h3>
          <li>
            <span className="font-bold">
              AMD Ryzen 7030/7040/8040 Series (2022–2024)
            </span>
            : Arquitetura Zen 3+ e Zen 4, com foco em IA e eficiência.
          </li>
          <li>
            <span className="font-bold">
              AMD Threadripper PRO 7995WX (2023)
            </span>
            : Workstation móvel com até 96 núcleos.
          </li>
          <li>
            <span className="font-bold">AMD Athlon Gold 7220U (2022)</span>:
            Processador básico, ideal para notebooks de entrada.
          </li>
          <h3 className="text-xl font-bold">APPLE</h3>
          <li>
            <span className="font-bold">Apple M1 (2020)</span>: Início da
            revolução ARM nos MacBooks, com alta eficiência.
          </li>
          <li>
            <span className="font-bold">Apple M2 (2022) e M3 (2023)</span>:
            Incrementos de performance e novos recursos gráficos e de IA.
          </li>
          <h3 className="text-xl font-bold">ARM/OUTROS</h3>
          <li>
            <span className="font-bold">Snapdragon 8cx Gen 3 (2022)</span>: Foco
            em notebooks ARM com Windows.
          </li>
          <li>
            <span className="font-bold">Snapdragon X Elite (2024)</span>: Nova
            linha premium ARM para notebooks Windows.
          </li>
          <li>
            <span className="font-bold">MediaTek Kompanio 1380 (2022)</span>:
            Chip de alto desempenho voltado para Chromebooks avançados.
          </li>
        </ul>
      </div>
    ),
  },
];
