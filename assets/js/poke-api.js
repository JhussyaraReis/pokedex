const offset = 0;
const limit = 6;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function converterPokemon(pokeDetalhado) {
  const pokemon = new Pokemon();
  pokemon.nome = pokeDetalhado.name;
  pokemon.ordem = pokeDetalhado.order;
  const tipos = pokeDetalhado.types.map((typesSlot) => typesSlot.type.name);
  const [tipoPrincipal] = tipos;
  pokemon.tipoPrincipal = tipoPrincipal;
  pokemon.altura = pokeDetalhado.height;
  pokemon.largura = pokeDetalhado.width;
  pokemon.peso = pokeDetalhado.Weight;
  pokemon.categoria = pokeDetalhado.order;
  pokemon.tipos = tipos;
  pokemon.img1 = pokeDetalhado.sprites.other.dream_world.front_default;
  return pokemon;
}

fetch(url)
  .then((response) => response.json())
  .then((resJson) => {
    const resultados = resJson.results;
    resultados.forEach((elemento) => {
      fetch(elemento.url)
        .then((response) => response.json())
        .then((pokeDetalhado) => {
          criarCardPokemons(pokeDetalhado);
          console.log(converterPokemon(pokeDetalhado));
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });
