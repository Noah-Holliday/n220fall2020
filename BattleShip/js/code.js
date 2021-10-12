//creation of the ships
class Ship {
    //make the ship
    constructor(length, name){
        this.length = length;
        this.name = name;
        this.hits = 0
        this.coordinates = [];
    }

    //create the ships cordinates
    placeTheShip = function(column, row, direction) {
        //base cord array
        coordinateArray = []
        //make enital array all other coords are based off of
        basecord = (this.row, this.column)
        coordinateArray.push(basecord)
        //if the ship direction is horizontal
        if (this.direction = "H"){
            //run loop until it surpases ship length
            for (let i=1; i <= this.length; i++) {
                //create next coordinate and place it into array
                CordHolder = (this.row, this.column+i);
                coordinateArray.push(CordHolder);
                if (this.column+i > 10) {
                    //rause error illegal placement off map
                }
            }
            this.coordinates = coordinateArray;
        }
        //if the ship direction is vertical
        else if (this.direction = "V"){
            //run loop until it surpases ship length
            for (let i=1; i <= this.length; i++) {
                //create next coordinate and place it into array
                CordHolder = (this.row+i, this.column);
                coordinateArray.push(CordHolder);
                if (this.row+i > 10) {
                    //rause error illegal placement off map
                }
            }
            this.coordinates = coordinateArray;
        }
        else {
            //raise error for illegal direction placement
        }
    }

    //function that checks if ship is sucken
    isSunk = function() {
        if(this.hits = this.length) {
            //this ship is sunk
        }
    }
}

//just a ship with default values
class AircraftCarrier extends Ship {
    constructor(){
        this.length = 5
        this.name = "Aircraft Carrier"
        this.hits = 0
        this.coordinates = []
    }
}
//just a ship with default values
class Battleship extends Ship {
    constructor(){
        this.length = 4
        this.name = "Battleship"
        this.hits = 0
        this.coordinates = []
    }
}
//just a ship with default values
class Submarine extends Ship {
    constructor(){
        this.length = 3
        this.name = "Submarine"
        this.hits = 0
        this.coordinates = []
    }
}
//just a ship with default values
class Destroyer extends Ship {
    constructor(){
        this.length = 2
        this.name = "Destroyer"
        this.hits = 0
        this.coordinates = []
    }
}

//list of default ships a player should have on their board
ListofShips = [AircraftCarrier, Battleship, Submarine, Submarine, Destroyer]

//class for player
class Player {
    constructor(name) {
        this.name = name;
        this.board = this.createEmptyBoard()
        this.opponent = null;
        this.ships = []
    }

    createEmptyBoard = function() {
        emptyboard = []
        rows = []
        for (let i=0; i < 10; i++) {
            rows.push(false)
        }
        for (let i=0;i<10;i++) {
            emptyboard.push(rows)
        }
    }
}

class Game {

}