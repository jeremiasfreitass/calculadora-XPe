
//var divSoma = document.querySelector('#soma');
  //  divSoma.textContent = numA + numB; 

var botaoCalcular = document.querySelector('#calcular');
botaoCalcular.addEventListener("click", (event) => {

    event.preventDefault();

    var numADiv = document.querySelector('#numA');
    var numA = numADiv.value;
    var numBdiv = document.querySelector('#numB');
    var numB = numBdiv.value;

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
    var divSoma = document
    return numA + numB;
}
function subtracaoAB(numA, numB){
    return numA - numB;
}
function subtracaoBA(numA, numB){
    return numB - numA;
}
function multiplicacao(numA, numB){
    return numB * numA;
}
function divisaoAB(numA, numB){
    return numB / numA;
}
function divisaoBA(numA, numB){
    return numA / numB;
}
function potenciaAB(numA, numB){
    return numB ^ numA;
}
function potenciaBA(numA, numB){
    return numA ^ numB;
}
function raizQuadradaA(numA){
    return Math.sqrt(numA);
}
function raizQuadradaB(numB){
    return Math.sqrt(numB);
}
function fatorialA(numA) {
    let result = 1;
    for (var i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
}
function fatorialB(numB) {
      let result = 1;
      for (var i = 1; i <= number; i++) {
        result *= i;
      }
      return result;
}
function porcentagemAB(numA, numB) {
    return (numB*100) / numA;
}
function porcentagemBA(numA, numB) {
    return (numA*100) / numB;
}
function mediaAB(numA, numB) {
    return (numA + numB) / 2;
}
