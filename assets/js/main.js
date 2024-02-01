const btnNext = document.querySelector(".next");
const olPokemons = document.querySelector(".pokemons");
const btnPrev = document.querySelector(".prev");

function criarCardPokemons(pokeDetalhado) {
  const elementoLista = document.createElement("li");
  const ordemPokemon = document.createElement("span");
  const nomePokemon = document.createElement("span");
  const imgPoke = document.createElement("img");
  imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetalhado.id}.svg`;
  const divIds = document.createElement("div");
  divIds.classList.add("ordem-lista");
  const textoNome = document.createTextNode(`${pokeDetalhado.name}`);
  nomePokemon.appendChild(textoNome);
  const textoOrdem = document.createTextNode(`#${pokeDetalhado.id}`);
  ordemPokemon.appendChild(textoOrdem);
  divIds.appendChild(ordemPokemon);
  divIds.appendChild(nomePokemon);
  elementoLista.appendChild(divIds);
  elementoLista.appendChild(imgPoke);
  olPokemons.appendChild(elementoLista);
}

btnNext.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((el) => {
    el.remove();
  });
  offset += 5;
  btnPrev.disabled = false;
  url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${6}`;
  pegarPokemons(offset, limit, url);
});

btnPrev.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((el) => {
    el.remove();
  });
  console.log(offset);
  if (offset !== 5) {
    offset -= 5;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${6}`;
    pegarPokemons(offset, limit, url);
  } else {
    offset -= 5;
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${6}`;
    pegarPokemons(offset, limit, url);
    btnPrev.disabled = true;
  }
});
