const offset = 0;
const limit = 24;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

const listaPokemons = [];

function criarCardPokemons(lista) {
  const olPokemons = document.querySelector(".pokemons");
  lista.forEach((elemento) => {
    const elementoLista = document.createElement("li");
    const nomePokemon = document.createTextNode(`${elemento.name}`);
    elementoLista.appendChild(nomePokemon);
    olPokemons.appendChild(elementoLista);
  });
}

fetch(url)
  .then((response) => response.json())
  .then((resJson) => {
    const resultados = resJson.results;
    resultados.forEach((elemento) => {
      listaPokemons.push(elemento);
    });
    criarCardPokemons(listaPokemons);
  });

// console.log(listaPokemons);
