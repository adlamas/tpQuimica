$.getScript("/js/calculos/chequearValores.js", function() {});

/*function obtenerValoresBoyle(){
  var presionFinal = parseFloat($("#presionFinalBoyle").val());
  var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
  var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

  return [presionFinal, volumenInicial, volumenFinal];
};

function calcularPresionInicialBoyle(magnitudes){
  if(chequearValores([presionFinal, volumenInicial, volumenFinal]) != true){
    alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    throw new Error("ghola");
  }
  else{
    var presionInicial = (presionFinal * volumenFinal) / volumenInicial;
    return presionInicial;
  }
}

function last(){
  var valores = obtenerValoresBoyle();
  var resultado = calcularPresionInicialBoyle(valores);
  alert("La presion inicial es: " + resultado + "ATM");
}

$('#calcularPresionInicialBoyle').click(function(){
  last();
});*/


// anterior

function calcularBoyle(){
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
}
