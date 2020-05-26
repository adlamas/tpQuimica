$.getScript("/js/calculos/boyle.js", function() {});
//$.getScript("/js/calculos/dalton.js", function() {});
//$.getScript("/js/calculos/ideales.js", function() {});

$("#calculadoraLeyDeBoyle").click(function(){
  $("#cuerpo_calculadora").html(""+
  "Presion Inicial(ATM) <input type='number' placeholder='500' id='presionInicialBoyle'><br>"+
  "Presion Final(ATM) <input type='number' placeholder='300' id='presionFinalBoyle'><br>"+
  "Volumen Inicial(L) <input type='number' placeholder='300' id='volumenInicialBoyle'><br>"+
  "Volumen Final(L) <input type='number' placeholder='300' id='volumenFinalBoyle'><br><br>"+

  "<button class='btn btn-primary' id='calcularPresionInicialBoyle'>Presion inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularPresionFinalBoyle'>Presion final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialBoyle'>Volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalBoyle'>Volumen final</button><br><br>"+
  "");

  $(document).ready(function(){
    calcularBoyle();
  });
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
