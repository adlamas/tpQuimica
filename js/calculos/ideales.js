
function calcularGasesIdeales(){

  const R = 0.08205;

  $('#calcularPresionGasesIdeales').click(function(){
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    var presion = ( numeroMoles * R * temperatura) / volumen;
    alert("La presion es: " + presion + "ATM");

  });

  $('#calcularVolumenGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    var volumen = ( numeroMoles * R * temperatura) / presion;
    alert("El volumen es : " + volumen + "L");

  });

  $('#calcularTemperaturaGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var numeroMoles = parseFloat($("#numeroMolesGasesIdeales").val());

    var temperatura = (presion * volumen) / (numeroMoles * R);
    alert("La temperatura es: " + temperatura + "K");

  });

  $('#calcularNumeroMolesGasesIdeales').click(function(){
    var presion = parseFloat($("#presionGasesIdeales").val());
    var volumen = parseFloat($("#volumenGasesIdeales").val());
    var temperatura = parseFloat($("#temperaturaGasesIdeales").val());

    var numeroMoles = (presion * volumen) / (temperatura * R);
    alert("El numero de moles que hay es: " + numeroMoles);

  });

}
