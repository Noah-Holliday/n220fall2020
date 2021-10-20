//make a global for the gamezone
gameZone = document.getElementById("gameZone");

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
    placeTheShip = function(row, column, direction) {
        //base cord array
        let result_title = document.getElementById("most_recent_shot_result")
        var coordinateArray = []
        //make enital array all other coords are based off of
        var basecord = {row: row, column: column}
        coordinateArray.push(basecord)
        //setting i = 1 here so I can reference it outside the for loops, it is for error purposes. There is a better way to do this, too lazy to figure out right now
        let error = 1
        //if the ship direction is horizontal
        if (direction == "H"){
            //run loop until it surpases ship length
            for (let i=1; i < this.length; i++) {
                //create next coordinate and place it into array
                var CordHolder = {row: row, column: (column+i)};
                coordinateArray.push(CordHolder);
                //if coordinate is off the x axis report it and set error to 100 as to not apply ship
                if ((column+i) > 10) {
                    result_title.innerHTML = "Your ship placement is going over the x axis!"
                    error = 100
                }
            }
            //if no error was encountered set coordinates to the made array
            if (error != 100) {
                this.coordinates = coordinateArray;
            }
        }
        //if the ship direction is vertical
        else if (direction == "V"){
            //run loop until it surpases ship length
            for (let i=1; i < this.length; i++) {
                //create next coordinate and place it into array
                var CordHolder = {row: (row+i), column: column};
                coordinateArray.push(CordHolder);
                //if coordinate is off the y axis report it and set error to 100 as to not apply ship
                if ((row+i) > 10) {
                    result_title.innerHTML = "Your ship placement is going over the y axis!"
                    i = 100
                }
            }
            //if no error was encountered set coordinates to the made array
            if (error != 100) {
                this.coordinates = coordinateArray;
            }
        }
        //if direction was not correct report it 
        else {
            result_title.innerHTML = "Your ship placement was an illegal direction!"
        }
    }

    //function that checks if ship is sucken
    isSunk = function() {
        //if the amount of hits is the length of the boat its sunken
        if(this.hits == this.length) {
            return true
        }
        else {
            return false
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
        super()
        this.length = 4
        this.name = "Battleship"
        this.hits = 0
        this.coordinates = []
    }
}
//just a ship with default values
class Submarine extends Ship {
    constructor(){
        super()
        this.length = 3
        this.name = "Submarine"
        this.hits = 0
        this.coordinates = []
    }
}

//just a ship with default values
class Cruiser extends Ship {
    constructor(){
        super()
        this.length = 3
        this.name = "Cruiser"
        this.hits = 0
        this.coordinates = []
    }
}

//just a ship with default values
class Destroyer extends Ship {
    constructor(){
        super()
        this.length = 2
        this.name = "Destroyer"
        this.hits = 0
        this.coordinates = []
    }
}

//class for player
class Player {
    constructor(name) {
        this.name = name
        this.board = []
        this.ships = []
        //list of default ships a player should have on their board
        this.ListofShips = [new AircraftCarrier, new Battleship, new Submarine, new Cruiser, new Destroyer]
        //prop for knowing if the player has made his board placements yet
        this.shipPlacementCounter = 0
    }

    //create board
    createEmptyBoard() {
        //empty starter board
        var emptyboard = []
    
        //push rows to emptyboard
        for (let i=0;i<10;i++) {
            var rows = []
            //push 10 falses to row array
            for (let i=0; i < 10; i++) {
                rows.push(false)
            }
            emptyboard.push(rows)
        }
        this.board = emptyboard
    }


    //function that places ship onto players board
    placeShip(ship, col, row, direction) {
        //create copy of the board
        let currentboard = this.board
        //set the coordinates of ship using method created in ship class
        ship.placeTheShip(col, row, direction)
        //set an error variable to know if the placement of the coords overlap a different placed ship
        let Error = 0
        //get the identifier for the helper p tag in html to let players know wassup
        let result_title = document.getElementById("most_recent_shot_result")

        //for each coordinate in the coord array for the ship class
        ship.coordinates.forEach(function(coord){
            //of the coord is not false (ie nothing has been placed there) Do nothing, else add to error because we can't overlap ships
            if (currentboard[coord.row][coord.column]) {
                Error++
                console.log(Error)
            }
        })

        //if the coordinates for the ship doesn't exist for any reason error out
        if(ship.coordinates.length == 0){
            result_title.innerHTML = "Your ship placement was an illegal direction!"
        } 
        //else if error was never incremented apply the ship to the board
        else if(Error == 0) {
            ship.coordinates.forEach(function(coord){
                currentboard[coord.row][coord.column] = ship
            }) 
            //push the ship to the active ship array
            this.ships.push(ship)
            //draw the new board
            this.drawBoard()
            //take the placed ship out of the remaining ships to place array 
            this.ListofShips.shift()
        }
    }

    //function for the player to handle receiveing shots to their board
    takeShot(col, row) {
        //identify where the shot is on their board
        let shotLocation = this.board[row][col]
        //make a clone of the board
        let currentboard = this.board
        //get the identifier for the helper p tag in html to let players know wassup
        let result_title = document.getElementById("most_recent_shot_result")
        //if shot loaction has nothing in it, report missed and replace with _
        if (shotLocation == false) {
            this.board[row][col] = '_'
            result_title.innerHTML = "You missed!"
        }
        //else if the shot is a ship
        else if(typeof shotLocation === 'object') {
            //add a hit to the identified ship, report it as hit and replace with *
            shotLocation.hits += 1
            result_title.innerHTML = "You hit the ship!"
            this.board[row][col] = '*'
            //if the ship is also Sunk then report it and replace it with # instead
            if(shotLocation.isSunk()) {
                shotLocation.coordinates.forEach(function(coord){
                    currentboard[coord.row][coord.column] = '#'
                }) 
                result_title.innerHTML = "You sunk a ship!"
            }
            //if player is dead because of shot get rid of play area and report it
            if(this.isDead()) {
                result_title.innerHTML = this.name + " has lost the game! Refresh to restart!"
                gsap.to(document.getElementById("pass_turn_button"), 1, {opacity:0})
                gsap.to(document.getElementById("current_players_board"), 1, {opacity:0})
                gsap.to(document.getElementsByTagName("svg"), 1, {opacity:0})
            }
        }
    }

    //function that maps the board to the play area
    drawBoard() {
        //starting variables for placements
        let startx = 41
        let starty = 0
        let row = 0
        //div to let us know what players board we are on
        let board_title = document.getElementById("current_players_board")
        board_title.innerHTML = this.name+"'s board"

        //remove all previous children appended to the play zone
        while (gameZone.lastChild) {
            gameZone.removeChild(gameZone.lastChild);
        }
        //create all of the new blocks that were removed with updated info
        for(let i = 0; i < 10; i++){
            let column = 0
            for(let i = 0; i < 10; i++){
                //identify the current coordinate and create a square that is color coded to represent what it is
                let coord = this.board[row][column]
                let coordSquare = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                coordSquare.setAttribute("height", 40);
                coordSquare.setAttribute("width", 40);
                coordSquare.setAttribute("stroke", '#000000')
                coordSquare.setAttribute("strokeWidth", '5')
                coordSquare.setAttribute("x", startx*i)
                coordSquare.setAttribute("y", starty)
                coordSquare.setAttribute("row", row)
                coordSquare.setAttribute("column", column)
                //if we are still in ship placing mode
                if(this.shipPlacementCounter == 0){
                    //if the coordinate is empty
                    if(coord == false) {
                        //make block black
                        coordSquare.setAttribute("fill", "#000000")
                    }
                    //else (its a ship)
                    else {
                        //make it red
                        coordSquare.setAttribute("fill", "red")
                    }
                }
                //else if we are in attack mode
                else {
                    //if the coordinate is empty or a ship (the player whos shoting at the board isn't supposed to know the differenece unless they hit it)
                    if(coord == false || coord == Object) {
                        //make it black
                        coordSquare.setAttribute("fill", "#000000")
                    }
                    //if its a miss they have already placed
                    else if (coord == '_'){
                        //make it purple
                        coordSquare.setAttribute("fill", "purple")
                    }
                    //if its a hit ship
                    else if (coord == '*') {
                        //make it red
                        coordSquare.setAttribute("fill", "red")
                    }
                    //if its a sunken ship
                    else if (coord == "#") {
                        //make it green
                        coordSquare.setAttribute("fill", "#00FF00")
                    }
                }
                //apply various handler events to the individual cudes
                //if we mouse over highlight with border
                coordSquare.addEventListener("mouseover", (event) => {
                    event.target.style.stroke = '#0000FF';
                })
                //if we mouse out remove that border
                coordSquare.addEventListener("mouseout", (event) => {
                    event.target.style.stroke = '#000000';
                })
                //if we click the block run the take shot function and redraw the board
                coordSquare.addEventListener("click", (event) => {
                    this.takeShot(event.target.getAttribute("column"), event.target.getAttribute("row"))
                    this.drawBoard();
                })

                //append all the new squares to the play area
                gameZone.appendChild(coordSquare);
                column += 1
            }
            row += 1
            starty += 41
        }
    }

    //if player is dead (ie all his ships are sunken)
    isDead() {
        //start of with default sunken ships at 0
        let numberOfBrokenShips = 0;
        //for each ship in the active ships arrray
        this.ships.forEach(function(ship){
            //check to see if that ship is sunk
            if(ship.isSunk()) {
                //if so incerement value
                numberOfBrokenShips += 1;
            }
        })
        //if 5 ships are sunken then you are dead
        if (numberOfBrokenShips == 5) {
            return true;
        }
        else {
            return false;
        }
    }
} 

//class that handles who is the current player and forces players to create their character
class Game {
    constructor () {
        this.currentPlayer = ""
        this.player1 = ""
        this.player2 = ''
    }

    //function to prompt players to enter their name, assign current player and draw that players board
    makePlayers () {
        let player1name = prompt("What is player 1's name?")
        let player1 = new Player(player1name)
        player1.createEmptyBoard();
        player1.drawBoard();
        let player2name = prompt("What is player 2's name?")
        let player2 = new Player(player2name)
        player2.createEmptyBoard();
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = player1
    }

    //function that swaps who the current player is
    swapPlayers() {
        if(this.currentPlayer == this.player1) {
            this.currentPlayer = this.player2
        } 
        else {
            this.currentPlayer = this.player1
        }
    }
}

//create the game and make the players
let game = new Game();
game.makePlayers();

//event listener for the ship placement button
document.getElementById("placeShipButton").addEventListener('click', function() {
    //grab the 3 inputs and run the method for the current player class
    var coordx = document.getElementById("xcoord")
    var coordy = document.getElementById("ycoord")
    var direction = document.getElementById("direction")
    game.currentPlayer.placeShip(game.currentPlayer.ListofShips[0], Number(coordx.value), Number(coordy.value), direction.value)
})

//event listener for the button that passes the turn
document.getElementById("pass_turn_button").addEventListener('click', function() { 
    //switch current player and draw that players board
    game.swapPlayers();
    game.currentPlayer.drawBoard();
})

//event listener for the button that swaps the players during the build stage
document.getElementById("swapPlayersForBoardPlacement").addEventListener('click', function() { 
    let result_title = document.getElementById("most_recent_shot_result")
    //if player hasn't places all necessary ships dont switch
    //if the have
    if(game.currentPlayer.ListofShips.length == 0) {
        //make then as out of the build phase
        game.currentPlayer.shipPlacementCounter = 1
        //swap current player and draw their board
        game.swapPlayers();
        game.currentPlayer.drawBoard();
    }
    //otherwise tell them to place their ships
    else {
        result_title.innerHTML = "Your haven't placed all of your ships yet!"
    }
    //if new currentplayer is already out of the build phase (both are done) wip the placement inputs
    if(game.currentPlayer.shipPlacementCounter == 1) {
        getRidOfPlacementInputs()
    }
})

//function for the getting rid of the placement inputs once out of the build phase
function getRidOfPlacementInputs() {
    gsap.to(document.getElementById("ship_placement_container"), 1, {opacity:0})
    gsap.to(document.getElementById("pass_turn_button"), 1, {opacity:1})
};