$.getScript("/js/calculos/chequearValores.js", function() {});

function obtenerValoresBoyle(){
  var presionFinal = parseFloat($("#presionFinalBoyle").val());
  var presionInicial = parseFloat($("#presionInicialBoyle").val());
  var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
  var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

  return { pf: presionFinal, pi: presionInicial, vi: volumenInicial, vf: volumenFinal };
};

function calcularMagnitudesBoyle(magnitudes){
  if(chequearValores(magnitudes) != true){
    alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    throw new Error("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
  }
  else{
    var magnitudCalculada = (magnitudes[0] * magnitudes[1]) / magnitudes[2];
    return magnitudCalculada;
  }
}

function presionInicialBoyle(){
  var valores = obtenerValoresBoyle();
  var resultado = calcularMagnitudesBoyle(
    [valores["pf"], valores["vf"], valores["vi"]]
  );
  alert("La presion inicial es: " + resultado + "ATM");
}

function presionFinalBoyle(){
  var valores = obtenerValoresBoyle();
  var resultado = calcularMagnitudesBoyle(
    [valores["pi"], valores["vi"], valores["vf"]]
  );
  alert("La presion final es: " + resultado + "ATM");
}

function volumenInicialBoyle(){
  var valores = obtenerValoresBoyle();
  var resultado = calcularMagnitudesBoyle(
    [valores["pf"], valores["vf"], valores["pi"]]
  );
  alert("El volumen inicial es: " + resultado + "L");
}

function volumenFinalBoyle(){
  var valores = obtenerValoresBoyle();
  var resultado = calcularMagnitudesBoyle(
    [valores["pi"], valores["vi"], valores["pf"]]
  );
  alert("El volumen final es: " + resultado + "L");
}

function calcularBoyle(){
  $('#calcularPresionInicialBoyle').click(function(){
    presionInicialBoyle();
  });

  $('#calcularVolumenInicialBoyle').click(function(){
    volumenInicialBoyle();
  });

  $('#calcularPresionFinalBoyle').click(function(){
    presionFinalBoyle();
  });

  $('#calcularVolumenFinalBoyle').click(function(){
    volumenFinalBoyle();
  });
}



// anterior

/*function calcularBoyle(){
  $('#calcularPresionInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    if(chequearValores([presionFinal, volumenInicial, volumenFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var presionInicial = (presionFinal * volumenFinal) / volumenInicial;
      alert("La presion inicial es: " + presionInicial + "ATM");
    }
  });

  $('#calcularPresionFinalBoyle').click(function(){
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    if(chequearValores([presionInicial, volumenInicial, volumenFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var presionFinal = (presionInicial * volumenInicial) / volumenFinal;
      alert("La presion final es: " + presionFinal + "ATM");
    }

  });

  $('#calcularVolumenInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    if(chequearValores([presionInicial, presionFinal, volumenFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumenInicial = (presionFinal * volumenFinal) / presionInicial;
      alert("El volumen inicial es: " + volumenInicial + "L");
    }
  });

  $('#calcularVolumenFinalBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());

    if(chequearValores([presionInicial, volumenInicial, presionFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumenFinal = (presionInicial * volumenInicial) / presionFinal
      alert("El volumen final es: " + volumenFinal + "L");
    }
  });
}*/
