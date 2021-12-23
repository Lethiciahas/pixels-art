//
let firstColor=document.getElementById('black');
let secondColor=document.getElementById('violet');
let thirdColor=document.getElementById('blue');
let fourthColor=document.getElementById('yellow');

//requisito 7 seleção e remoção das classes
function selectClass(event) {
    let selecao=document.querySelector('.selected');
    selecao.classList.remove('selected');
    event.target.classList.add('selected');
}
firstColor.addEventListener("click", selectClass);
secondColor.addEventListener("click", selectClass);
thirdColor.addEventListener("click", selectClass);
fourthColor.addEventListener("click", selectClass);

//requisito 8 tornar clicavel
//referencias https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
const clickPixel = document.querySelectorAll('.pixel');

for(let i=0;i<clickPixel.length;i+=1){
    clickPixel[i].addEventListener("click",clickColor);
}
function clickColor(event) {
    const selectedColor=document.querySelector('.selected')
    const colors=event.target;
    colors.style.backgroundColor=window.getComputedStyle(selectedColor).backgroundColor;
}