function criarCardPokemons(pokeDetalhado) {
  const olPokemons = document.querySelector(".pokemons");
  const elementoLista = document.createElement("li");
  const ordemPokemon = document.createElement("span");
  const nomePokemon = document.createElement("span");
  const imgPoke = document.createElement("img");
  imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetalhado.id}.svg`;
  const divIds = document.createElement("div");
  divIds.classList.add("ordem-lista");
  const textoNome = document.createTextNode(`${pokeDetalhado.name}`);
  nomePokemon.appendChild(textoNome);
  const textoOrdem = document.createTextNode(`#${pokeDetalhado.order}`);
  ordemPokemon.appendChild(textoOrdem);
  divIds.appendChild(ordemPokemon);
  divIds.appendChild(nomePokemon);
  elementoLista.appendChild(divIds);
  elementoLista.appendChild(imgPoke);
  olPokemons.appendChild(elementoLista);
}
