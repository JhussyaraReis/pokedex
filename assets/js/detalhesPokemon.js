const imgPokemonDiv = document.querySelector(".imgPokemon");
const id = document.querySelector(".id");
const nome = document.querySelector(".nome");
const tipo1 = document.querySelector(".um");
const tipo2 = document.querySelector(".dois");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");
const habilidades = document.querySelector(".habilidades");
const imgPokemon = document.createElement("img");

function limparCampos() {
  id.innerHTML = "Id: #";
  nome.innerHTML = "Nome: ";
  tipo1.innerHTML = "Tipo 1: ";
  tipo2.innerHTML = "Tipo 2: ";
  altura.innerHTML = "Altura: ";
  peso.innerHTML = "Peso: ";
  habilidades.innerHTML = "Habilidades: ";
  imgPokemon.src = "";
}

function detalharPokemon(target) {
  limparCampos();
  imgPokemon.src = pokemons[target.className - 1].img1;
  imgPokemonDiv.appendChild(imgPokemon);
  id.innerHTML += pokemons[target.className - 1].ordem;
  nome.innerHTML += pokemons[target.className - 1].nome;
  tipo1.innerHTML += pokemons[target.className - 1].tipos[0];
  if (pokemons[target.className - 1].tipos[1] !== undefined) {
    tipo2.innerHTML += pokemons[target.className - 1].tipos[1];
  } else {
    tipo2.innerHTML += "-------";
  }

  altura.innerHTML += pokemons[target.className - 1].altura;
  peso.innerHTML += pokemons[target.className - 1].peso;
  habilidades.innerHTML += `${
    pokemons[target.className - 1].habilidades[0]
  } | ${pokemons[target.className - 1].habilidades[1]}`;
}

document.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    detalharPokemon(e.target);
  }
});
