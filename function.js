function createRandomMovment(ArrOfDirNums=[]){
    let index = 0;
    
    for (let i=0; i<ArrOfDirNums.length; i++){
        currentDirection = ArrOfDirNums[i];
        index += 500;
        
setTimeout(()=>{
        var dir = currentDirection;
        if (dir == 0){
   console.log("move right");        
    document.querySelector("#masthead-container").style.left = `${document.querySelector("#masthead-container").getBoundingClientRect().width*1}px`;
} else if (dir == 1) {
   console.log("move bottom");
    document.querySelector("#masthead-container").style.top = `${document.querySelector("#masthead-container").getBoundingClientRect().height*1}px`;
} else if (dir == 2) {
   console.log("move left");
    document.querySelector("#masthead-container").style.left = `${document.querySelector("#masthead-container").getBoundingClientRect().width*0}px`;
} else {
   console.log("move top");
    document.querySelector("#masthead-container").style.top = `${document.querySelector("#masthead-container").getBoundingClientRect().height*0}px`;
  
    }
}, index);
   }
}
