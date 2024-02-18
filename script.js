let boxes=document.querySelectorAll(".box");

let reset=document.querySelector(".res");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const rest=()=>{
    count=0;
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");



};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
       
        box.disabled=true;
        count++;
        let  iswin=checkWinner();
        if(count === 9 &&!iswin){
            draw();
        }
        
    });
});
const draw=()=>{
    msg.innerText="game is draw";
    msgcontainer.classList.remove("hide");
    disable();
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();

};
const checkWinner=()=>{
     for(let pattern of winpatt){
    //     console.log([pattern[0]],[pattern[1]],[pattern[2]]);
    //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText.boxes[pattern[2]].innerText);
let posval1=boxes[pattern[0]].innerText;
let posval2=boxes[pattern[1]].innerText;
let posval3=boxes[pattern[2]].innerText;

   if(posval1 !="" && posval2!= "" && posval3!=""){
    if(posval1===posval2 && posval2===posval3){
        console.log("winnerr",posval1);
        showWinner(posval1);
        return true;
    }

   }
    }

};

newbtn.addEventListener("click",rest);
reset.addEventListener("click",rest);



