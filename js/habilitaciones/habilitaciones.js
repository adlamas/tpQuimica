
function habilitacionPorLey(arrayInputs){
  var stringIds = "";
  for(var i = 0; i < arrayInputs.length; i++){
    stringIds += "#" + arrayInputs[i] + ",";
  }

  stringIds = stringIds.substring(0, stringIds.length - 1);
  $(stringIds).change(function(){
    var idActual = $(this).attr('id');
    for(var i = 0; i < arrayInputs.length; i++){
      var imputActual = $("input[name=" + arrayInputs[i] + "]");
      if(imputActual.attr("name") === idActual){
        imputActual.prop("disabled", true);
      }
      else{
        imputActual.prop("disabled", false);
      }
    }
  });
}

function hablitacionBoyle(){
  habilitacionPorLey(['rbpib', 'rbpfb', 'rbvib', 'rbvfb']);
}

function habilitacionCharles(){
  habilitacionPorLey(['rbtic', 'rbtfc', 'rbvic', 'rbvfc']);
}

function habilitacionGasesIdeales(){
  habilitacionPorLey(['rbnmgi', 'rbtgi', 'rbpgi', 'rbvgi']);
}
