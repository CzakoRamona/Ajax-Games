class Game {
    constructor(title, imageUrl, description) {
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
    }
    render() {
        const gameDOM = document.createElement("div");
        gameDOM.style.border = "2px solid white"

        gameDOM.innerHTML = `
        <h3>${this.title}</h3>
        <p>${this.imageUrl}</p>
        <p>${this.description}</p>`

        return gameDOM;
    }
}
async function getGames() {
    const response = await fetch("https://games-world.herokuapp.com/games");
    return response.json
}