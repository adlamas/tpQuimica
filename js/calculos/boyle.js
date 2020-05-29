
function calcularBoyle(){
  $('#calcularPresionInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var presionInicial = (presionFinal * volumenFinal) / volumenInicial;
    alert("La presion inicial es: " + presionInicial + "atm");

  });

  $('#calcularPresionFinalBoyle').click(function(){
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var presionFinal = (presionInicial * volumenInicial) / volumenFinal;
    alert("La presion final es: " + presionFinal + "atm");

  });

  $('#calcularVolumenInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var volumenInicial = (presionFinal * volumenInicial) / presionInicial;
    alert("El volumen inicial es: " + volumenInicial + "l");

  });

  $('#calcularVolumenFinalBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());

    var volumenFinal = (presionInicial * volumenInicial) / presionFinal
    alert("El volumen final es: " + volumenFinal + "l");

  });

}
