function Game() {
    var that = this;
    this.button = ""
    this.ele = document.createElement("div");
    this.ele.innerHTML = "No winner yet";
    this.players=[];
    that.createPlayers();
    document.body.appendChild(this.ele);
    this.players[0].ele.addEventListener("click", function() {
        that.checkWin();
    })
    this.players[1].ele.addEventListener("click", function() {
        that.checkWin();
    })
}

Game.prototype.createPlayers=function() {
    let player1 = new Player("1");
    this.players.push(player1);
    let player2 = new Player("2");
    this.players.push(player2);
}

Game.prototype.checkWin=function() {
    var that=this;
    if(this.players[0].score>9) {
        this.ele.innerHTML = "Player 1 Wins <button>Reset</button>"
        this.ele.addEventListener("click", function() {
            that.reset();
        })
    } else if (this.players[1].score>9) {
        this.ele.innerHTML = "Player 2 Wins <button>Reset</button>"
        this.ele.addEventListener("click", function() {
            that.reset();
        })
    }
}


Game.prototype.reset=function() {
    this.ele.innerHTML = "No winner yet";
    this.players[0].score = 0;
    this.players[0].ele.innerHTML = "Player " + this.players[0].player + " Score " + this.players[0].score
    this.players[1].score = 0;
    this.players[1].ele.innerHTML = "Player " + this.players[1].player + " Score " + this.players[1].score
}

var game = new Game();

function Player(player) {
    var that = this;
    this.player = player;
    this.score = 0;
    this.ele = document.createElement("div");
    this.ele.setAttribute("id", "Div1");
    this.ele.innerHTML = "Player " + this.player + " Score " + this.score;
    this.ele.addEventListener("click", function() {
        that.addPoint();
    })
    document.body.appendChild(this.ele);
}

Player.prototype.addPoint=function() {
    this.score = this.score + 1;
    this.ele.innerHTML = "Player " + this.player + " Score " + this.score;
}


