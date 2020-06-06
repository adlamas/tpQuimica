$.getScript("/js/calculos/chequearValores.js", function() {});

function obtenerValoresCharles(){
  var temperaturaInicial = parseFloat($("#temperaturaInicialCharles").val());
  var temperaturaFinal = parseFloat($("#temperaturaFinalCharles").val());
  var volumenInicial = parseFloat($("#volumenInicialCharles").val());
  var volumenFinal = parseFloat($("#volumenFinalCharles").val());

  return { tf: temperaturaFinal, ti: temperaturaInicial, vi: volumenInicial, vf: volumenFinal };
};

function calcularMagnitudesCharles(magnitudes){
  if(chequearValores(magnitudes) != true){
    alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    throw new Error("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
  }
  else{
    var magnitudCalculada = (magnitudes[0] * magnitudes[1]) / magnitudes[2];
    return magnitudCalculada;
  }
}

function temperaturaInicialCharles(){
  var valores = obtenerValoresCharles();
  var resultado = calcularMagnitudesCharles(
    [valores["tf"], valores["vi"], valores["vf"]]
  );
  alert("La temperatura inicial es: " + resultado + "K");
}

function temperaturaFinalCharles(){
  var valores = obtenerValoresCharles();
  var resultado = calcularMagnitudesCharles(
    [valores["ti"], valores["vf"], valores["vi"]]
  );
  alert("La temperatura final es: " + resultado + "K");
}

function volumenInicialCharles(){
  var valores = obtenerValoresCharles();
  var resultado = calcularMagnitudesCharles(
    [valores["ti"], valores["vf"], valores["tf"]]
  );
  alert("El volumen inicial es: " + resultado + "L");
}

function volumenFinalCharles(){
  var valores = obtenerValoresCharles();
  var resultado = calcularMagnitudesCharles(
    [valores["tf"], valores["vi"], valores["ti"]]
  );
  alert("El volumen final es: " + resultado + "L");
}

function calcularCharles(){
  $('#calcularTemperaturaInicialCharles').click(function(){
    temperaturaInicialCharles();
  });

  $('#calcularTemperaturaFinalCharles').click(function(){
    temperaturaFinalCharles();
  });

  $('#calcularVolumenInicialCharles').click(function(){
    volumenInicialCharles();
  });

  $('#calcularVolumenFinalCharles').click(function(){
    volumenFinalCharles();
  });
}



/*function calcularCharles(){
  $('#calcularTemperaturaInicialCharles').click(function(){
    var temperaturaFinal = parseFloat($("#temperaturaFinalCharles").val());
    var volumenInicial = parseFloat($("#volumenInicialCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    if(chequearValores([temperaturaFinal, volumenInicial, volumenFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var temperaturaInicial = (temperaturaFinal * volumenInicial) / volumenFinal;
      alert("La temperatura inicial es: " + temperaturaInicial + "K");
    }
  });

  $('#calcularTemperaturaFinalCharles').click(function(){
    var temperaturaInicial = parseFloat($("#temperaturaInicialCharles").val());
    var volumenInicial = parseFloat($("#volumenInicialCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    if(chequearValores([temperaturaInicial, volumenInicial, volumenFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var temperaturaFinal = (temperaturaInicial * volumenFinal) / volumenInicial;
      alert("La temperatura final es: " + temperaturaFinal + "K");
    }
  });

  $('#calcularVolumenInicialCharles').click(function(){
    var temperaturaInicial = parseFloat($("#temperaturaInicialCharles").val());
    var temperaturaFinal = parseFloat($("#temperaturaFinalCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    if(chequearValores([temperaturaInicial, volumenFinal, temperaturaFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumenInicial = (temperaturaInicial * volumenFinal) / temperaturaFinal;
      alert("El volumen inicial es: " + volumenInicial + "L");
    }
  });

  $('#calcularVolumenFinalCharles').click(function(){
    var temperaturaInicial = parseFloat($("#temperaturaInicialCharles").val());
    var temperaturaFinal = parseFloat($("#temperaturaFinalCharles").val());
    var volumenInicial = parseFloat($("#volumenInicialCharles").val());

    if(chequearValores([temperaturaInicial, volumenInicial, temperaturaFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumenFinal = (temperaturaFinal * volumenInicial) / temperaturaInicial;
      alert("El volumen final es: " + volumenFinal + "L");
    }
  });

}*/
