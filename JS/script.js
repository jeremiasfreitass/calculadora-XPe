
//var divSoma = document.querySelector('#soma');
  //  divSoma.textContent = numA + numB; 

var botaoCalcular = document.querySelector('#calcular');
botaoCalcular.addEventListener("click", (event) => {

    event.preventDefault();

    var numADiv = document.querySelector('#numA');
    var numA = parseFloat(numADiv.value);
    var numBdiv = document.querySelector('#numB');
    var numB = parseFloat(numBdiv.value);

    soma(numA, numB);
    subtracaoAB(numA, numB);
    subtracaoBA(numA, numB);
    multiplicacao(numA, numB);
    divisaoAB(numA, numB);
    divisaoBA(numA, numB);
    potenciaAB(numA, numB);
    potenciaBA(numA, numB);
    raizQuadradaA(numA);
    raizQuadradaB(numB);
    fatorialA(numA);
    fatorialB(numB);
    porcentagemAB(numA, numB);
    porcentagemBA(numA, numB);
    mediaAB(numA, numB);
});



function soma(numA, numB){
    var divSoma = document.querySelector('#soma');
    divSoma.textContent = numA + numB; 
}
function subtracaoAB(numA, numB){
    var divSubtracaoAB = document.querySelector('#subtracaoAB');
    divSubtracaoAB.textContent = numA - numB;
}
function subtracaoBA(numA, numB){
    var divSubtracaoBA = document.querySelector('#subtracaoBA');
    divSubtracaoBA.textContent = numB - numA;
}
function multiplicacao(numA, numB){
    var divMultiplicacao = document.querySelector('#multiplicacao');
    divMultiplicacao.textContent = numA * numB;
}
function divisaoAB(numA, numB){
    var divDivisaoAB = document.querySelector('#divisaoAB');
    divDivisaoAB.textContent = numA / numB;
}
function divisaoBA(numA, numB){
    var divDivisaoBA = document.querySelector('#divisaoBA');
    divDivisaoBA.textContent = numB / numA;
}
function potenciaAB(numA, numB){
    var divPotenciaAB = document.querySelector('#potenciaAB');
    divPotenciaAB.textContent = numA ** numB;
}
function potenciaBA(numA, numB){
    var divPotenciaBA = document.querySelector('#potenciaBA');
    divPotenciaBA.textContent = numB ** numA;
}
function raizQuadradaA(numA){
    var divRaizQuadradaA = document.querySelector('#raizQuadradaA');
    divRaizQuadradaA.textContent = Math.sqrt(numA);
}
function raizQuadradaB(numB){
    var divRaizQuadradaB = document.querySelector('#raizQuadradaB');
    divRaizQuadradaB.textContent = Math.sqrt(numB);
}
function fatorialA(numA) {
    let result = 1;
    for (var i = 1; i <= numA; i++) {
      result *= i;
    }

    var divFatorialA = document.querySelector('#fatorialA');
    divFatorialA.textContent = result;
}
function fatorialB(numB) {
    let result = 1;
    for (var i = 1; i <= numB; i++) {
      result *= i;
    }

    var divFatorialB = document.querySelector('#fatorialB');
    divFatorialB.textContent = result;
}
function porcentagemAB(numA, numB) {
    var divPorcentagemAB = document.querySelector('#porcentagemAB');
    divPorcentagemAB.textContent = (numB*100) / numA;
}
function porcentagemBA(numA, numB) {
    var divPorcentagemBA = document.querySelector('#porcentagemBA');
    divPorcentagemBA.textContent = (numA*100) / numB;
}
function mediaAB(numA, numB) {
    var divMedia = document.querySelector('#media');
    divMedia.textContent = (numA + numB) / 2;
}
