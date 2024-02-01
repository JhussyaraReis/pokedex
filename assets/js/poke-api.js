let offset = 0;
let limit = 6;

let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function converterPokemon(pokeDetalhado) {
  const pokemon = new Pokemon();
  pokemon.nome = pokeDetalhado.name;
  pokemon.ordem = pokeDetalhado.order;
  const tipos = pokeDetalhado.types.map((typesSlot) => typesSlot.type.name);
  const [tipoPrincipal] = tipos;
  pokemon.tipoPrincipal = tipoPrincipal;
  pokemon.altura = pokeDetalhado.height;
  pokemon.peso = pokeDetalhado.weight;
  const habilidades = pokeDetalhado.abilities.map((habi) => habi.ability.name);
  pokemon.habilidades = habilidades;
  pokemon.tipos = tipos;
  pokemon.img1 = pokeDetalhado.sprites.other.dream_world.front_default;
  return pokemon;
}

function pegarPokemons(offset, limit, url) {
  fetch(url)
    .then((response) => response.json())
    .then((resJson) => {
      const resultados = resJson.results;
      resultados.forEach((elemento) => {
        fetch(elemento.url)
          .then((response) => response.json())
          .then((pokeDetalhado) => {
            criarCardPokemons(pokeDetalhado);
            // console.log(pokeDetalhado);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

pegarPokemons(offset, limit, url);
