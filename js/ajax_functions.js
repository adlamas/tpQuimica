
$(".magnitud").click(function(){
  button_id = this.id;
  button_text = $(this).text();
  $.ajax({
    url: "js/" + button_id + ".js",
    method: "GET",
  }).done(function(data) {
    $('.modal-title').text(JSON.parse(data)['nombre']);
    console.log(data);
    $('#body-descripcion').text(JSON.parse(data)['descripcion']);
    $('#img-magnitud').attr('src', 'img/' + button_id + '.jpg');
    ecuaciones = JSON.parse(data)['ecuaciones'];
    $('#body-ecuaciones').text(
      'Ecuaciones en las que se utiliza: ' + ecuaciones
    );
  });
});


$(".ley").click(function(){
  button_id = this.id;
  button_text = $(this).text();
  $.ajax({
    url: "js/" + button_id + ".js",
    method: "GET",
  }).done(function(data) {
    console.log(data['descripcion']);
    $('.modal-title').text(JSON.parse(data)['nombre']);
    $('#img-ley').attr('src', 'img/' + button_id + '.jpg');
    $('#body-descripcion-ley').text(JSON.parse(data)['descripcion']);
  });
});
