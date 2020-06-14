$.getScript("/js/calculos/boyle.js", function() {});
$.getScript("/js/calculos/charles.js", function() {});
$.getScript("/js/calculos/ideales.js", function() {});
$.getScript("/js/habilitaciones/habilitaciones.js", function() {});

// Calculadora de Ley de Boyle

$("#calculadoraLeyDeBoyle").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Boyle</h2><br>" +
  "<div class='form-check form-check-inline'>Presion Inicial(ATM)"+
    "<input type='number' placeholder='1' id='presionInicialBoyle' step='any' name='rbpib' "+
    "style='margin-right:10px;'>" +
    "<input class='form-check-input' type='radio' name='inlineRadioOptionsBoyle' id='rbpib' value='option1'>"+
    "<label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br>"+

  "<div class='form-check form-check-inline'>"+
    "<div>Presion Final(ATM)"+
    "<input type='number' placeholder='2' id='presionFinalBoyle' name='rbpfb' step='any' "+
    "style='margin-right: 10px;'></div> " +
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsBoyle' id='rbpfb' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    "<div>Volumen Inicial(L)<input type='number' placeholder='2' id='volumenInicialBoyle' name='rbvib' step='any' "+
    "style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsBoyle' id='rbvib' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    "<div>Volumen Final(L)<input type='number' placeholder='1,5' id='volumenFinalBoyle' name='rbvfb' "+
    "step='any' style='margin-right: 10px;'></div><br><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsBoyle' id='rbvfb' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<button class='btn btn-primary' id='calcularPresionInicialBoyle'>Calcular presion inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularPresionFinalBoyle'>Calcular presion final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialBoyle'>Calcular volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalBoyle'>Calcular volumen final</button><br><br>"+

  "");

  $(document).ready(function(){
    calcularBoyle();
    hablitacionBoyle();
  });
});

// Calculadora de Ley de Charles

$("#calculadoraLeyDeCharles").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Charles</h2><br>" +

  "<div class='form-check form-check-inline'>"+
    "<div>Temperatura Inicial(K) <input type='number' placeholder='500' id='temperaturaInicialCharles' "+
    "step='any' name='rbtic' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsCharles' id='rbtic' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Temperatura Final(K) <input type='number' placeholder='350' id='temperaturaFinalCharles' "+
    "step='any' name='rbtfc' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsCharles' id='rbtfc' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Volumen Inicial(L) <input type='number' placeholder='2' id='volumenInicialCharles' "+
    " step='any' name='rbvic' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsCharles' id='rbvic' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Volumen Final(L) <input type='number' placeholder='1,5' id='volumenFinalCharles' "+
    "step='any' name='rbvfc' style='margin-right: 10px;'></div><br><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptionsCharles' id='rbvfc' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<button class='btn btn-primary' id='calcularTemperaturaInicialCharles'>Calcular temperatura inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularTemperaturaFinalCharles'>Calcular temperatura final</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenInicialCharles'>Calcular volumen inicial</button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenFinalCharles'>Calcular volumen final</button><br><br>"+
  "");

  $(document).ready(function(){
    calcularCharles();
    habilitacionCharles();
  });
});

// Calculadora de Ley de Gases Ideales

$("#calculadoraLeyDeGasesIdeales").click(function(){
  $("#cuerpo_calculadora").html(""+
  "<h2>Calcular ley de Gases ideales</h2><br>" +

  "<div class='form-check form-check-inline'>"+
    " <div>Numero de moles <input type='number' placeholder='2' id='numeroMolesGasesIdeales' "+
    "step='any' name='rbnmgi' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptions' id='rbnmgi' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Temperatura(K) <input type='number' placeholder='450' id='temperaturaGasesIdeales' "+
    "step='any' name='rbtgi' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptions' id='rbtgi' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Presion(ATM) <input type='number' placeholder='2' id='presionGasesIdeales' "+
    "step='any' name='rbpgi' style='margin-right: 10px;'></div><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptions' id='rbpgi' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<div class='form-check form-check-inline'>"+
    " <div>Volumen(L) <input type='number' placeholder='1,5' id='volumenGasesIdeales' "+
    "step='any' name='rbvgi' style='margin-right: 10px;'></div><br><br>"+
    " <input class='form-check-input' type='radio' name='inlineRadioOptions' id='rbvgi' value='option1'>"+
    " <label class='form-check-label' for='inlineRadio1'></label>"+
  "</div><br><br> "+

  "<button class='btn btn-primary' id='calcularNumeroMolesGasesIdeales'>Calcular numero moles</button><br><br>"+
  "<button class='btn btn-primary' id='calcularTemperaturaGasesIdeales'>Calcular temperatura</button><br><br>"+
  "<button class='btn btn-primary' id='calcularPresionGasesIdeales'>Calcular presion </button><br><br>"+
  "<button class='btn btn-primary' id='calcularVolumenGasesIdeales'>Calcular volumen </button><br><br>"+
  "");

  $(document).ready(function(){
    calcularGasesIdeales();
    habilitacionGasesIdeales();
  });
});
