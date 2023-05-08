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
      console.log(pokemon);
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
      let nameElement = document.createElement('h1');
      nameElement.innerText = pokemon.name;
      let heightElement = document.createElement('h2');
      heightElement.innerText = 'Height: ' + pokemon.height;
      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageURL;
      modal.appendChild(nameElement);
      modal.appendChild(heightElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');

      modalContainer.addEventListener ('click', (e) => {
        let target = e.target;
        if (target === modalContainer){
          hideModal();
        }
      })
    });
  }

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
    cardDiv.className = "pokemon-card";
    button.innerText = pokemon.name;
    button.classList.add("button-class");
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
