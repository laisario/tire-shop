import { useMemo } from "react";

export function usePneuGroups(dadosPneus) {
  const pneusBridgestone = useMemo(() => dadosPneus.filter((p) => p.marca === "BRIDGESTONE"), [dadosPneus]);
  const pneusContinental = useMemo(() => dadosPneus.filter((p) => p.marca === "CONTINENTAL"), [dadosPneus]);
  const pneusCaminhoesOnibus = useMemo(() => dadosPneus.filter((p) => p.categoria === "caminhões / ônibus"), [dadosPneus]);
  const pneusCarros = useMemo(() => dadosPneus.filter((p) => p.categoria === "carros"), [dadosPneus]);
  const pneusVans = useMemo(() => dadosPneus.filter((p) => p.categoria === "vans"), [dadosPneus]);

  return {
    pneusBridgestone,
    pneusContinental,
    pneusCaminhoesOnibus,
    pneusCarros,
    pneusVans,
  };
}