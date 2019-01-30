function Game() {
    var that = this;
    this.ele = document.createElement("div");
    this.ele.innerHTML = "No winner yet";
    window.addEventListener('load', function() {
        that.createPlayers();
    })
    document.body.appendChild(this.ele);
    player.ele.addEventListener("click", function() {
        that.checkWin();
    })
}

Game.prototype.createPlayers=function() {
    for (var i=0; i<dataset.length; i++) {
        data.push(new Player(dataset[i].player, dataset[i].score));
    }
}

Game.prototype.checkWin=function() {
    if(this.score==10) {
        alert(this.player + ' wins')
    }
}


var game = new Game();

var dataset = [
    {
        player:"1",
    },
    {
        player:"2",
    }
]

var data= [];

function Player(player) {
    var that = this;
    this.player = player;
    this.score = 0;
    this.ele = document.createElement("div");
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

