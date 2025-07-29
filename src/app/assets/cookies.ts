export type Cookie = {
  id: number;
  name: string;
  description: string;
  weight: number[];
  images: string[];
};

export const cookies: Cookie[] = [
  {
    id: 1,
    name: "OREO",
    description:
      "Um mergulho cremoso no sabor do Oreo, envolto em uma massa de chocolate feita pra derreter na boca.",
    weight: [40, 80, 120],
    images: [
      "/images/cookies/transparent/oreo.png",
      "/images/cookies/transparent/oreo-aberto.png",
    ],
  },
  {
    id: 2,
    name: "RED VELVET",
    description:
      "Vermelho intenso, recheio branco cremoso e um sabor que é puro carinho em forma de cookie.",
    weight: [40, 80, 120],
    images: [
      "/images/cookies/transparent/redvelvet.png",
      "/images/cookies/transparent/redvelvet-aberto.png",
    ],
  },
  {
    id: 3,
    name: "DOCE DE LEITE",
    description:
      "Macio por fora, absurdamente cremoso por dentro. Esse de doce de leite é um abraço açucarado.",
    weight: [40, 80, 120],
    images: [
      "/images/cookies/transparent/doce-de-leite.png",
      "/images/cookies/transparent/doce-de-leite-aberto.png",
    ],
  },
  {
    id: 4,
    name: "MEIO AMARGO",
    description:
      "Sabor intenso, recheio cremoso e aquele amarguinho que faz toda a diferença.",
    weight: [40, 80, 120],
    images: [
      "/images/cookies/transparent/meio-amargo.png",
      "/images/cookies/transparent/meio-amargo-aberto.png",
    ],
  },
  {
    id: 5,
    name: "NINHO COM NUTELLA",
    description:
      "O combo dos sonhos: Nutella derretendo por dentro e Ninho cremoso por cima.",
    weight: [40, 80, 120],
    images: [
      "/images/cookies/transparent/ninho-com-nutella.png",
      "/images/cookies/transparent/ninho-com-nutella-aberto.png",
    ],
  },
];
