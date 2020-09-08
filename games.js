
//VARIANTA 2 aici imi da erore [object object]
var baseUrl ="https://games-world.herokuapp.com/games";

async function getGames() {

let response=await fetch (baseUrl);
let json=await response.json();
console.log(json)


var GamesElement=document.querySelector(".games");


//<div class="games">   

//<div class="list">
//<div class="_id">id</div>
    //<div class="title">title</div>
        //<div class="gameImage">
           // <img class="imageUrl" src= ""alt="game"></img>
        //</div>
   // <div class="description">Black hot d.....</div>
//</div>
//</div>

json.forEach( Games=> {

 const listElement=document.createElement("div");
 listElement.classList.add("list");
 GamesElement.appendChild(listElement);

 const idElement=document.createElement("div");
 idElement.classList.add("_id");
 listElement.appendChild(idElement);

 const titleElement=document.createElement("div");
 titleElement.classList.add("title");
 idElement.appendChild(titleElement);

 const gameImageElement=document.createElement("div");
 gameImageElement.classList.add("gameImage");
 titleElement.appendChild(gameImageElement);

 const imageElement=document.createElement("img");
imageElement.src=Games;
gameImageElement.appendChild(imageElement);

const descriptionElement=document.createElement("div");
descriptionElement.classList.add("description");
listElement.appendChild(descriptionElement);


});
getGames.appendChild(listElement);
}
getGames();


//varianta1 nu am reusit mai mult ....url imi da mereu eroare 404 not found nu stiu de ce....
/*var baseUrl = new URL("https://games-world.herokuapp.com");

function getGames() {
    return fetch("https://games-world.herokuapp.com")
      .then(function (response) {
        return response.json()
      })
  }

fetch(baseUrl+ "games",{
 method: 'GET'
})
.then(function(response){
return response.json();
})
.then(function(jsonResp) {
console.log(jsonResp);
});


const container = document.querySelector('#games');
getGames().then (function (games) {
  console.log(games)

  for(let idx=0; idx < games.length; idx++){
    const game = games[idx]; 
    const gameDOM = createGameDOM(game);
    container.appendChild(gameDOM);

  }
  getGames();
  container.appendChild(gameDOM);
})*/

