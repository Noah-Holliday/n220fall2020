washingZone = document.getElementById("washingZone");

class WashingMachine {
    loadingcircle = {x:250, y:350, r:60}
    dialcircle = {x:350, y:175, r:20}
    rectangle = {x:100, y:100, width:300 , height:400}

    draw() {
        let baseRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let loadingCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let dialCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        baseRectangle.setAttribute("x", this.rectangle.x);
        baseRectangle.setAttribute("y", this.rectangle.y);
        baseRectangle.setAttribute("width", this.rectangle.width);
        baseRectangle.setAttribute("height", this.rectangle.height);
        baseRectangle.setAttribute("fill", `rgb(128, 0, 128)`)

        loadingCircle.setAttribute("cx", this.loadingcircle.x)
        loadingCircle.setAttribute("cy", this.loadingcircle.y)
        loadingCircle.setAttribute("r", this.loadingcircle.r)

        dialCircle.setAttribute("cx", this.dialcircle.x)
        dialCircle.setAttribute("cy", this.dialcircle.y)
        dialCircle.setAttribute("r", this.dialcircle.r)

        this.washingZone.appendChild(baseRectangle);
        this.washingZone.appendChild(loadingCircle);
        this.washingZone.appendChild(dialCircle);
    }

    agument() {
        this.loadingcircle.x = this.loadingcircle.x + (Math.random() * 100)
    }
}

class WasherManager {
    WashingMachineArray = [];
    MakeMachines() {   
        for(i = 0; i < 10; i++) {
            NewMachine = new WashingMachine();
            WashingMachineArray[i] = NewMachine;
        }
        for(i = 0; i < 10; i++) {
            NewMachineArray[i].agument();
            NewMachineArray[i].draw();
        }
    }   
}

let g = new WasherManager();
g.MakeMachines();