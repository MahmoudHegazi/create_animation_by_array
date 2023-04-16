function createRandomMovment(ArrOfDirNums=[]){
    for (let i=0; i<ArrOfDirNums.length; i++){
    if (direction == 0){
   direction = 1;
   console.log("move right");
    document.querySelector("#masthead-container").style.left = `${document.querySelector("#masthead-container").getBoundingClientRect().width*1}px`;
} else if (direction == 1) {
   direction = 2;
   console.log("move bottom");
    document.querySelector("#masthead-container").style.top = `${document.querySelector("#masthead-container").getBoundingClientRect().height*1}px`;
} else if (direction == 2) {
    direction = 3;
   console.log("move left");
    document.querySelector("#masthead-container").style.left = `${document.querySelector("#masthead-container").getBoundingClientRect().width*0}px`;
} else {
    direction = 0;
   console.log("move top");
    document.querySelector("#masthead-container").style.top = `${document.querySelector("#masthead-container").getBoundingClientRect().height*0}px`;
  }
    }

}

// need settimeout to work
createRandomMovment(ArrOfDirNums=[]);
