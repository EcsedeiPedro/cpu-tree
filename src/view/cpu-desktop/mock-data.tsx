import { CarouselItemData } from "../../components/core-carousel";

const desktopCpuContent: CarouselItemData[] = [
  {
    title: "De 4 para 16 bits: O Nascimento dos Microprocessadores (1970-1979)",
    image: "/images/desktop/1970-desk.png",
    description:
      "A era dos microprocessadores começa, marcando a transição de arquiteturas simples de 4 e 8 bits para os revolucionários 16 bits que moldariam o futuro da computação pessoal.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Intel 4004 (1971)</span>: Primeiro
            microprocessador comercialmente disponível, com arquitetura de 4
            bits. Foi inicialmente projetado para calculadoras.
          </li>
          <li>
            <span className="font-bold">Intel 8008 (1972)</span>: Evolução do
            4004, com arquitetura de 8 bits.
          </li>
          <li>
            <span className="font-bold">Intel 8080 (1974)</span>: Popularizou o
            conceito de computador pessoal. Usado no Altair 8800.
          </li>
          <li>
            <span className="font-bold">Intel 8086 (1978)</span>: Processador de
            16 bits que deu origem à arquitetura x86, ainda presente até hoje.
          </li>
          <li>
            <span className="font-bold">Intel 8088 (1979)</span>: Variante do
            8086 usada no IBM PC original (1981), com barramento externo de 8
            bits.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD Am9080 (1974)</span>: Cópia
            licenciada do Intel 8080.
          </li>
          <li>
            <span className="font-bold">AMD Am2900 (1975)</span>: Conjunto de
            chips para montar processadores personalizados.
          </li>
          <li>
            <span className="font-bold">AMD FX (2011-2017)</span>: Linha com até
            8 núcleos, baseada nas arquiteturas Bulldozer, Piledriver e
            Excavator.
          </li>
          <li>
            <span className="font-bold">AMD Ryzen (2017)</span>: Revolucionou o
            mercado com múltiplos núcleos e ótimo custo-benefício.
          </li>
          <li>
            <span className="font-bold">Ryzen 2000 Series (2018)</span>:
            Melhorias de desempenho e eficiência com arquitetura Zen+.
          </li>
          <li>
            <span className="font-bold">Ryzen 5000 Series (2020)</span>:
            Arquitetura Zen 3, alto IPC e excelente desempenho geral.
          </li>
          <li>
            <span className="font-bold">Ryzen 7000 Series (2022)</span>: Suporte
            a DDR5, PCIe 5.0 e litografia de 5 nm.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Motorola</h3>

          <li>
            <span className="font-bold">Motorola 6800 (1974)</span>: Competiu
            com o 8080 da Intel.
          </li>
          <li>
            <span className="font-bold">Motorola 6809 (1978)</span>: Processador
            avançado de 8 bits com recursos de 16 bits.
          </li>
          <li>
            <span className="font-bold">Motorola 68000 (1979)</span>:
            Arquitetura de 32 bits com barramento de 16 bits. Muito usado nos
            primeiros Macintosh da Apple, Commodore Amiga e Atari ST.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">
            Outros processadores importantes da época
          </h3>

          <li>
            <span className="font-bold">MOS 6502 (1975)</span>: Usado no Apple I
            e II, Commodore 64 e NES. Extremamente barato e influente.
          </li>
          <li>
            <span className="font-bold">Zilog Z80 (1976)</span>: Derivado do
            Intel 8080, amplamente usado em micros como o MSX e ZX Spectrum.
          </li>
          <li>
            <span className="font-bold">Cyrix 6x86 (1996)</span>: Tentativa de
            desafiar Intel e AMD, com desempenho competitivo para PCs de baixo
            custo.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Ascensão dos 32 bits: A Consolidação dos PCs (1980-1999)",
    image: "/images/desktop/1980-desk.png",
    description:
      "Com os 32 bits, os computadores pessoais se tornam mais poderosos e populares, com inovações como o Pentium e o surgimento de concorrentes à altura da Intel.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Intel 80286 (1982)</span>: Introduziu a
            segmentação de memória e o modo protegido.
          </li>
          <li>
            <span className="font-bold">Intel 80386 (1985)</span>: Primeira CPU
            de 32 bits da Intel, permitindo multitarefa real e mais memória.
          </li>
          <li>
            <span className="font-bold">Intel 80486 (1989)</span>: Introduziu
            cache L1 e FPU integrada.
          </li>
          <li>
            <span className="font-bold">Pentium (1993)</span>: Arquitetura
            superscalar com duas unidades de execução.
          </li>
          <li>
            <span className="font-bold">Pentium MMX (1996)</span>: Instruções
            MMX para melhorar desempenho multimídia.
          </li>
          <li>
            <span className="font-bold">Pentium II (1997)</span>: Maior cache L2
            e desempenho gráfico.
          </li>
          <li>
            <span className="font-bold">Pentium III (1999)</span>: Streaming
            SIMD Extensions (SSE) para melhor desempenho em mídia.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD K5 (1996)</span>: Primeiro
            processador próprio da AMD compatível com Pentium.
          </li>
          <li>
            <span className="font-bold">AMD K6 (1997)</span>: Alta performance e
            bom custo-benefício frente ao Pentium II.
          </li>
          <li>
            <span className="font-bold">AMD Athlon (1999)</span>: Primeiro a
            atingir 1 GHz, superando a Intel em velocidade.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Cyrix</h3>

          <li>
            <span className="font-bold">Cyrix 6x86 (1996):</span>: Alternativa
            de baixo custo aos Pentium.
          </li>
          <li>
            <span className="font-bold">Cyrix MII (1998)</span>: Última geração
            da Cyrix antes de ser absorvida pela VIA.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title:
      "Multicore e Eficiência: A Transição Tecnológica do Século XXI (2000-2008)",
    image: "/images/desktop/2000-desk.png",
    description:
      "O foco muda para múltiplos núcleos e eficiência energética, abrindo caminho para processadores mais equilibrados e potentes.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Pentium 4 (2000)</span>: Arquitetura
            NetBurst, altas frequências mas aquecimento elevado.
          </li>
          <li>
            <span className="font-bold">Intel Core (2006)</span>: Nova
            arquitetura centrada em desempenho por watt.
          </li>
          <li>
            <span className="font-bold">Core 2 Duo (2006)</span>: Duplo núcleo
            com grande eficiência.
          </li>
          <li>
            <span className="font-bold">Core i3/i5/i7 (2008)</span>: Nova linha
            com múltiplos núcleos, cache L3 e hyper-threading nos modelos
            superiores.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD Athlon XP (2001)</span>: Melhor
            desempenho frente aos Pentium 4 em muitas tarefas.
          </li>
          <li>
            <span className="font-bold">AMD Athlon 64 (2003)</span>: Primeiro
            desktop de 64 bits, com controlador de memória integrado.
          </li>
          <li>
            <span className="font-bold">AMD Phenom (2007)</span>: Primeiros
            quad-core da AMD para desktop.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Via Technologies</h3>

          <li>
            <span className="font-bold">Via C3 (2001)</span>: Foco em baixo
            consumo energético para desktops compactos.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title:
      "Potência e Paralelismo: A Era dos 64 bits se Estabelece (2010-2019)",
    image: "/images/desktop/2010-desk.png",
    description:
      "Os 64 bits dominam o mercado, trazendo desempenho massivo, paralelismo avançado e uma nova era para desktops com Intel Core i9 e AMD Ryzen.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold"> Core i3/i5/i7/i9 (2010)</span>:
            Evolução contínua com múltiplas gerações (Sandy Bridge, Ivy Bridge,
            Haswell, Skylake etc.).
          </li>
          <li>
            <span className="font-bold">Core M (2014)</span>: Foco em baixo
            consumo energético para dispositivos móveis.
          </li>
          <li>
            <span className="font-bold">Core i9 (2017)</span>: Voltado para
            entusiastas, com mais núcleos e threads.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">FX Series (2011-2017)</span>: Muitos
            núcleos, mas baixo IPC, gerando críticas.
          </li>
          <li>
            <span className="font-bold">Ryzen 1ª Geração (2017)</span>:
            Revolução da AMD, com arquitetura Zen. Excelente desempenho e
            custo-benefício.
          </li>
          <li>
            <span className="font-bold">Ryzen 2ª Geração (2018)</span>:
            Revolução da AMD, com arquitetura Zen. Excelente desempenho e
            custo-benefício.
          </li>
          <li>
            <span className="font-bold">Ryzen 3000 Series (2019)</span>: Zen 2,
            com litografia de 7nm e salto enorme em IPC. Destaque para os Ryzen
            5 3600 e Ryzen 9 3900X.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title:
      "Híbridos, Chiplets e IA: A Nova Geração dos Processadores (2020-2023)",
    image: "/images/desktop/2020-desk.png",
    description:
      "Entre 2020 e 2023, o mercado de processadores foi revolucionado pela adoção de arquiteturas híbridas, chiplets e recursos de inteligência artificial. Intel e AMD disputam liderança com inovações em performance, eficiência energética e novos padrões como DDR5 e PCIe 5.0.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Alder Lake (2021)</span>: Introdução de
            arquitetura híbrida (núcleos de performance + eficiência),
            semelhante ao ARM.
          </li>
          <li>
            <span className="font-bold">Raptor Lake (2022)</span>: Segunda
            geração dessa arquitetura híbrida, com suporte a DDR5 e PCIe 5.0.
          </li>
          <li>
            <span className="font-bold">Meteor Lake (2023)</span>: Nova
            arquitetura baseada em chiplets e com IA embarcada.
          </li>
          <li>
            <span className="font-bold">
              Descontinuação do nome Pentium e Celeron (2023)
            </span>
            : Marcação do fim de uma era nos desktops de entrada.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">Ryzen 5000 Series (2020)</span>:
            Arquitetura Zen 3, com excelente IPC e domínio em jogos e
            produtividade.
          </li>
          <li>
            <span className="font-bold">Ryzen 6000 Series (2022)</span>:
            Arquitetura Zen 3+, com melhorias em eficiência energética e
            desempenho.
          </li>
          <li>
            <span className="font-bold">Ryzen 7000 Series (2022)</span>:
            Arquitetura Zen 4, suporte a DDR5 e PCIe 5.0, novo soquete AM5.
          </li>
          <li>
            <span className="font-bold">Ryzen 8000G Series (2024)</span>: Foco
            em desktops com gráficos integrados potentes (APUs com RDNA 3).
          </li>
        </ul>
      </div>
    ),
  },
];

export { desktopCpuContent };
