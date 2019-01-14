
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc")

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    valorCorreto1= validaPeso(peso);
    valorCorreto2= validaAltura(altura);

    if(!valorCorreto1){

        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        
    }    

    if(!valorCorreto2){
        
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
        
    }    

    if(valorCorreto1 && valorCorreto2){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}
function validaPeso(peso){
    if (peso > 0 && peso < 1000) {
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}










