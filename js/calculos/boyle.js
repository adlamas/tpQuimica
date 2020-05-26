
function calcularBoyle(){
  $('#calcularPresionInicialBoyle').click(function(){
    var presionFinal = parseInt($("#presionFinalBoyle").val());
    var volumenInicial = parseInt($("#volumenInicialBoyle").val());
    var volumenFinal = parseInt($("#volumenFinalBoyle").val());

    var presionInicial = (presionFinal * volumenFinal) / volumenInicial;
    alert("La presion inicial es: " + presionInicial);

  });

  $('#calcularPresionFinalBoyle').click(function(){
    var presionInicial = parseInt($("presionInicialBoyle").val());
    var volumenInicial = parseInt($("volumenInicialBoyle").val());
    var volumenFinal = parseInt($("volumenFinalBoyle").val());

    var presionFinal = (presionInicial * volumenInicial) / volumenFinal;
    alert("La presion final es: " + presionFinal);

  });

  $('#calcularVolumenInicialBoyle').click(function(){
    var presionFinal = parseInt($("presionFinalBoyle").val());
    var presionInicial = parseInt($("presionInicialBoyle").val());
    var volumenFinal = parseInt($("volumenFinalBoyle").val());

    var volumenInicial = (presionFinal * volumenInicial) / presionInicial;
    alert("El volumen inicial es: " + volumenInicial);

  });

  $('#calcularVolumenFinalBoyle').click(function(){
    var presionFinal = parseInt($("presionFinalBoyle").val());
    var volumenInicial = parseInt($("volumenInicialBoyle").val());
    var presionInicial = parseInt($("presionInicialBoyle").val());

    var volumenFinal = (presionInicial * volumenInicial) / presionFinal
    alert("El volumen final es: " + volumenFinal);

  });

}
