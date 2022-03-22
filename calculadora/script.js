function insert(valor) {
  var p = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = p + valor;
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
}

let vetor1 = [1,2,3];
let vetor2 = [3,2,1];

function somar(){
  let soma = [0,0,0];

  for(let i in vetor1) {
    soma[i] = vetor1[i] + vetor2[i];
  }
  return soma;
}
