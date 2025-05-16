export function filtrarPneus(pneus, termoBusca) {
  if (!termoBusca) return pneus;

  const termo = termoBusca.toLowerCase();

  return pneus.filter((pneu) => {
    const campos = [
      pneu.titulo,
      pneu.marca,
      pneu.medida,
      ...(pneu.descricao?.dadosTecnicos || []).map((dt) => dt.valor)
    ];

    return campos.some((campo) =>
      campo?.toLowerCase().includes(termo)
    );
  });
}