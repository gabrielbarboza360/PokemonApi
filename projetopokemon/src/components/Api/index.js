// ============================== Request API ========================================
function requestApi(offset= 0, limit= 10){
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    fetch(url)
    .then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
 // ============================ END API Request ======================================
 
 // ====================================== MAP

 .then((pokemons) => {
  
pokemons.map((pokemon) => 

fetch(pokemon.url)
.then((resultUrl)=>
resultUrl.json()

)
.then((pokemonUrl) => {
document.getElementById('global').innerHTML += pokemonList(pokemonUrl)
console.log(pokemonUrl)

})



)
}) 

 .catch((error) => console.error(error))
 
 }



 // =============================== API IN HTML ================================

 function pokemonList(item){
     return `
        <div class='${item.types.map((teste) => teste.type.name)}'>
               
                <img  class='img'src = "${item.sprites.back_default}"/> 
                <h1 class='id'>#${item.id}</h1>
                <h2 class='name'> ${item.name}</h2>      
        </div>   
        `
  } 

  
   requestApi()




/* 
function requestApi(offset= 0, limit= 10){
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    fetch(url)
    .then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
 // ============================ END API Request ======================================
 
 // ====================================== MAP

 .then((pokemons) => {
        pokemons.map((pokemon) =>{
                    document.getElementById('global').innerHTML += pokemonList(pokemon)
                })
     }) 

 .catch((error) => console.error(error))
 
 }



*/