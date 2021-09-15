class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor = '#99FF00';
    normalColor = '#7700AA';
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        for(var i = 0; i < 25; i++) {
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            newCircle.classList.add("gameCircle");
            newCircle.setAttribute("cx", Math.random() * 600)
            newCircle.setAttribute("cy", Math.random() * 400)

            if(Math.random() < .3) {
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            } else {
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            newCircle.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCircle.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })

            newCircle.addEventListener("click", (event) => {
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    this.foundCircles++;

                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })


            this.gameZone.appendChild(newCircle);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 500;
    percent = 0;
    
    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let g = new Game();