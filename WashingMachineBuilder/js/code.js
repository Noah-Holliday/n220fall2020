class WashingMachine {
    washingZone = document.getElementById("washingZone");

    constructor(loadingcircle, dialcircle, rectangle){
        this.loadingcircle = loadingcircle;
        this.dialcircle = dialcircle;
        this.rectangle = rectangle

        if (Math.random() < .5) {
            this.loadingcircle.x = this.loadingcircle.x + (Math.random() * 10)
            this.loadingcircle.y = this.loadingcircle.y + (Math.random() * 10)
            this.loadingcircle.r = this.loadingcircle.r + (Math.random() * 1)
            this.dialcircle.x = this.dialcircle.x + (Math.random() * 10)
            this.dialcircle.y = this.dialcircle.y + (Math.random() * 10)
            this.dialcircle.r = this.dialcircle.r + (Math.random() * 1)
            this.rectangle.x = this.rectangle.x + (Math.random() * 10)
            this.rectangle.y = this.rectangle.y + (Math.random() * 10)
            this.rectangle.width = this.rectangle.width + (Math.random() * 10)
            this.rectangle.height = this.rectangle.height + (Math.random() * 10)
        }
        else {
            this.loadingcircle.x = this.loadingcircle.x - (Math.random() * 10)
            this.loadingcircle.y = this.loadingcircle.y - (Math.random() * 10)
            this.loadingcircle.r = this.loadingcircle.r - (Math.random() * 1)
            this.dialcircle.x = this.dialcircle.x - (Math.random() * 10)
            this.dialcircle.y = this.dialcircle.y - (Math.random() * 10)
            this.dialcircle.r = this.dialcircle.r - (Math.random() * 1)
            this.rectangle.x = this.rectangle.x - (Math.random() * 10)
            this.rectangle.y = this.rectangle.y - (Math.random() * 10)
            this.rectangle.width = this.rectangle.width - (Math.random() * 10)
            this.rectangle.height = this.rectangle.height - (Math.random() * 10)
        }
    }

    baseRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    loadingCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dialCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    draw() {
        while (this.washingZone.firstChild) {
            this.washingZone.removeChild(this.washingZone.firstChild);
        }

        this.baseRectangle.setAttribute("x", this.rectangle.x);
        this.baseRectangle.setAttribute("y", this.rectangle.y);
        this.baseRectangle.setAttribute("width", this.rectangle.width);
        this.baseRectangle.setAttribute("height", this.rectangle.height);
        this.baseRectangle.setAttribute("fill", `rgb(128, 0, 128)`)

        this.loadingCircle.setAttribute("cx", this.loadingcircle.x)
        this.loadingCircle.setAttribute("cy", this.loadingcircle.y)
        this.loadingCircle.setAttribute("r", this.loadingcircle.r)

        this.dialCircle.setAttribute("cx", this.dialcircle.x)
        this.dialCircle.setAttribute("cy", this.dialcircle.y)
        this.dialCircle.setAttribute("r", this.dialcircle.r)

        this.washingZone.appendChild(this.baseRectangle);
        this.washingZone.appendChild(this.loadingCircle);
        this.washingZone.appendChild(this.dialCircle);
    }

    agument() {

    }
}

class WasherManager {
    WashingMachineArray = [];
    loadingcircle = {x:250, y:350, r:60};
    dialcircle = {x:350, y:175, r:20};
    rectangle = {x:100, y:100, width:300, height:400};
    MachinePlacer = 0;
    MakeMachines() {   
        for(var i = 0; i < 10; i++) {
            var NewMachine = new WashingMachine(this.loadingcircle, this.dialcircle, this.rectangle);
            this.WashingMachineArray[i] = NewMachine;
        }
    }   

    NextMachine() {
        this.MachinePlacer += 1;
        this.WashingMachineArray[this.MachinePlacer].draw();
    }
    
    PreviousMachine() {
        this.MachinePlacer -= 1;
        this.WashingMachineArray[this.MachinePlacer].draw();
    }
}

let g = new WasherManager();
g.MakeMachines();

var nextbutton = document.getElementById('next')

function next() {
    g.NextMachine()
}

function previous() {
    g.PreviousMachine()
}