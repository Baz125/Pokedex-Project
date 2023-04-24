let pokemonRepository = (function () {
  let repository = [
    {
      name: "Venusaur",
      height: 2,
      types: ["grass", "poison"],
    },
    {
      name: "Slowbro",
      height: 4,
      types: ["psychic", "water"],
    },
    {
      name: "Gyrados",
      height: 6.5,
      types: ["water", "flying"],
    },
  ];
  function add(pokemon) {
    const keys = Object.keys(pokemon);
    if (typeof pokemon === "object" &&
      keys.includes("name") &&
      keys.includes("height") &&
      keys.includes("types"))
    {
      repository.push(pokemon);
    }
    else {console.log("data is not correct, we need a name, height and types for each pokemon")}
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    let cardDiv = document.createElement("div");
    cardDiv.className = "pokemon-card";
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    cardDiv.appendChild(button);
    listPokemon.appendChild(cardDiv);
    button.addEventListener('click', function () {
      showDetails(pokemon)});
  }




  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

function filterItems(arr, query) {
  return arr.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
}
