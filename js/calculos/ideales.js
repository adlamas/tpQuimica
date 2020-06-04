$.getScript("/js/calculos/chequearValores.js", function() {});

function calcularGasesIdeales(){

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

}
