export type Product = {
  title: string;
  price: number;
  discountedPrice?: number;
  installmentPrice?: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

type Caracteristica = {
  caracteristica: string;
  valor: string;
};

export type Produto = {
  id: number;
  titulo: string;
  imgs?: {
    thumbnails?: string[];
    previews?: string[];
    descricao?: string[];
  };
  descricao: {
    basica: string,
    dadosTecnicos: Caracteristica[],
    maisInformacoes: Caracteristica[],
  };
};
