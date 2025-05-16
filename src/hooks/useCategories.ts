export function useCategories(pneus) {
  return [
    {
      name: "Carros",
      products: pneus.carros.length,
      isRefined: false,
      value: "carros",
    },
    {
      name: "Vans",
      products: pneus.vans.length,
      isRefined: false,
      value: "vans",
    },
    {
      name: "Ônibus / Caminhões",
      products: pneus.caminhoes.length,
      isRefined: false,
      value: "caminhões / ônibus",
    },
  ];
}