$.getScript("/js/calculos/boyle.js", function() {});
$.getScript("/js/calculos/charles.js", function() {});
$.getScript("/js/calculos/ideales.js", function() {});

// Calculadora de Ley de Boyle

$("#calculadoraLeyDeBoyle").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Boyle</h2><br>" +
  "<div>Presion Inicial(ATM) <input type='number' placeholder='1' id='presionInicialBoyle' step='any'></div><br>"+
  "<div>Presion Final(ATM) <input type='number' placeholder='2' id='presionFinalBoyle' step='any'></div><br>"+
  "<div>Volumen Inicial(L) <input type='number' placeholder='2' id='volumenInicialBoyle' step='any'></div><br>"+
  "<div>Volumen Final(L) <input type='number' placeholder='1,5' id='volumenFinalBoyle' step='any'></div><br><br>"+

  "<button class='btn btn-primary' id='calcularPresionInicialBoyle'>Calcular presion inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularPresionFinalBoyle'>Calcular presion final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialBoyle'>Calcular volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalBoyle'>Calcular volumen final</button><br><br>"+
  "");

  $(document).ready(function(){
    calcularBoyle();
  });
});

// Calculadora de Ley de Charles

$("#calculadoraLeyDeCharles").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Charles</h2><br>" +
  "<div>Temperatura Inicial(K) <input type='number' placeholder='500' id='temperaturaInicialCharles' step='any'></div><br>"+
  "<div>Temperatura Final(K) <input type='number' placeholder='350' id='temperaturaFinalCharles' step='any'></div><br>"+
  "<div>Volumen Inicial(L) <input type='number' placeholder='2' id='volumenInicialCharles' step='any'></div><br>"+
  "<div>Volumen Final(L) <input type='number' placeholder='1,5' id='volumenFinalCharles' step='any'></div><br><br>"+

  "<button class='btn btn-primary' id='calcularTemperaturaInicialCharles'>Calcular temperatura inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularTemperaturaFinalCharles'>Calcular temperatura final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialCharles'>Calcular volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalCharles'>Calcular volumen final</button><br><br>"+
  "");

  $(document).ready(function(){
    calcularCharles();
  });
});

// Calculadora de Ley de Gases Ideales

$("#calculadoraLeyDeGasesIdeales").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Gases ideales</h2><br>" +
  "<div>Numero de moles <input type='number' placeholder='2' id='numeroMolesGasesIdeales' step='any'></div><br>"+
  "<div>Temperatura(K) <input type='number' placeholder='450' id='temperaturaGasesIdeales' step='any'></div><br>"+
  "<div>Presion(ATM) <input type='number' placeholder='2' id='presionGasesIdeales' step='any'></div><br>"+
  "<div>Volumen(L) <input type='number' placeholder='1,5' id='volumenGasesIdeales' step='any'></div><br><br>"+

  "<button class='btn btn-primary' id='calcularNumeroMolesGasesIdeales'>Calcular numero moles</button><br><br>"+
  "<button class='btn btn-primary' id='calcularTemperaturaGasesIdeales'>Calcular temperatura</button><br><br>"+
  "<button class='btn btn-primary' id='calcularPresionGasesIdeales'>Calcular presion </button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenGasesIdeales'>Calcular volumen </button><br><br>"+
  "");

  $(document).ready(function(){
    calcularGasesIdeales();
  });
});
