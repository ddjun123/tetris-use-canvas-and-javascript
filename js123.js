//initialize canvas
const canvas=document.createElement("canvas");
const ctx=canvas.getContext("2d");
canvas.width=300;
canvas.height=600;
document.body.appendChild(canvas);
//build an initial array
let dataArray;
const arrayWidth=10;
const arrayHeight=20;
const initializeArray=function(){
    dataArray=[];
    for (let i=0;i<arrayHeight;i++){
        dataArray.push([]);
        for (let n=0;n<arrayWidth;n++){
            dataArray[i].push(0);
        }
    }
}
//build a tetromino object
const tetromino={};
//build a initialized random tetromino position
let randomNumber;
const initializedTetrominoPosition=function(){
    randomNumber=Math.floor(Math.random()*7);
    switch(randomNumber){
        case 0:
            tetromino.arraynumber=[[0,3],[0,4],[0,5],[0,6]];
            tetromino.odd=0;
            tetromino.transfer=transferCase0;
            break;
        case 1:
            tetromino.arraynumber=[[0,4],[0,5],[1,4],[1,5]];
            tetromino.odd=0;
            tetromino.transfer=transferCase1;
            break;
        case 2:
            tetromino.arraynumber=[[0,4],[1,3],[1,4],[1,5]];
            tetromino.odd=0;
            tetromino.transfer=transferCase2;
            break;
        case 3:
            tetromino.arraynumber=[[0,3],[0,4],[0,5],[1,5]];
            tetromino.odd=0;
            tetromino.transfer=transferCase3;
            break;
        case 4:
            tetromino.arraynumber=[[0,3],[0,4],[0,5],[1,3]];
            tetromino.odd=0;
            tetromino.transfer=transferCase4;                    
            break;
        case 5:
            tetromino.arraynumber=[[0,4],[0,5],[1,3],[1,4]];    
            tetromino.odd=0;
            tetromino.transfer=transferCase5;                
            break;      
        case 6:
            tetromino.arraynumber=[[0,3],[0,4],[1,4],[1,5]];   
            tetromino.odd=0;
            tetromino.transfer=transferCase6;                 
            break;}
    /*setInterval(moveDown, 1000);
    render();*/
}
//tetromino deformed
const transferCase0=function(){
    if (tetromino.odd%2===0){
    tetromino.arraynumber[0][0]+=1;
    tetromino.arraynumber[0][1]+=1;
    tetromino.arraynumber[2][0]+=2;
    tetromino.arraynumber[2][1]-=1;
    tetromino.arraynumber[3][0]+=3;
    tetromino.arraynumber[3][1]-=2;
    }else{
        tetromino.arraynumber[0][0]-=1;
        tetromino.arraynumber[0][1]-=1;
        tetromino.arraynumber[2][0]-=2;
        tetromino.arraynumber[2][1]+=1;
        tetromino.arraynumber[3][0]-=3;
        tetromino.arraynumber[3][1]+=2;
    }
    tetromino.odd++;
}
const transferCase1=function(){};
const transferCase2=function(){
    switch(tetromino.odd%4){
        case 0:
            tetromino.arraynumber[1][0]+=1;
            tetromino.arraynumber[1][1]+=1;
        break;
        case 1:
            tetromino.arraynumber[0][0]+=1;
            tetromino.arraynumber[0][1]-=1;
        break;
        case 2:
            tetromino.arraynumber[3][0]-=1;
            tetromino.arraynumber[3][1]-=1;
        break;
        case 3:
            tetromino.arraynumber[1][0]-=1;
            tetromino.arraynumber[1][1]-=1;
            tetromino.arraynumber[0][0]-=1;
            tetromino.arraynumber[0][1]+=1;
            tetromino.arraynumber[3][0]+=1;
            tetromino.arraynumber[3][1]+=1;
        break;
    }
    tetromino.odd++;
};
const transferCase3=function(){
    switch(tetromino.odd%4){
        case 0:
            tetromino.arraynumber[0][0]+=1;
            tetromino.arraynumber[0][1]+=1;
            tetromino.arraynumber[3][0]+=1;
            tetromino.arraynumber[3][1]-=1;
        break;
        case 1:
            tetromino.arraynumber[1][1]-=1;
            tetromino.arraynumber[2][0]+=1;
            tetromino.arraynumber[2][1]-=2;
            tetromino.arraynumber[3][0]-=1;
            tetromino.arraynumber[3][1]+=1;
        break;
        case 2:
            tetromino.arraynumber[0][0]+=1;
            tetromino.arraynumber[0][1]+=1;
            tetromino.arraynumber[1][1]+=2;
            tetromino.arraynumber[2][0]+=1;
            tetromino.arraynumber[2][1]+=1;
        break;
        case 3:
            tetromino.arraynumber[2][0]-=2;
            tetromino.arraynumber[2][1]+=1;
            tetromino.arraynumber[1][1]-=1;
            tetromino.arraynumber[0][0]-=2;
            tetromino.arraynumber[0][1]-=2;
        break;
    }
    tetromino.odd++;
};
const transferCase4=function(){
    switch(tetromino.odd%4){
        case 0:
            tetromino.arraynumber[1][0]+=2;
            tetromino.arraynumber[1][1]-=1;
            tetromino.arraynumber[2][0]+=2;
            tetromino.arraynumber[2][1]-=1;
        break;
        case 1:
            tetromino.arraynumber[0][1]+=2;
            tetromino.arraynumber[1][0]-=1;
            tetromino.arraynumber[1][1]+=1;
            tetromino.arraynumber[2][0]-=1;
            tetromino.arraynumber[2][1]+=1;
        break;
        case 2:
            tetromino.arraynumber[2][0]-=1;
            tetromino.arraynumber[2][1]-=1;
            tetromino.arraynumber[0][1]-=2;
            tetromino.arraynumber[3][0]+=1;
            tetromino.arraynumber[3][1]+=1;
        break;
        case 3:
            tetromino.arraynumber[1][0]-=1;
            tetromino.arraynumber[2][1]+=1;
            tetromino.arraynumber[3][0]-=1;
            tetromino.arraynumber[3][1]-=1;
        break;
    }
    tetromino.odd++;
};
const transferCase5=function(){
    if (tetromino.odd%2===0){
    tetromino.arraynumber[2][1]+=2;
    tetromino.arraynumber[1][0]+=2;
    }else{
        tetromino.arraynumber[2][1]-=2;
        tetromino.arraynumber[1][0]-=2;
    }
    tetromino.odd++;
}
const transferCase6=function(){
    if (tetromino.odd%2===0){
    tetromino.arraynumber[0][0]+=2;
    tetromino.arraynumber[3][1]-=2;
    }else{
        tetromino.arraynumber[0][0]-=2;
        tetromino.arraynumber[3][1]+=2;
    }
    tetromino.odd++;
}
//tetromino movement
const moveRight=function(){
    for(var i=0;i<4;i++){
        tetromino.arraynumber[i][1]+=1;
    }
}
const moveLeft=function(){
    for(var i=0;i<4;i++){
        tetromino.arraynumber[i][1]-=1;
    }
}
const moveDown=function(){
    for(var i=0;i<4;i++){
        tetromino.arraynumber[i][0]+=1;
    }
}
// decide whether to save data
const decideSave=function(){
    for(let i=0;i<4;i++){
        if (tetromino.arraynumber[i][0]===19){
            return true
            }
        else if (dataArray[tetromino.arraynumber[i][0]+1][tetromino.arraynumber[i][1]]===1){
                if (!([tetromino.arraynumber[i][0]+1,tetromino.arraynumber[i][1]] in tetromino.arraynumber)){
                    return true;
        }
    }
}   
    return false;}
// save tetromino array data
const saveData=function(){
    for(let i=0;i<4;i++){
        dataArray[tetromino.arraynumber[i][0]][tetromino.arraynumber[i][1]]=1;}
}
// declare a line all is 1
const declareline1=function(){
    for(let i=0;i<arrayHeight;i++){
        let a=0;
        for(let n=0;n<arrayWidth;n++){
            if (dataArray[i][n]===1){
                a++;
            }
        }
        if (a===arrayWidth){
            for(let c=0;c<arrayWidth;c++){
                dataArray[i][c]=0;
            }
            //i==0 is impossible
            for(let d=0;d<i;d++){
                for(let e=0;e<arrayWidth;e++){
                    dataArray[i-d][e]=dataArray[i-d-1][e];
                    dataArray[i-d-1][e]=0;
                    
                }
            }

        }
        };
    }
//test failure
const failTest=function(){
    for(let i=0;i<4;i++){
        if (dataArray[tetromino.arraynumber[i][0]][tetromino.arraynumber[i][1]]===1){
            return true
        }
    }
    return false
}
//handle keyboard control
const controlKeyboard=function(){
    addEventListener("keydown",keyboardInput
    )
}
//remove keyboard control
const removeKeyboard=function(){
    removeEventListener("keydown",keyboardInput(e)
    )
}
//handle keyboard input
const keyboardInput=function(e){
    switch(e.code){
        case "ArrowUp":
            tetromino.transfer();
        break;
        case "ArrowRight":
            if (objectRightCollision()){
            for(let i=0;i<4;i++){
                if(tetromino.arraynumber[i][1]===(arrayWidth-1)){
                    break;
                }else if(tetromino.arraynumber[i][1]!==(arrayWidth-1)&&i===3){
                    moveRight();
                }
            }}
        break;
        case "ArrowLeft":
            if (objectLeftCollision()){
            for(let i=0;i<4;i++){
                if(tetromino.arraynumber[i][1]===0){
                    break;
                }else if(tetromino.arraynumber[i][1]!==0&&i===3){
                    moveLeft();
                }
            }}
        break;
        case "ArrowDown":
            if (decideSave()===false){
            moveDown();}else{
                saveData();
                initializedTetrominoPosition();
                if(failTest()){
                    initializeArray();
                    initializedTetrominoPosition();
                }
            }
        break;
    }
    declareline1();
    render();
}
// when object is collisioned,it cant move
const objectLeftCollision=function(){
    for(let i=0;i<4;i++){
        if (dataArray[tetromino.arraynumber[i][0]][tetromino.arraynumber[i][1]-1]===1&&!([tetromino.arraynumber[i][0],tetromino.arraynumber[i][1]-1] in tetromino.arraynumber)){
            return false
        }
    }
    return true
}
const objectRightCollision=function(){
    for(let i=0;i<4;i++){
        if (dataArray[tetromino.arraynumber[i][0]][tetromino.arraynumber[i][1]+1]===1&&!([tetromino.arraynumber[i][0],tetromino.arraynumber[i][1]+1] in tetromino.arraynumber)){
            return false
        }
    }
    return true
}
// render game
const render=function(){
    for(let i=0;i<arrayHeight;i++){
        for(let a=0;a<arrayWidth;a++){
            if(dataArray[i][a]===1){
                ctx.fillStyle="black";
                ctx.fillRect(30*a,30*i,30,30)
            }else{
                ctx.fillStyle="white";
                ctx.fillRect(30*a,30*i,30,30)
            }
        }
    }
    for(let i=0;i<4;i++){
        ctx.fillStyle="black";
        ctx.fillRect(30*tetromino.arraynumber[i][1],30*tetromino.arraynumber
            [i][0],30,30);
    }
}
//dropAndRender function
/*const dropAndRender=function(){
    

    //finalData();

    moveDown();
    render();
}*/
const autoDrop=function(){
    if (decideSave()===false){
        moveDown();}else{
            saveData();
            initializedTetrominoPosition();
            if(failTest()){
                initializeArray();
                initializedTetrominoPosition();
            }
        }
    declareline1();
    render();
}
setInterval(autoDrop, 1000);
initializeArray();
initializedTetrominoPosition();
controlKeyboard();
render();

