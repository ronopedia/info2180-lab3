function gametime(){
    var board = document.querySelector("#board");
    var squares = board.querySelectorAll("div");
    var blank = '';
    var tracker_XO = 0;
    var sqrnum = 0;
    var player_xo;
    var boardstat = document.querySelector("#status");
    var newGame = document.querySelector("button");


    squares.forEach(element =>{
        element.setAttribute("class","square");
        element.textContent = blank;
        element.setAttribute("id", sqrnum++);
    });

    squares.forEach(element => {
        element.addEventListener("click", function(){
			if (element.textContent !== blank){
				boardstat.textContent = "Cheating is not allowed! Please select an empty square to play.";
				return;
			}
            tracker_XO+=1;
            boardstat.textContent = "Move your mouse over a square and click to play an X or an O";
            if(tracker_XO %2 == 0){
                this.textContent = "O";
                this.classList.add("square", "O");

            }else{
                this.textContent = "X";
                this.classList.add("square", "X");
            }
            gameEnd();

        });

    });

    squares.forEach(element=>{
        element.addEventListener("mouseover",function(){
            element.classList.add("hover");
        });
        element.addEventListener("mouseleave",function(){
                element.classList.remove("hover");
        });

    });

    newGame.addEventListener("click",function(){
        squares.forEach(element=>{
            element.textContent = blank;
        });
        boardstat.classList.remove("class","you-won");
        boardstat.textContent ="Move your mouse over a square and click to play  X or O";

    });

    function gameEnd(){
        if(squares[0].textContent==squares[1].textContent && squares[1].textContent==squares[2].textContent &&squares[0].textContent==squares[2].textContent && squares[2].textContent !== "")
            results(squares[0].textContent);
        if(squares[3].textContent==squares[4].textContent && squares[4].textContent==squares[5].textContent &&squares[3].textContent==squares[5].textContent && squares[5].textContent !== "")
            results(squares[3].textContent);
        if(squares[6].textContent==squares[7].textContent && squares[7].textContent==squares[8].textContent &&squares[6].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[6].textContent);
        if(squares[0].textContent==squares[3].textContent && squares[3].textContent==squares[6].textContent &&squares[0].textContent==squares[6].textContent && squares[6].textContent !== "")
            results(squares[0].textContent);
        if(squares[1].textContent==squares[4].textContent && squares[4].textContent==squares[7].textContent &&squares[1].textContent==squares[7].textContent && squares[7].textContent !== "")
            results(squares[1].textContent);
        if(squares[2].textContent==squares[5].textContent && squares[5].textContent==squares[8].textContent &&squares[2].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[2].textContent);
        if(squares[0].textContent==squares[4].textContent && squares[4].textContent==squares[8].textContent &&squares[0].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[0].textContent);
        if(squares[6].textContent==squares[4].textContent && squares[4].textContent==squares[2].textContent &&squares[6].textContent==squares[2].textContent && squares[2].textContent !== "")
            results(squares[6].textContent);
    }
    var results = function(player_xo){
        boardstat.classList.add("class", "you-won");
        boardstat.textContent = `Congratulations! ${player_xo} is the Winner!`;
    }
}   
window.onload=gametime;