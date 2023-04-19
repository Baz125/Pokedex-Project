let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Venusaur",
      height: 2,
      types: [" grass", " poison"],
    },
    {
      name: "Slowbro",
      height: 4,
      types: [" psychic", " water"],
    },
    {
      name: "Gyrados",
      height: 6.5,
      types: [" water", " flying"],
    },
  ];
  function add(pokemon) {
    if (typeof object.keys(pokemonList.name === String))
    if (typeof object.keys(pokemonList.height === Number))
    if (typeof object.keys(pokemonList.types === Array))
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
pokemonRepository.getAll().forEach(myLoopFunction);

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

