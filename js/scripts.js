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


//for loop iterating through the array until the end
for (let i = 0; i < pokemonList.length; i++) {
  //for pokemon with height less than 6 just print name and height
  if (pokemonList[i].height < 6) {document.write('<p>' + pokemonList[i].name + ': Height:' + pokemonList[i].height + '</p>');
  //for pokemon whose height is not less than 6 print name, height and extra message
} else {document.write('<p>' + pokemonList[i].name + ' Height: ' + pokemonList[i].height + ' - Wow! He\'s a Big Boy! ' + '</p>');
  }
}
