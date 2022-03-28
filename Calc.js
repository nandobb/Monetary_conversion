var taxa_de_conversão;
var dolares;
var reais;
document.getElementById("button_2").disabled = true;
document.getElementById("button_3").disabled = true;
document.getElementById("button_0").disabled = true;


function confirma(){

    taxa_de_conversão = document.getElementById('Conversão.taxa_de_conversão').value;

    document.getElementById("button_2").disabled = false;
    document.getElementById("button_3").disabled = false;
    document.getElementById("button_0").disabled = false;

    document.getElementById("button_1").disabled = true;

}

function limpartaxa_de_conversão(){

    document.getElementById('Conversão.taxa_de_conversão').value='';
    document.getElementById('Conversão.reaisdolares').value='';
    document.getElementById('Conversão.dolaresreais').value='';
    
    document.getElementById("button_0").disabled = true;
    document.getElementById("button_1").disabled = false;
    document.getElementById("button_2").disabled = true;
    document.getElementById("button_3").disabled = true;

}
function conversãoDR(){

    dolares = document.getElementById('Conversão.dolaresreais').value;
 
   
    reais = dolares * taxa_de_conversão;

    
    alert(reais);

}

    
function conversãoRD(){

    reais  = document.getElementById('Conversão.reaisdolares').value;

  
    dolares = reais / taxa_de_conversão;

   
    alert(dolares);

}