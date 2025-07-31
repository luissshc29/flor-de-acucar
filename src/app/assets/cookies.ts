export type Cookie = {
  id: number;
  name: string;
  description: string;
  weight: {
    id: number;
    grams: number;
    price: number;
  }[];
  images: string[];
};

export const cookies: Cookie[] = [
  {
    id: 1,
    name: "OREO",
    description:
      "Um mergulho cremoso no sabor do Oreo, envolto em uma massa de chocolate feita pra derreter na boca.",
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
        price: 10,
      },
    ],
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
        price: 10,
      },
    ],
    images: [
      "/images/cookies/transparent/redvelvet.png",
      "/images/cookies/transparent/redvelvet-aberto.png",
    ],
  },
  {
    id: 3,
    name: "BRIGADEIRO AO LEITE",
    description:
      "Macio por fora, absurdamente cremoso por dentro. Esse de brigadeiro ao leite é um abraço açucarado.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 2.7,
      },
      {
        id: 2,
        grams: 80,
        price: 5.5,
      },
      {
        id: 3,
        grams: 120,
        price: 8,
      },
    ],
    images: [
      "/images/cookies/transparent/brigadeiro-ao-leite.png",
      "/images/cookies/transparent/brigadeiro-ao-leite-aberto.png",
    ],
  },
  {
    id: 4,
    name: "MEIO AMARGO",
    description:
      "Sabor intenso, recheio cremoso e aquele amarguinho que faz toda a diferença.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 2.7,
      },
      {
        id: 2,
        grams: 80,
        price: 5.5,
      },
      {
        id: 3,
        grams: 120,
        price: 8,
      },
    ],
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
        price: 10,
      },
    ],
    images: [
      "/images/cookies/transparent/ninho-com-nutella.png",
      "/images/cookies/transparent/ninho-com-nutella-aberto.png",
    ],
  },

  {
    id: 6,
    name: "CHURROS",
    description:
      "A massa perfeita, recheio de doce de leite e aquele toque de canela que só um cookie de churros tem.",
    weight: [
      {
        id: 1,
        grams: 40,
        price: 3,
      },
      {
        id: 2,
        grams: 80,
        price: 6,
      },
      {
        id: 3,
        grams: 120,
        price: 9,
      },
    ],
    images: [
      "/images/cookies/transparent/oreo.png",
      "/images/cookies/transparent/oreo-aberto.png",
    ],
  },
];
