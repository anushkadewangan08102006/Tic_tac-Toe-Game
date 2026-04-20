let body=document.querySelector("body");
let button=document.querySelector(".button")

button.addEventListener("click",()=>{
    // console.log("clicked");
    body.classList.toggle("dark");
})
let arr=new Array(9).fill(null);

const wins=[
  [0,1,2], // top row
  [3,4,5], // middle row
  [6,7,8], // bottom row
  [0,3,6], // left col
  [1,4,7], // middle col
  [2,5,8], // right col
  [0,4,8], // diagonal
  [2,4,6]  // other diagonal
];


let chance=0;//even-X otherwise odd-o;

let boxes=document.querySelectorAll(".box1");
let player=document.querySelector(".player");

let win=false;


boxes.forEach((box1)=>{
    box1.addEventListener("click",async()=>{
        
        let id=box1.id;
        if (arr[id] !== null){
            return;
        };
        if(win) return;
        arr[id]=chance%2==0?"X":"O";
        box1.innerText=arr[id];
        player.innerText= chance%2===0?"O's Turn:-":"X's Turn:-";
        box1.style.backgroundColor= chance%2===0?"#e19bc6ff":"#a4d6f7ff";
        chance++;
        if(checkwin()){
           
        //    await  setTimeout(()=>{
        //       console.log("after 1 sec")
        //     }, 1000);
        win=true;
           let display= document.querySelector(".winner");
         display.innerText=`${arr[id]} won the match`;
         display.classList.add("ani");
         

         
   
            // alert(`${arr[id]} has won the game`)
            setTimeout(()=>{
                reset();
            },4000);
            return;
            
            
            // window.location.reload();
           
        }
        

        if(chance===9){
            alert("Game Draw")
            reset();
            return;
        }
    })
})

function checkwin(){
    
    for(let [a,b,c] of wins){
        if(arr[a]!=null && arr[a]===arr[b] && arr[b]===arr[c]){
            
            return true;
        }
    }
    return false;
}
function reset(){
    
setTimeout(()=>{
    win=false;
    arr.fill(null);
    chance=0;
    boxes.forEach((box1)=>{
        box1.innerText="";
        box1.style.backgroundColor="";
        player.innerText="X's Turn";
    })
let display=document.querySelector(".winner");
         display.innerText=``;
         
         display.classList.remove("ani");
},1000)
    // window.location.reload();
}


