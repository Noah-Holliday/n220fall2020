function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(200)
    checkground.call(Ground)
}

class RainManager {
    for()
}

class Raindrop {
    startx = Math.random() * 800
    startrad = Math.random() * 5
    dropspeed = Math.random() * 3
    height = 0 
    body = circle(startx, height, startrad)
    falling = function() {
        this.height += dropspeed
    } 
}

function checkrain()

var Ground  = {
    height = 0,
    width = 800,
    y = 600,
    x = 0,
    raindropcontainer = 0,
}

function checkground() {
    rectangle(this.x, this.y, this.width, this.height)
    if (this.raindropcontainer > 10) {
        this.y -= 1,
        this.height -= 1,
        this.raindropcontainer = 0
    }
}