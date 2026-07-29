const url = 'https://pokeapi.co/api/v2/pokemon/';
const searchInput = document.getElementById('searchInput');
const pokemonNameElement = document.getElementById('pokemonName');
const abilitiesTitle = document.getElementById('abilitiesTitle');
const abilitiesList = document.getElementById('abilitiesList');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonIDElement = document.getElementById('pokemonID');
const statsContainer = document.getElementById("statsContainer");
const baseStatsTitle = document.getElementById("base-stats");



async function loadPokemonData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();


        pokemonNameElement.textContent = data.name;
        abilitiesTitle.style.display = 'block';
        abilitiesTitle.textContent = 'Abilities:';
        pokemonIDElement.style.display = 'block';
        pokemonIDElement.textContent = 'ID: ' + data.id;


        abilitiesList.innerHTML = '';
        data.abilities.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.ability.name;
            abilitiesList.appendChild(listItem);
           
        });


        pokemonImage.src = data.sprites.other['official-artwork'].front_default;
        pokemonImage.style.display = 'block';
        if(data.stats) {
            displayStats(data.stats);
            // console.log(data.stats);
        }

    } catch (error) {
        alert(error.message);
    }
}



function fetchPokemon() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query) {
        loadPokemonData(`${url}${query}`);
    } else {
        alert('Please enter a Pokémon name or ID.');
    }
}


function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    loadPokemonData(`${url}${randomId}`);
}

function displayStats(stats) {

    statsContainer.innerHTML = "";
    baseStatsTitle.style.display = 'block';


    stats.forEach(stat => {

        const statDiv = document.createElement("div");

        statDiv.className = "stat";

        statDiv.innerHTML = `
            <div class="stat-header">
                <span>${stat.stat.name.toUpperCase()}</span>
                <span>${stat.base_stat}</span>
            </div>

            <div class="progress">
                <div class="progress-bar"
                     style="width:${Math.min(stat.base_stat,100)}%">
                </div>
            </div>
        `;

        statsContainer.appendChild(statDiv);
        // console.log(statDiv);

    });

}
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    fetchPokemon();
  }
});
