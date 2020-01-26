const quantidadePokemon = 151

const fetchPokemon = async id => {
    var returnAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    var pokemon = await returnAPI.json();
    createPokemonCard(pokemon)
}

const createPokemonCard = pokemon => {

    const pokemonName = convertPokemonFirstLetterToUpper(pokemon.name)
    
    const cardHTML = `
        <img class="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Sunset in the mountains">
        <div>
            <h1 class="font-sans font-bold">${pokemonName}</h1>
        </div>
    `;
    
    const pokemonContainer = document.getElementById('containerPokemons')
    var newDiv = document.createElement('div');
    newDiv.classList.add('bg-white', 'rounded-lg', 'max-w-sm', 'shadow-2xl', 'inline-block', 'px-2', 'py-2', 'm-2', 'text-center')
    newDiv.innerHTML = cardHTML;
    pokemonContainer.appendChild(newDiv)

}

const convertPokemonFirstLetterToUpper = (name) => {
    const pokemonNameFirstLetter = name.slice(0, 1);
    const pokemonNameWithoutFirstLetter = name.slice(1, name.lenght);
    const pokemonName = pokemonNameFirstLetter.toUpperCase() + pokemonNameWithoutFirstLetter;

    return pokemonName;
}

for (let index = 1; index <= quantidadePokemon; index++) {
    fetchPokemon(index);    
}