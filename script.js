
let boxs=document.querySelectorAll('.cs1');
let clear=document.querySelector('.clear');
let disWinner=document.querySelector('.winner');
let hide=document.querySelector('.hide');
let display=false;

// button.innerText="a";

const WinningPattern=[
[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
      { display ?box.innerText='X':box.innerText='o'}
      display=!display
      box.disabled=true

      showInput(); 
    })   
    
})

function showInput(){
  for(let data of WinningPattern){
    let val1input=boxs[data[0]].innerText;
    let val2input=boxs[data[1]].innerText;
    let val3input=boxs[data[2]].innerText;
  //  console.log(val1input,val2input,val3input)
   if(val1input !="" && val2input !=""&& val3input !=""){
          if(val1input==val2input &&val2input ==val3input  ){
            console.log("winner",val1input)
            boxs.forEach((box)=>{
              box.disabled=true;
            });
            show(val1input)

          }
   }
  
  }
  
}


function Enable(){
  boxs.forEach((box)=>{
  box.disabled=false;
    box.innerHTML="";
    hide.classList.add("hide");
  })
  
}

clear.addEventListener('click',Enable);

function show(winner){
  disWinner.innerHTML=` Congratulation the Winner is ${winner}`;
  hide.classList.remove("hide");
}