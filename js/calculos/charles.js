function calcularCharles(){
  $('#calcularTemperaturaInicialCharles').click(function(){
    var temperaturaFinal = parseFloat($("#presionFinalCharles").val());
    var volumenInicial = parseFloat($("#volumenInicialCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    var temperaturaInicial = (temperaturaFinal * volumenInicial) / volumenFinal;
    alert("La temperatura inicial es: " + temperaturaInicial + "K");

  });

  $('#calcularTemperaturaFinalCharles').click(function(){
    var temperaturaInicial = parseFloat($("#presionFinalCharles").val());
    var volumenInicial = parseFloat($("#volumenInicialCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    var temperaturaFinal = (temperaturaInicial * volumenFinal) / volumenInicial;
    alert("La temperatura final es: " + temperaturaFinal + "K");

  });

  $('#calcularVolumenInicialCharles').click(function(){
    var temperaturaInicial = parseFloat($("#presionFinalCharles").val());
    var temperaturaFinal = parseFloat($("#volumenInicialCharles").val());
    var volumenFinal = parseFloat($("#volumenFinalCharles").val());

    var volumenInicial = (temperaturaInicial * volumenFinal) / temperaturaFinal;
    alert("El volumen inicial es: " + volumenInicial + "L");

  });

  $('#calcularVolumenFinalCharles').click(function(){
    var temperaturaInicial = parseFloat($("#presionFinalCharles").val());
    var temperaturaFinal = parseFloat($("#volumenInicialCharles").val());
    var volumenInicial = parseFloat($("#volumenFinalCharles").val());

    var volumenFinal = (temperaturaFinal * volumenInicial) / temperaturaInicial;
    alert("El volumen final es: " + volumenFinal + "L");

  });

}
