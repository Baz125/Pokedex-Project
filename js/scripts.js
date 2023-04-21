let pokemonRepository = (function () {
  let pokemonList = [
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
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();

function myLoopFunction(pokemon) {
  document.write(
    "<p class = 'pokemon-card'>" +
      pokemon.name +
      " - Height: " +
      pokemon.height +
      ". Types: " +
      pokemon.types +
      "</p>"
  );
}
pokemonRepository.getAll().forEach(function (pokemon) {
 let unorderedList = document.querySelector('.pokemon-list');
 let listItem = document.createElement('li');
 let button = document.createElement('button');
 button.innerText = pokemon.name;
 button.classList.add("button-class");
 listItem.appendChild(button);
 unorderedList.appendChild(listItem);

});

function filterItems(arr, query) {
  return arr.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
}
