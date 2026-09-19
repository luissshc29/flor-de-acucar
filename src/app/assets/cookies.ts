export type Cookie = {
  id: number;
  active: boolean;
  name: string;
  description: string;
  weight: {
    id: number;
    grams: number;
    price: number;
    highlight?: boolean;
  }[];
  images: string[];
};

export const cookies: Cookie[] = [
  {
    id: 1,
    active: true,
    name: "OREO",
    description:
      "Um mergulho cremoso no sabor do Oreo, envolto em uma massa de chocolate feita pra derreter na boca.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 4,
      },
      {
        id: 2,
        grams: 80,
        price: 8,
      },
      {
        id: 3,
        grams: 120,
        price: 11,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/oreo.PNG",
      "/images/cookies/transparent/proshots/oreo-aberto.PNG",
    ],
  },
  {
    id: 2,
    active: true,
    name: "RED VELVET",
    description:
      "Vermelho intenso, recheio branco cremoso e um sabor que é puro carinho em forma de cookie.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 4,
      },
      {
        id: 2,
        grams: 80,
        price: 8,
      },
      {
        id: 3,
        grams: 120,
        price: 11,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/redvelvet.PNG",
      "/images/cookies/transparent/proshots/redvelvet-aberto.PNG",
    ],
  },
  {
    id: 3,
    active: true,
    name: "BRIGADEIRO AO LEITE",
    description:
      "Macio por fora, absurdamente cremoso por dentro. Esse de brigadeiro ao leite é um abraço açucarado.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 3.5,
      },
      {
        id: 2,
        grams: 80,
        price: 7,
      },
      {
        id: 3,
        grams: 120,
        price: 9,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/brigadeiro-ao-leite.PNG",
      "/images/cookies/transparent/proshots/brigadeiro-ao-leite-aberto.PNG",
    ],
  },
  {
    id: 4,
    active: true,
    name: "MEIO AMARGO",
    description:
      "Sabor intenso, recheio cremoso e aquele amarguinho que faz toda a diferença.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 3.5,
      },
      {
        id: 2,
        grams: 80,
        price: 7,
      },
      {
        id: 3,
        grams: 120,
        price: 9,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/meio-amargo.PNG",
      "/images/cookies/transparent/proshots/meio-amargo-aberto.PNG",
    ],
  },
  {
    id: 5,
    active: true,
    name: "NINHO COM NUTELLA",
    description:
      "O combo dos sonhos: Nutella derretendo por dentro e Ninho cremoso por cima.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 4,
      },
      {
        id: 2,
        grams: 80,
        price: 8,
      },
      {
        id: 3,
        grams: 120,
        price: 11,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/ninho-com-nutella-2.PNG",
      "/images/cookies/transparent/proshots/ninho-com-nutella-aberto.PNG",
    ],
  },
  {
    id: 6,
    active: true,
    name: "CHURROS",
    description:
      "A massa perfeita, recheio de doce de leite e aquele toque de canela que só um cookie de churros tem.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 3.5,
      },
      {
        id: 2,
        grams: 80,
        price: 7,
      },
      {
        id: 3,
        grams: 120,
        price: 9,
        highlight: true,
      },
    ],
    images: [
      "/images/cookies/transparent/proshots/churros.PNG",
      "/images/cookies/transparent/proshots/churros-aberto.PNG",
    ],
  },
];
