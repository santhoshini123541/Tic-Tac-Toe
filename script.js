let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8], //2d array ,storing array of arrays
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];
//foreach loop only works on arrays and can pass call back function,brek and continue cant be used,manam arrow function compulsory use cheyyali ani ledu
 let x=0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";
              box.style.color="blue";
            turnO=false;
         
        }
        else{
             box.innerText="X";
             turnO=true;
        }
           box.disabled=true;
           x++;
          checkwinner();
    });

}); 
const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
          box.style.color="#e01a4f";
        msgContainer.classList.add("hide");
    }
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner = (winner) =>{
    
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

    }
    


const checkwinner = () => {
    for( let pattern of winpatterns) { // ikkada pattern[0],pattern[1],pattern[2] ante 0 1 2 or 0 3 6 or 0 4 8 like this
        //boxes[pattern[0]] ante boxes nodelist kada so boxes[0] lo unn value ostadi
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
       if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showwinner(pos1val);
            return;
        }
       }
       
    }
    if(x===9){
          msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    }
}
const resetgame = () => {
    turnO=true;
    x=0;
    enableboxes();
}
newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);