document.querySelector("#masthead-container").style.position = 'fixed';
document.querySelector("#masthead-container").style.width = '50%';
document.querySelector("#masthead-container").style.height = '50%';
function createPlannedMovment(ArrOfDirNums=[]){
    let index = 0;
    
    for (let i=0; i<ArrOfDirNums.length; i++){
        const currentDirection = ArrOfDirNums[i];
        index += 500;

        
setTimeout(()=>{
    var dir = currentDirection;
    console.log(currentDirection);
        
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
createPlannedMovment([0,1,2,3,0,2,0,2,0,1,3,1,3]);
