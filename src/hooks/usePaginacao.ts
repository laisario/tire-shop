export function usePaginacao(data: any[], itemsPerPage = 8) {
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const paginas = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return paginas;
}
