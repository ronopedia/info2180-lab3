function gametime(){
    var board = document.querySelector(".#board");
    var squares = document.querySelectorAll("div");
    
    
    squares.forEach(element =>{
        element.setAttribute("class","square");
        
    })

}
window.onload= gametime;