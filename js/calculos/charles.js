$.getScript("/js/calculos/chequearValores.js", function() {});

function calcularCharles(){
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
    var temperaturaFinal = parseFloat($("#volumenInicialCharles").val());
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
    var temperaturaFinal = parseFloat($("#volumenInicialCharles").val());
    var volumenInicial = parseFloat($("#volumenFinalCharles").val());

    if(chequearValores([temperaturaInicial, volumenInicial, temperaturaFinal]) != true){
      alert("Un valor no se ha cargado correctamente, por favor intentar de nuevo");
    }
    else{
      var volumenFinal = (temperaturaFinal * volumenInicial) / temperaturaInicial;
      alert("El volumen final es: " + volumenFinal + "L");
    }
  });

}
