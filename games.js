 //VARIANTA 2 
 var baseUrl = "https://games-world.herokuapp.com/games";


 async function getGames() {

     let response = await fetch(baseUrl);
     let gameList = await response.json();
     console.log(gameList)


     var gamesElement = document.querySelector(".games");


     gameList.forEach(game => {

         const gameAll = gameDetails(game)
         gamesElement.appendChild(gameAll)
     });
 }
 getGames()

 function gameDetails(game) {
     const gameAllDivs = document.createElement("div")
     gameAllDivs.style.border = " 2px solid indigo";
     gameAllDivs.style.marginBottom = "30px";
     gameAllDivs.style.Width = "fit-in"
     gameAllDivs.style.margin = "20px"
     gameAllDivs.style.backgroundColor = "rgba(100, 100, 200, 0.25)"


     const titleElement = document.createElement("div");
     titleElement.classList.add("title");
     titleElement.innerHTML = game.title
     titleElement.style.font = "italic 24px Monotype"
     titleElement.style.color = " blue"
     titleElement.style.margin = "20px"
     gameAllDivs.appendChild(titleElement);

     const imageElement = document.createElement("img");
     imageElement.src = game.imageUrl;
     imageElement.style.border = " 1px solid black";
     imageElement.style.margin = "20px"
     imageElement.style.width = "300px"
     gameAllDivs.appendChild(imageElement);

     const descriptionElement = document.createElement("div");
     descriptionElement.classList.add("description");
     descriptionElement.innerHTML = game.description
     descriptionElement.style.font = "italic 16px arial"
     descriptionElement.style.color = "darkblue"
     descriptionElement.style.paddingBottom = "10px";
     descriptionElement.style.margin = "20px"
     gameAllDivs.appendChild(descriptionElement);
     return gameAllDivs
 }
 //creare clasa Game
 class Game {
     constructor(title, description) {
         this.title = title
         this.description = description
     }
     render() {
         const gameDOM = document.createElement("div");
         gameDOM.style.border = "2px solid white"

         gameDOM.innerHTML = `
       <h3>${this.title}</h3>
       <p>${this.description}</p>`

         return gameDOM;
     }
 }

 //adaugam buton de add game
 //  const gameAddButton = document.querySelector(".gameAddButton");
 //  gameAddButton.addEventListener("click", addGame(title, description));

 //  function createGame() {
 //      console.log('start create game')

 //      const game = getGameData() // sa returneze un obiect game

 //      console.log(game)


 //  }


 //  function getGameData() {
 //      const gameTitle = render(this.title).value;
 //      const gameDescription = render(this.description).value;

 //      return {
 //          title: gameTitle,
 //          description: gameDescription,
 //      }
 //  }
 //  getGameData()

 function addGame(title, description) {
     var gameList = []
     gameList.push("title")
     gameList.push("description")
     console.log(gameList)
     return addGame(title, description)
 }
 addGame(title, description)

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