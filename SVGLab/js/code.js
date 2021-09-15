class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor = '#99FF00';
    normalColor = '#7700AA';
    gameZone = document.getElementById("gameZone");

    constructor() {
        for(var i = 0; i < 25; i++) {
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            newCircle.classList.add("gameCircle");
            newCircle.setAttribute("cx", Math.random() * 400)
            newCircle.setAttribute("cy", Math.random() * 400)

            this.gameZone.appendChild(newCircle);
        }
    }
}

let g = new Game();