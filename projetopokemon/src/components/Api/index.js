
import React, { useState } from 'react';
import Home from '../../pag/home/index'


// ============================== Request API ========================================
function requestApi(offset= 0, limit= 80){
    
   
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

            fetch(url)
               .then((response) => response.json())
               .then((jsonBody) => jsonBody.results)     
               .then((pokemons) => {pokemons.map((pokemon) =>  
                
                     fetch(pokemon.url)
                           .then((resultUrl)=> resultUrl.json())
                           .then( (requestComplet) => {
                              document.getElementById('contPokemon').innerHTML += pokemonList(convertPokeApiMyModel(requestComplet))}))}) 
                         
                 .catch((error) => console.error(error))
 }

 // =============================== API IN HTML ================================

 export function pokemonList(pokemon){

            return `
                <div class='${pokemon.type}' id="pokemonClick">
                        <img  class='img'src = "${pokemon.photo}"/> 
                        <h1 class='id'>#0${pokemon.number}</h1>
                        <h2 class='name'> ${pokemon.name}</h2>         
                </div>   
                `
} 

// ========================================== My model

 export class Pokemon {
        number;
        name;
        type;
        types = [];
        photo;
        weight;
        height;
        abilities;
        teste;
}


export function convertPokeApiMyModel(model){
        const pokemon = new Pokemon()
                pokemon.number = model.order
                pokemon.name = model.name
                const types = pokemon.types = model.types.map((typeSlot)=> typeSlot.type.name)
                const [type] = types
                pokemon.types = types
                pokemon.type = type
                pokemon.photo = model.sprites.other.dream_world.front_default
                pokemon.weight = model.weight
                pokemon.height = model.height
                pokemon.abilities = model.abilities.map((typeAbilities)=>typeAbilities.ability.name )

               return pokemon
}  

requestApi()



/*   ========================================= future implementation ===========================================

function specificationPokemon(pokemon){

   return `
   <div class= '${pokemon.type}' id='border'>

   <div class='contImg'>
      <img  class='img'src = "${pokemon.photo}"/> 
   </div>

      <div class='about'>
           <h2 class='name'>${pokemon.name} #00${pokemon.number}</h2>   
           <h3 class='type'>Type: ${pokemon.type}</h3>
           <h3 class='weight'>Weight: ${pokemon.weight}Kg</h3>
           <h3 class='height'>Height: ${pokemon.height}</h3>
           <h3 class='abilities'>Abilities: ${pokemon.abilities
           }</h3> 
      </div>    
</div>  
           `
}

========== In home

                  <SectionSpecification id="specification">
  
                   
            
                  </SectionSpecification>
          



*/
