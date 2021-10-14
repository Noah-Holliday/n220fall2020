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
        var coordinateArray = []
        //make enital array all other coords are based off of
        var basecord = {row: row, column: column}
        coordinateArray.push(basecord)
        //if the ship direction is horizontal
        if (direction = "H"){
            //run loop until it surpases ship length
            for (let i=1; i < this.length; i++) {
                //create next coordinate and place it into array
                var CordHolder = {row: row, column: column+i};
                coordinateArray.push(CordHolder);
                if (column+i > 10) {
                    //rause error illegal placement off map
                }
            }
            this.coordinates = coordinateArray;
        }
        //if the ship direction is vertical
        else if (direction = "V"){
            //run loop until it surpases ship length
            for (let i=1; i < this.length; i++) {
                //create next coordinate and place it into array
                var CordHolder = {row: row+i, column: column};
                coordinateArray.push(CordHolder);
                if (row+i > 10) {
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
        super()
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
        this.name = name
        this.board = []
        this.opponent = null
        this.ships = []
    }

    //create board
    createEmptyBoard() {
        //empty starter board
        var emptyboard = []
        //empty rows
        var rows = []
        //push 10 falses to row array
        for (let i=0; i < 10; i++) {
            rows.push(false)
        }
        //push then rows to emptyboard
        for (let i=0;i<10;i++) {
            emptyboard.push(rows)
        }
        this.board = emptyboard
    }

    placeShip(ship, col, row, direction) {
        var currentboard = this.board
        console.log(ship)
        ship.placeTheShip(col, row, direction)
        ship.coordinates.forEach(function(coord){
            console.log(coord)
            console.log(currentboard[coord.column][coord.row])
            if (currentboard[coord.column][coord.row]) {
                // already ship placed there
            }
            else {
                currentboard[coord.column][coord.row] = ship
            }
        }) 
        this.board = currentboard
    }

}

player = new Player("Brundhilda")
player.createEmptyBoard();
ship1 = new AircraftCarrier();
player.placeShip(ship1, 1, 1, "H")
console.log(player)

class Game {

}