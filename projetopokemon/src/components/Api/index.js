//function teste( pokemonTypes){
  //      return pokemonTypes.map((typeSlot) => `<li class="type> ${typeSlot.type.name}</li>`)
//}




// ============================== Request API ========================================
function requestApi(offset= 0, limit= 10){
    
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

            fetch(url)
               .then((response) => response.json())
               .then((jsonBody) => jsonBody.results)     
               .then((pokemons) => {pokemons.map((pokemon) =>  
                
                     fetch(pokemon.url)
                        .then((resultUrl)=> resultUrl.json())
                        .then( (requestComplet) => document.getElementById('contPokemon').innerHTML += pokemonList(convertPokeApiMyModel(requestComplet)))
                        //.then(document.getElementById('contPokemon').innerHTML += pokemonList)
 )
}) 
           .catch((error) => console.error(error))
 

 }



 // =============================== API IN HTML ================================

 function pokemonList(pokemon){

            return `
                <div class='${pokemon.type}'>
                       
                        <img  class='img'src = "${pokemon.photo}"/> 
                        <h1 class='id'>#0${pokemon.number}</h1>
                        <h2 class='name'> ${pokemon.name}</h2>      
                        
                </div>   
                `
} 
// ========================================== My model

class Pokemon {
        number;
        name;
        type;
        types = [];
        photo;
}


function convertPokeApiMyModel(model){
        const pokemon = new Pokemon()
                pokemon.number = model.order
                pokemon.name = model.name
                const types = pokemon.types = model.types.map((typeSlot)=> typeSlot.type.name)
                const [type] = types
                pokemon.types = types
                pokemon.type = type
                pokemon.photo = model.sprites.other.dream_world.front_default
               return pokemon
}  


function 





//===================================================
requestApi()



