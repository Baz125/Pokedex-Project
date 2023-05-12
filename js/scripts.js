let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      modalTitle.empty();
      modalBody.empty();

      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      let imageElement = $('<img class="modal-img style="width:50%">');
      imageElement.attr("src", pokemon.imageURL);
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
      let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");

      modalTitle.append(nameElement);
      modalBody.append(heightElement);
      modalBody.append(typesElement);
      modalBody.append(imageElement);
})  
  };

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) =>{
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible'))
    {
      hideModal();
    }
  });


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
    let detailsModal = document.querySelector("#detailsModal");
    cardDiv.className = "pokemon-card";
    button.setAttribute("data-target", detailsModal);
    button.setAttribute("data-toggle", "modal");
    button.innerText = pokemon.name;
    button.classList.add("button-class", "btn", "btn-primary");
    listPokemon.classList.add("list-group-item");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    cardDiv.appendChild(button);
    listPokemon.appendChild(cardDiv);
    addButtonEventHandler(button, pokemon);

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
