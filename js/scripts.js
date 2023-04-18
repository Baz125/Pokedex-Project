let pokemonList = [
  {
    name: 'Venusaur',
    height: 2,
    types: ['grass', 'poison']
  },
  {
    name: 'Slowbro',
    height: 4,
    types: ['psychic', 'water']
  },
  {
    name: 'Gyrados' ,
    height: 6.5,
    types: ['water', 'flying']
  }
] ;


// my working attempt to print the list
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<p>' + pokemonList[i].name + " Height: " + pokemonList[i].height + '</p>');
}

//my non-working attempt to write the list with the condition
for (let i = 0; i < pokemonList.length; i++) {
  if (height < 6) {document.write('<p>' + pokemonList[i].name + " Height: " + pokemonList[i].height + '</p>');
} else {document.write('<p>' + pokemonList[i].name + 'Height:' + pokemonList[i].height + 'He is a Big Boy!' + '</p>');
  }
}
