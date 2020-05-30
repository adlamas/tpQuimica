$.getScript("/js/calculos/boyle.js", function() {});
$.getScript("/js/calculos/charles.js", function() {});
//$.getScript("/js/calculos/dalton.js", function() {});
//$.getScript("/js/calculos/ideales.js", function() {});

$("#calculadoraLeyDeBoyle").click(function(){
  $("#cuerpo_calculadora").html(""+
  "Presion Inicial(ATM) <input type='number' placeholder='500' id='presionInicialBoyle' step='any'><br>"+
  "Presion Final(ATM) <input type='number' placeholder='300' id='presionFinalBoyle' step='any'><br>"+
  "Volumen Inicial(L) <input type='number' placeholder='300' id='volumenInicialBoyle' step='any'><br>"+
  "Volumen Final(L) <input type='number' placeholder='300' id='volumenFinalBoyle' step='any'><br><br>"+

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
  "Temperatura Inicial(K) <input type='number' placeholder='500' id='temperaturaInicialCharles' step='any'><br>"+
  "Temperatura Final(K) <input type='number' placeholder='300' id='temperaturaFinalCharles' step='any'><br>"+
  "Volumen Inicial(L) <input type='number' placeholder='300' id='volumenInicialCharles' step='any'><br>"+
  "Volumen Final(L) <input type='number' placeholder='300' id='volumenFinalCharles' step='any'><br><br>"+

  "<button class='btn btn-primary' id='calcularTemperaturaInicialCharles'>Temperatura inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularTemperaturaFinalCharles'>Temperatura final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialCharles'>Volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalCharles'>Volumen final</button><br><br>"+
  "");

  $(document).ready(function(){
    calcularCharles();
  });
});
