import { CarouselItemData } from "../../components/core-carousel";

const netbookCpuContent: CarouselItemData[] = [
  {
    title: "A Era dos Netbooks: Portabilidade com Baixo Consumo (2007-2012)",
    image: "/images/netbook/2007-net.png",
    description:
      "Entre 2007 e 2012, os netbooks revolucionaram a computação portátil com foco em baixo consumo e custo acessível. Alimentados principalmente por processadores Intel Atom e AMD de baixo TDP, esses dispositivos dominaram o mercado educacional e corporativo básico antes de cederem espaço a tablets e ultrabooks.",
    content: (
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">INTEL</h3>

          <li>
            <span className="font-bold">Intel Celeron M ULV 353 / 900 MHz (2007)</span>: 
            Baseado na arquitetura Dothan, marcou presença no primeiro netbook popular, o Asus Eee PC 700. Destacava-se pelo baixo consumo de energia.
          </li>
          <li>
            <span className="font-bold">Intel Atom N270 / 1.6 GHz (2008)</span>: 
            Primeiro Atom amplamente adotado em netbooks. Arquitetura Bonnell (Silverthorne), com foco extremo em eficiência energética.
          </li>
          <li>
            <span className="font-bold">Intel Atom N280 / 1.66 GHz (2009)</span>: 
            Pequena melhoria em relação ao N270, com barramento frontal ligeiramente mais rápido.
          </li>
          <li>
            <span className="font-bold">Intel Atom Z500–Z540 Series (2009)</span>: 
            Versões mais compactas e com menor TDP, usadas em netbooks ultracompactos e tablets iniciais.
          </li>
          <li>
            <span className="font-bold">Intel Atom N450 / 1.66 GHz (2010)</span>: 
            Parte da plataforma Pine Trail, integrou GPU e controlador de memória no mesmo chip, reduzindo consumo e tamanho da placa-mãe.
          </li>
          <li>
            <span className="font-bold">Intel Atom N455 / N475 (2010)</span>: 
            Suporte para memória DDR3, trazendo melhorias sutis em desempenho e eficiência.
          </li>
          <li>
            <span className="font-bold">Intel Atom N550 / N570 (2011)</span>: 
            Primeiros Atoms dual-core para netbooks, ainda baseados na arquitetura Pineview.
          </li>
          <li>
            <span className="font-bold">Intel Atom N2600 / N2800 (2012)</span>: 
            Plataforma Cedar Trail. Melhoria significativa no desempenho gráfico e maior eficiência energética.
          </li>
          <li>
            <span className="font-bold">Intel Atom Z2760 / Clover Trail (2012)</span>: 
            Voltado a híbridos e tablets, mas também presente em alguns netbooks. Suporte a Windows 8 e maior foco em mobilidade.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">AMD</h3>

          <li>
            <span className="font-bold">AMD Athlon Neo MV-40 / 1.6 GHz (2009)</span>: 
            Primeira tentativa da AMD de entrar no mercado de netbooks premium. TDP superior ao Atom, mas com desempenho bruto melhor.
          </li>
          <li>
            <span className="font-bold">AMD V-Series V105 / 1.2 GHz (2010)</span>: 
            Linha econômica de baixo consumo, buscando competir diretamente com os Atom de entrada.
          </li>
          <li>
            <span className="font-bold">AMD C-Series (C-30, C-50, C-60) - Bobcat (2011)</span>: 
            Primeira linha verdadeiramente competitiva da AMD para netbooks. Com gráficos Radeon integrados, superava os Intel Atom em jogos leves e multimídia.
          </li>
          <li>
            <span className="font-bold">AMD E-Series (E-240, E-300, E-350, E-450) - Zacate (2011–2012)</span>: 
            Voltada para netbooks mais premium, equilibrava desempenho de CPU e GPU com consumo relativamente baixo.
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">OUTROS FABRICANTES</h3>

          <li>
            <span className="font-bold">VIA Nano U2250 / U2500 (2008–2009)</span>: 
            Alternativa menos popular, mas presente em alguns modelos. Arquitetura Isaiah, com desempenho modesto e baixo consumo.
          </li>
        </ul>

        <div className="text-sm text-muted-foreground">
          Após 2012, os netbooks perderam espaço para tablets, ultrabooks e Chromebooks. 
          A Intel e a AMD redirecionaram seus esforços para chips mais potentes e integrados, 
          encerrando progressivamente as linhas específicas para netbooks. 
          A tendência do mercado passou a ser notebooks ultracompactos com maior poder de processamento.
        </div>
      </div>
    ),
  },
];

export default netbookCpuContent;
