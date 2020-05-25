
import * as calculosDalton from '/calculos/dalton';


$("#calculadoraLeyDeBoyle").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<input type='number' placeholder='500' id='BoyleNumero1'>"+
  "<input type='number' placeholder='300' id='BoyleNumero2'>"+
  "<button class='btn btn-primary' id='calcularLeyDeBoyle'>Calcular Boyle</button>"+
  "");

  calculosDalton.alertar();
});

$("#calculadoraLeyDeCharles").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<input type='number' placeholder='500' id='CharlesNumero1'>"+
  "<input type='number' placeholder='300' id='CharlesNumero2'>"+
  "<button class='btn btn-primary' id='calcularLeyDeCharles'>Calcular Charles</button>"+
  "");

  $(document).ready(function(){
    calcularLeyDeCharles();
  });
});

$("#calcularLeyDeBoyle").click(function(){
  var numero1 = parseInt($("#BoyleNumero1").val());
  var numero2 = parseInt($("#BoyleNumero2").val());
  var numeroFinal = numero1 + numero2;
  $("#cuerpo_calculadora").append('<p>La suma de los dos numeros es: ' + numeroFinal + "</p>");
});

function calcularLeyDeCharles(){
  $("#calcularLeyDeDalton").click(function(){
    var numero1 = parseInt($("#DaltonNumero1").val());
    var numero2 = parseInt($("#DaltonNumero2").val());
    var numeroFinal = numero1 / numero2;
    $("#cuerpo_calculadora").append('<p>La suma de los dos numeros para Dalton es: ' + numeroFinal + "</p>");
  });
}
