const pokemonName = document.querySelector('.pokemonName') ;
const show = document.querySelector('.show') ;


async function fetchData() {
    try {
        const name = pokemonName.value.toLowerCase() ;
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) ;

        if (!url.ok) {
            throw new Error ("Could Not Fetch") ;
        }

        const data = await url.json() ;
        const imgSrc = data.sprites.front_default ;
        document.querySelector('.pokemonImage').innerHTML = `<img src="${imgSrc}" alt="pokemon"></img>` ;
        document.querySelector('.name').innerHTML = `${data.name}` ;
        pokemonName.value = '' ;
    }
    
    catch(error) {
        console.error(error);
    }
}

show.addEventListener('click', () => {
    fetchData();
})