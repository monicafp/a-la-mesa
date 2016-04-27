$(document).ready(function() {
  dataRef = new Firebase('https://blistering-heat-1643.firebaseio.com/recipes');
  tags = ['desayuno', 'almuerzo y cena', 'postres', 'bebidas'];
  // Submit a new recipie
  $('#content').on('click', '#recipe-form-submit', function(e) {
    e.preventDefault();
    var recipe = {
      title: $('#form-recipe-title').val(),
      description: $('#form-recipe-ingredients-procedure').val(),
      tag: $('#form-tag-select option:selected').text(),
      author: $('#form-recipe-author').val(),
      source: $('#form-recipe-source-url').val(),
      photo_url: $('#form-recipe-photo-url').val(),
      date: new Date(),
      notes: $('#form-recipe-notes').val()
    };
    console.log(recipe);
    dataRef.push(recipe, function(error) {
      $('#form-recipe-title').val(''),
      $('#form-recipe-ingredients-procedure').val(''),
      $('#form-tag-select option:selected').text(),
      $('#form-recipe-author').val(''),
      $('#form-recipe-source-url').val(''),
      $('#form-recipe-photo-url').val(''),
      $('#form-recipe-notes').val('')
      if (error) {
        console.log(error);
      }
    });
  });

  // $('#recipe-update').on('click', function() {
  //   var title = '';
  //   var recipe = {
  //     description: '',
  //     tag: '',
  //     author: '',
  //     source: '',
  //     photo_url: '',
  //     date: ''
  //   };
  //   dataRef.child(title).update(recipe);
  // });

  // Grab all recipes
  // dataRef.once('value', function(data) {
  //   data.forEach(function(recipe) {
  //     var item = recipe.val();
  //     console.log(item);
  //   });
  // });
});
