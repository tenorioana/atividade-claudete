console.log("Script Carregado");
function calcularAnos(){
    console.log("Botão de calcular clicando");

    let popAInput = document.getElementById("popA").value.trim();

    let taxaAINput = document.getElementById("taxaA").value.trim();

    let popBInput = document.getElementById("popB").value.trim();

    let taxaBINput = document.getElementById("taxaB").value.trim();

    if (popAInput === "" || taxaAINput=== "" || popBInput === "" || taxaBINput === "")
        alert("Por favor, preencah todos os campos");
    return;
    

}
let popA = parseInt(popAInput);

let taxaA = parseFloat(taxaAINput)/100;

let popB = parseInt(popBInput);

let taxaB = parseFloat(taxaBINput)/100;


let anos = 0; 

while(popA<popB){
    popA *= (1+taxaA);
    popB *= (1+taxaB);
    anos++;
}

console.log("Anos calculados", anos);

let resultado= document.getElementById("resultado");

resultado.innerHTML = 'Serão necessários ${asnos} anos para que a população do pais  A ultrapasse ou iguale a população do pais B';

function limparCampos(){

    console.log("Botão de limpar campos");
    document.getElementById("popA").value="";
    document.getElementById("TaxaA").value="";
    document.getElementById("popB").value="";
    document.getElementById("TaxaB").value="";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}


