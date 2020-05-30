
function calcularBoyle(){
  $('#calcularPresionInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var presionInicial = (presionFinal * volumenFinal) / volumenInicial;
    alert("La presion inicial es: " + presionInicial + " ATM");

  });

  $('#calcularPresionFinalBoyle').click(function(){
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var presionFinal = (presionInicial * volumenInicial) / volumenFinal;
    alert("La presion final es: " + presionFinal + " ATM");

  });

  $('#calcularVolumenInicialBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());
    var volumenFinal = parseFloat($("#volumenFinalBoyle").val());

    var volumenInicial = (presionFinal * volumenFinal) / presionInicial;
    alert("El volumen inicial es: " + volumenInicial + "L");

  });

  $('#calcularVolumenFinalBoyle').click(function(){
    var presionFinal = parseFloat($("#presionFinalBoyle").val());
    var volumenInicial = parseFloat($("#volumenInicialBoyle").val());
    var presionInicial = parseFloat($("#presionInicialBoyle").val());

    var volumenFinal = (presionInicial * volumenInicial) / presionFinal
    alert("El volumen final es: " + volumenFinal + " L");

  });

}
