function gametime(){
    var board = document.querySelector(".#board");
    var squares = document.querySelectorAll("div");
    var blank = '';
    var tracker_XO = 0;
    var sqrnum = 0;
    var boardstat = document.querySelector("#status");


    squares.forEach(element =>{
        element.setAttribute("class","square");
        element.textContent = blank;
        element.setAttribute("id", sqrnum++);
    });

    squares.forEach(element => {
        tracker_XO+=1;
        boardstat.textContent = "Move your mouse over a Square and click to play X or O";
        if(tracker_XO %2 == 0){
            this.textContent = "O";
            this.classList.add("square", "O");

        }else{
            this.textContent = "X";
            this.classList.add("square", "X");
        }

    })

}
window.onload= gametime;