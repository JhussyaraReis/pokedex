const offset = 0;
const limit = 6;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

fetch(url)
  .then((response) => response.json())
  .then((resJson) => {
    const resultados = resJson.results;
    resultados.forEach((elemento) => {
      fetch(elemento.url)
        .then((response) => response.json())
        .then((pokeDetalhado) => {
          // criar função exibir detalhes
          criarCardPokemons(pokeDetalhado);
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });
