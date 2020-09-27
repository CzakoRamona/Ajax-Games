
//VARIANTA 2 
var baseUrl = "https://games-world.herokuapp.com/games";


async function getGames() {

  let response = await fetch(baseUrl);
  let gameList = await response.json();
  console.log(gameList)


  var gamesElement = document.querySelector(".games");


  //<div class="games">   


  
  //<div class="title">title</div>
  //<div class="gameImage">
  // <img class="imageUrl" src= ""alt="game"></img>
  //</div>
  // <div class="description">Black hot d.....</div>
  //</div>
  //</div>

  gameList.forEach(game => {

    const gameAll = gameDetails(game)
    gamesElement.appendChild(gameAll)
  });

}
getGames()

function gameDetails(game) {
  const gameAllDivs = document.createElement("div")
  gameAllDivs.style.border=" 2px solid indigo";
  gameAllDivs.style.marginBottom="30px";
  gameAllDivs.style.Width="fit-in"
  gameAllDivs.style.margin="20px"
  gameAllDivs.style.backgroundColor="rgba(100, 100, 200, 0.25)"


  const titleElement = document.createElement("div");
  titleElement.classList.add("title");
  titleElement.innerHTML = game.title
  titleElement.style.font="italic 24px Monotype"
  titleElement.style.color=" blue"
  titleElement.style.margin="20px"
  gameAllDivs.appendChild(titleElement);

  const imageElement = document.createElement("img");
  imageElement.src = game.imageUrl;
  imageElement.style.border=" 1px solid black";
  imageElement.style.margin="20px"
  imageElement.style.width="300px"
  gameAllDivs.appendChild(imageElement);

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.innerHTML = game.description
  descriptionElement.style.font="italic 16px arial"
  descriptionElement.style.color="darkblue"
  descriptionElement.style.paddingBottom="10px";
  descriptionElement.style.margin="20px"
  gameAllDivs.appendChild(descriptionElement);
  return gameAllDivs
}


//varianta1 nu am reusit mai mult ....url imi da mereu eroare 404 not found nu stiu de ce....
/*var baseUrl = new URL("https://games-world.herokuapp.com");

/*function getGames() {
    return fetch("https://games-world.herokuapp.com")
      .then(function (response) {
        return response.json()
      })
  }*/

/*  async function getGames(){
    const response=await fetch("https://games-world.herokuapp.com");
    return response.json()
  }

/*fetch(baseUrl+ "games",{
 method: 'GET'
})
.then(function(response){
return response.json();
})
.then(function(jsonResp) {
console.log(jsonResp);
});*/
//  async function getDetailsGames(){
//    const response=await fetch("https://games-world.herokuapp.com/games",{method:"GET"})
//    return response.json()
//  }
// async function main(){
// const container = document.querySelector("#games");

// try{
//   const games=await getDetailsGames();
//   console.log(games)
// }
// const gamesDOM=games
// .map( games=>new Game(game.title,game.description))
// .map(gameObject=> gameObject.render())

// gamesDOM.forEach( gamesDOM=>container.appendChild(gameDOM))
//getDetailsGames().then (function (games) {
//  console.log(games)

// for(let idx=0; idx < games.length; idx++){
//   const game = games[idx]; 
//   const gamesDOM = createGameDOM("div");
//   container.appendChild(gameDOM);

//   }
//   getDetailsGames();
//   container.appendChild(gameDOM);
// })
// }
