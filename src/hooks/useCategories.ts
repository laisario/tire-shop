export function useCategories(pneus: { automoveis: any, suvsEPickups: any, onibusECaminhoesMisto: any, onibusECaminhoesRegional: any, onibusECaminhoesRodoviario: any, onibusECaminhoesUrbano: any} | null) {
  return [
    {
      name: "Automóveis",
      products: pneus?.automoveis?.length | 0,
      isRefined: false,
      value: "automoveis",
      img: "/images/categories/automoveis.jpeg"
    },
    {
      name: "SUVs e Pick Ups",
      products: pneus?.suvsEPickups?.length  | 0,
      isRefined: false,
      value: "suvs-e-pickups",
      img: "/images/categories/suv.jpg",
    },
    {
      name: "Ônibus / Caminhões Misto",
      products: pneus?.onibusECaminhoesMisto?.length  | 0,
      isRefined: false,
      value: "caminhoes-onibus-misto",
      img: "/images/categories/misto.jpg",
    },
    {
      name: "Ônibus / Caminhões Regional",
      products: pneus?.onibusECaminhoesRegional?.length  | 0,
      isRefined: false,
      value: "caminhoes-onibus-regional",
      img: "/images/categories/regional.jpg",
    },
    {
      name: "Ônibus / Caminhões Rodoviário",
      products: pneus?.onibusECaminhoesRodoviario?.length  | 0,
      isRefined: false,
      value: "caminhoes-onibus-rodoviario",
      img: "/images/categories/rodoviario.jpg",
    },
    {
      name: "Ônibus / Caminhões Urbano",
      products: pneus?.onibusECaminhoesUrbano?.length  | 0,
      isRefined: false,
      value: "caminhoes-onibus-urbano",
      img: "/images/categories/urbano.jpg",
    },
  ];
}