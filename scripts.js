
let botao = document.querySelector('#effect-button');
if (!botao){
    console.log("Erro no botão")
} else {
    console.log("Botao normal")
}

function changeBackground(){
    const colorList = ["White", "Blue", "Red", "Green", (0, 153, 255, 0.849)];
    
    document.body.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
}

botao.addEventListener("click", changeBackground);