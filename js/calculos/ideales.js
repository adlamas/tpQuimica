$.getScript("/js/calculos/chequearValores.js", function() {});

const R = 0.08205;

function obtenerValoresIdeales(){
  var volumen = parseFloat($("#volumenGasesIdeales").val());
  var temperatura = parseFloat($("#temperaturaGasesIdeales").val());
  var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());
  var presion = parseFloat($("#presionGasesIdeales").val());

  return { vol: volumen, temp: temperatura, nm: numeroMoles, pr: presion };
};

function calcularMagnitudesIdeales(magnitudes){
  if(chequearValores(magnitudes) != true){
    alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    throw new Error("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
  }
  else{
    var magnitudCalculada = (magnitudes[0] * magnitudes[1] * magnitudes[2] * magnitudes[3])
    return magnitudCalculada;
  }
}

function volumenGasesIdeales(){
  var valores = obtenerValoresIdeales();
  var resultado = calcularMagnitudesIdeales([
    (1/valores["pr"]), valores["temp"], valores["nm"], R
  ]
  );
  alert("El volumen es: " + resultado + "L");
}

function presionGasesIdeales(){
  var valores = obtenerValoresIdeales();
  var resultado = calcularMagnitudesIdeales([
    (1/valores["vol"]), valores["temp"], valores["nm"], R
  ]
  );
  alert("La presion es: " + resultado + "ATM");
}

function temperaturaGasesIdeales(){
  var valores = obtenerValoresIdeales();
  var resultado = calcularMagnitudesIdeales([
    valores["vol"], valores["pr"], (1/valores["nm"]), (1/R)
  ]
  );
  alert("La temperatura es: " + resultado + "K");
}

function numeroMolesGasesIdeales(){
  var valores = obtenerValoresIdeales();
  var resultado = calcularMagnitudesIdeales([
    valores["vol"], valores["pr"], (1/valores["temp"]), (1/R)
  ]
  );
  alert("El numero de moles es : " + resultado);
}

function calcularGasesIdeales(){
  $('#calcularPresionGasesIdeales').click(function(){
    presionGasesIdeales();
  });

  $('#calcularVolumenGasesIdeales').click(function(){
    volumenGasesIdeales();
  });

  $('#calcularTemperaturaGasesIdeales').click(function(){
    temperaturaGasesIdeales();
  });

  $('#calcularNumeroMolesGasesIdeales').click(function(){
    numeroMolesGasesIdeales();
  });
}

/*function calcularGasesIdeales(){

  const R = 0.08205;

  $('#calcularPresionGasesIdeales').click(function(){
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    if(chequearValores([volumen, temperatura, numeroMoles]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var presion = ( numeroMoles * R * temperatura) / volumen;
      alert("La presion es: " + presion + "ATM");
    }
  });

  $('#calcularVolumenGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    if(chequearValores([presion, temperatura, numeroMoles]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumen = ( numeroMoles * R * temperatura) / presion;
      alert("El volumen es : " + volumen + "L");
    }
  });

  $('#calcularTemperaturaGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    if(chequearValores([presion, volumen, numeroMoles]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var temperatura = (presion * volumen) / (numeroMoles * R);
      alert("La temperatura es: " + temperatura + "K");
    }
  });

  $('#calcularNumeroMolesGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());

    if(chequearValores([presion, volumen, temperatura]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var numeroMoles = (presion * volumen) / (temperatura * R);
      alert("El numero de moles que hay es: " + numeroMoles);
    }
  });

}*/
