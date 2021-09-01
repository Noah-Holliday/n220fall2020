function setup() {
    createCanvas(800, 600);
    fill("blue");
    raindropholder = [];
    for (i=0; i<30; i++) {
        newraindrop = new Raindrop();
        raindropholder[i] = newraindrop;
    }
}

function draw() {
    background(200);
    checkground.call(Ground);
    for (i=0; i<30; i++){
        raindropholder[i].falling();
    }
}

class Raindrop {
    startx = Math.random() * 800
    startrad = 2 + Math.random() * 5
    dropspeed = 3 + Math.random() * 3
    height = 0 
    falling = function() {
        this.height += this.dropspeed
        circle(this.startx, this.height, this.startrad)
        if (this.height > Ground.y) {
            this.height = 0,
            this.startx = Math.random() * 800
            this.startrad = 2 + Math.random() * 5
            this.dropspeed = 3 + Math.random() * 3
            Ground.raindropcontainer += 1;
        }
    } 
}

var Ground  = {
    height: 1,
    width: 800,
    y: 599,
    x: 0,
    raindropcontainer: 0
}

function checkground() {
    rect(this.x, this.y, this.width, this.height)
    if (this.raindropcontainer > 10) {
        this.y -= 1,
        this.height += 1,
        this.raindropcontainer = 0
    }
}