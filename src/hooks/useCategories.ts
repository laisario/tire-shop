export function useCategories(pneus: { carros: any, vans: any, caminhoes: any} | null) {
  return [
    {
      name: "Carros",
      products: pneus?.carros?.length | 0,
      isRefined: false,
      value: "carros",
      img: "/images/categories/categories-01.jpg"
    },
    {
      name: "Vans",
      products: pneus?.vans?.length  | 0,
      isRefined: false,
      value: "vans",
      img: "/images/categories/categories-02.jpg",
    },
    {
      name: "Ônibus / Caminhões",
      products: pneus?.caminhoes?.length  | 0,
      isRefined: false,
      value: "caminhões / ônibus",
      img: "/images/categories/categories-03.jpg",
    },
  ];
}