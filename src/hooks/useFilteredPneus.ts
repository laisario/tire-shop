import { useMemo } from 'react';
import Fuse from 'fuse.js';

export function useFilteredPneus(dadosPneus, filter, search, category, measure) {
  return useMemo(() => {
    let dadosBase = dadosPneus;
    if (!dadosBase.length) return [];

    if (measure) {
      const fuse = new Fuse(dadosBase, {
        keys: ['medida'],
        threshold: 0.3,
      });
      const resultado = fuse.search(measure);
      return resultado.map(r => r.item);
    }

    const dadosFiltradosPorCategoria =
      category && category !== 'todas'
        ? dadosPneus.filter(p => p.categoria === category)
        : dadosPneus;

    if (search) {
      const fuse = new Fuse(dadosFiltradosPorCategoria, {
        keys: ['titulo', 'marca', 'medida', 'descricao.dadosTecnicos.valor'],
        threshold: 0.3,
      });
      const resultado = fuse.search(search);
      dadosBase = resultado.map(r => r.item);
    }

    return dadosBase.filter(pneu => {
      const filtroMarcas =
        filter.marcas?.length ? filter.marcas.includes(pneu.marca) : true;

      const filtroCategorias =
        filter.categorias?.length ? filter.categorias.includes(pneu.categoria) : true;

      const filtroMaisVendidos =
        filter.ordenacao?.value === 'maisVendidos' ? pneu.maisVendido : true;

      return filtroMarcas && filtroCategorias && filtroMaisVendidos;
    });
  }, [dadosPneus, filter, search, category, measure]);
}
