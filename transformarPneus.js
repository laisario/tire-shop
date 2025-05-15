const fs = require('fs');

const dadosOriginais = JSON.parse(fs.readFileSync('./data/pneus.json', 'utf-8'));

function transformarPneus(dados, idInicial = 1) {
  const marcasValidas = ["CONTINENTAL", "BRIDGESTONE"];
  return dados
    .filter(item => marcasValidas.includes(item.MARCA?.toUpperCase()))
    .map((item, index) => {
      const medidaSemEspacos = item.MEDIDA?.replace(/\s+/g, '');
      const nomeImagem = `${medidaSemEspacos}${item.DESENHO?.replace(/\s+/g, '')}`.toUpperCase();

      return {
        id: idInicial + index,
        titulo: `Pneu ${item.MARCA} ${item.DESENHO} ${item.MEDIDA}`,
        categoria: "",
        marca: item.MARCA,
        medida: item.MEDIDA,
        maisVendido: false,
        precos: {
          VISTA: item["VISTA"] || "",
          "1x": item["1x"] || "",
          "2x": item["2x"] || "",
          "3x": item["3x"] || "",
          "4x": item["4x"] || "",
          "20 em 20": item["20 em 20"] || ""
        },
        imgs: {
          thumbnails: [
            `/images/descricaoPneus/${nomeImagem}.webp`,
            `/images/descricaoPneus/${nomeImagem}.webp`
          ],
          previews: [
            `/images/descricaoPneus/${nomeImagem}.webp`,
            `/images/descricaoPneus/${nomeImagem}.webp`
          ]
        },
        descricao: {
          basica: "",
          dadosTecnicos: [
            { caracteristica: "Marca", valor: item.MARCA },
            { caracteristica: "Linha", valor: "" },
            { caracteristica: "Modelo", valor: item.DESENHO || "" },
            { caracteristica: "Tamanho", valor: item.MEDIDA || "" },
            { caracteristica: "Índice de carga", valor: "" },
            { caracteristica: "Índice de velocidade", valor: "" },
            { caracteristica: "Tipo de serviço", valor: "" },
            { caracteristica: "É run flat", valor: "" },
            { caracteristica: "Tipo de terreno", valor: "" },
            { caracteristica: "Tipo de construção", valor: "" },
            { caracteristica: "Relação de aspecto do pneu", valor: "" },
            { caracteristica: "Largura de secção", valor: "" },
            { caracteristica: "Diâmetro da roda", valor: "" },
            { caracteristica: "Resistência ao rolamento", valor: "" },
            { caracteristica: "Aderência em pista molhada", valor: "" },
            { caracteristica: "Ruído externo", valor: "" },
            { caracteristica: "Tipo de unidade", valor: "Unidade" }
          ]
        }
      };
    });
}

const resultado = transformarPneus(dadosOriginais);

// Salva em um novo arquivo JSON
fs.writeFileSync('pneus_transformados.json', JSON.stringify(resultado, null, 2));

console.log('✅ Arquivo gerado: pneus_transformados.json');