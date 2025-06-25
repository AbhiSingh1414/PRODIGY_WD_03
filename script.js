let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;//playerX, playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// Reset Button
const resetGame=()=>{
    turn0=true;
    enabledBtn();
    msgContainer.classList.add("hide");
};
// Event Listener
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button was clicked");
        if (turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        
        checkWinner()
    });
});
// Disabled Button fxn
const disabledBtn=()=>{
  for(let box of boxes){
    box.disabled = true;
  }  
};
// Enabled Button fxn
const enabledBtn=()=>{
    for(let box of boxes){
      box.disabled = false;
      box.innerText="";
    }
}; 
// That symbol—called a backtick—is used in JavaScript for template literals. Unlike regular single (') or double (") quotes, backticks (`) allow you to include variables or expressions directly inside a string using ${} syntax.

// showWinner fxn
const showWinner=(winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

// checkWinner Logic
const checkWinner =()=>{
    for(let pattern of winPatterns){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner is "+pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);