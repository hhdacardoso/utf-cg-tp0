let botao = document.querySelector('#effect-button');
const texts = document.querySelectorAll('p1, p2, p3, p4, h1');

function changeBackground(){
    const colorList = ["rgb(0, 0, 255)", 
        "rgb(0, 0, 0)", 
        "rgb(255, 255, 255)", 
        "rgb(0, 255, 0)", 
        "rgb(255, 0, 0)"];
    
    colorChoice = colorList[Math.floor(Math.random() * colorList.length)];
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    console.log(backgroundColor);
    while (colorChoice === backgroundColor){
        console.log("Cor repetida, sorteando novamente.");
        colorChoice = colorList[Math.floor(Math.random() * colorList.length)];
    } 
    document.body.style.backgroundColor = colorChoice;

    if (colorChoice === "rgb(0, 0, 0)" || colorChoice === "rgb(255, 0, 0)"){
        texts.forEach(element => {
            element.style.color = "white";
        })
    } else {
        texts.forEach(element => {
            element.style.color = "black";
        })
    }
}

botao.addEventListener("click", changeBackground);