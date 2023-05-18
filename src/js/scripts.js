 
let pokemonRepository = (function () {
  // array where all loaded pokemon will be stored
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// checks if the loaded pokemon have a name and details URL and if so adds them to the array
  function add(pokemon) {
    const keys = Object.keys(pokemon);
      if (typeof pokemon === "object" &&
       keys.includes("name") &&
       keys.includes("detailsUrl") 
    ) {
      repository.push(pokemon);
    }
  }

  function getAll() {
    return repository;
  }
// displays modal using bootstrap
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

      modalTitle.empty();
      modalBody.empty();
      //this piece pulls the types out of the types array and turns them in to a string. As they are loaded from the API, the array is quite deeply nested. Console.log the array to see this
      let processedTypes = pokemon.types.map(function(el) {
        return el.type.name;
      }).join(", ");
      let nameElement = $("<h1>" + nameCapitalized + "</h1>");
      let imageElement = $('<img class="modal-img">');
      imageElement.attr("src", pokemon.imageURL);
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
      let typesElement = $("<p>" + "types : " + processedTypes + "</p>");

      modalTitle.append(nameElement);
      modalBody.append(heightElement);
      modalBody.append(typesElement);
      modalBody.append(imageElement);
})  
  };

  function hideModal() {
    let modalContainer = document.querySelector('#details-modal');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) =>{
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible'))
    {
      hideModal();
    }
  });


<<<<<<< HEAD
// fetch name and details URL from API after page loads
=======
<<<<<<<< HEAD:js/scripts.js
// fetch name and details URL from API after page loads
========

>>>>>>>> f951e694f2cb5e7e7d0ec215e91f674f2e0eff1a:src/js/scripts.js
>>>>>>> f951e694f2cb5e7e7d0ec215e91f674f2e0eff1a
  function loadList() {
    return  fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function addButtonEventHandler (button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon)});
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    let cardDiv = document.createElement("div");
    let nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    let pokeballImage = document.createElement("img");
    cardDiv.className = "pokemon-card";
    button.setAttribute("data-target", "#detailsModal");
    button.setAttribute("data-toggle", "modal");
    pokeballImage.setAttribute("src", "img/pokeball.png");
    button.innerText = nameCapitalized;
    button.classList.add("button-class", "btn", "btn-primary", "list-group-item", "list-group-item-action");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    cardDiv.appendChild(button);
    button.appendChild(pokeballImage);
    listPokemon.appendChild(cardDiv);
    addButtonEventHandler(button, pokemon);
    pokeballImage.classList.add("pokeball-img");
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageURL = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.name = details.name;
    }).catch(function (e){
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



function filterItems(arr, query) {
  return arr.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
}
