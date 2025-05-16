export function useBrands(pneus) {
  return [
    {
      name: "Bridgestone",
      value: "BRIDGESTONE",
      products: pneus.bridgestone.length,
    },
    {
      name: "Continental",
      value: "CONTINENTAL",
      products: pneus.continental.length,
    },
  ];
}