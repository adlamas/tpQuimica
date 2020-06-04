function chequearValores(arregloDeValores){
  for(var i = 0; i < arregloDeValores.length; i++){
    if (isNaN(arregloDeValores[i])){
      return arregloDeValores[i];
    }
  }
  return true;
}
