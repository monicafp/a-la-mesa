$(document).ready(function() {

  var percent = 0.73;

  // Init
  $.get('home.html', function(data) {
    $('#content').html(data);
    $('#search-box').hide();
    if ($(window).width() < 768) {
      $('#navigation').css('background-color', '#013008');
    } else {
      $('#navigation').css('background-color', 'transparent');
    };
    $('#brand-image-words').hide();
    buildRecipies();
    buildRecipesFooter();
  });

  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('#navigation').css('background-color', '#013008');
    } else {
      if (!($(window).scrollTop() > ($(window).height() * percent))) {
        $('#navigation').css('background-color', 'transparent');
      }
    };
  });


  // Links
  $('#brand').on('click', function() {
    $.get('home.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').removeClass('header-height-helper');
      percent = 0.73;
      buildRecipies();
      buildRecipesFooter();
    });
  });

  $('#about').on('click', function() {
    $.get('about.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

/*
  $('#dropdown-li').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });
*/

  $('#desayuno').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
      buildRecipesTodas('desayuno');
    });
  });

  $('#almuerzo-cena').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
      buildRecipesTodas('almuerzo y cena');
    });
  });

  $('#postre').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
      buildRecipesTodas('postre');
    });
  });

  $('#bebidas').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
      buildRecipesTodas('bebidas');
    });
  });

  $('#contact').on('click', function() {
    $.get('contact.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.42;
    });
  });

  $('#contact-footer').on('click', function() {
    $.get('contact.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.42;
    });
  });


  // Events that need to be listened upon change
  $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() * percent)) {
      $('#navigation').css('background-color', '#013008');
      $('#brand-image-words').show();
    } else {
      if ($(window).width() > 768) {
        $('#navigation').css('background-color', 'transparent');
        $('#brand-image-words').hide();
      }
    }
  });

  $('.navbar-nav li a, #brand').on('click', function() {
    $('.active').removeClass('active');
    $(this).toggleClass('active');
  });

  $('#search-button').on('click', function() {
    $('#search-box').toggle('400');
  });

  $('#contact-footer').on('click', function() {
    $('.active').removeClass('active');
    $('#contact').toggleClass('active');
  });

  $('#brand, #desayuno, #almuerzo-cena, #postre, #bebidas, #about, #contact').on('click', function() {
    $('.navbar-collapse').removeClass('in');
   });

  $('#search-button').on('click', function(e) {
    e.preventDefault();
  });

  // Modal Watcher
  $('#content').on('mouseenter', '.recipe-home', function() {
    // rebuild the modal

  });

  // Login Events
  $('body').on('click', '#login-button-modal', function(e) {
    e.preventDefault();
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    if (email === "monica@example.com" || email === "johnny@example.com" && password === "password") {
      $.get('recipe-form.html', function(data) {
        $('#content').html(data);
        $('#header-image-back').removeClass('header-height-helper');
        percent = 0.73;
      });
      // What happens after authentication
    }
  });

  recipeHtml = function(recipe) {
    var html = "<div class=\"col-md-6 col-xs-12\"><div class=\"recipe-home\"><div class=\"image-wrapper-recipes\"><img data-toggle=\"modal\" data-target=" + recipe.id + " src=" + recipe.photo_url + " /></div><h3 data-toggle=\"modal\" data-target=" + recipe.id + " class=\"recipe-title\">" + recipe.title + "<h3> <p class=\"recipe-contributor\"> Colaborador(a): " + recipe.author + " </p> </div> </div>";
    return html;
  }

  recipeModalHtml = function(recipe) {
    var html = "<div id=\"" + recipe.id + "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> </div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"recipe-title-modal\"><h3>" + recipe.title + "</h3></div></div></div><div class=\"row\"> <div class=\"col-md-6 col-xs-12\" id=\"foto-receta-modal\"><div class=\"image-wrapper-recipe-modal\"><img src=\"" + recipe.photo_url + "\" /></div> </div><div class=\"col-md-6 col-xs-12\" class=\"general-info-recipe-modal\"><div class=\"recipe-colaborator-modal\">Colaborador(a): " + recipe.author + "</div><div class=\"recipe-source-modal\">Source: <a target=\"_blank\" href=\"http://idlewife.blogspot.com/2011/02/rustic-key-lime-tarts.html\">Idle Wife</a></div> </div> </div> <div class=\"row\" id=\"ingredientes\"> <div class=\"col-xs-12\"> <h4>Procedimiento</h4> <p> " + recipe.description + "</p> </div> </div> <div class=\"row\" id=\"comentarios-receta\"> <div class=\"col-xs-12\"> <h4>Notas</h4> <p> " + recipe.notes + " </p> </div> </div> <div class=\"row\" id=\"tags-receta\"> <div class=\"col-xs-12\"> <h4>Tag</h4> <p> " + recipe.tag + " </p> </div> </div> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> </div> </div> </div> </div> </div> </div>";
    return html;
  }

  buildRecipies = function() {
    $('.recipes-row').html('');
    var recipeHtmlList = [];
    var recipesQuery = dataRef.limitToLast(6);
    recipesQuery.on('value', function(snapshot) {
      snapshot.forEach(function(recipe) {
        recipeHtmlList.push(recipeHtml(recipe.val()));
      });
      var renderHtml = recipeHtmlList.join('');
      $('.recipes-row').append(renderHtml);
    }, function(error) {
      console.log('Read failed: ', error.code);
    });
  };

  recipeFooterHtml = function(recipe) {
    var html = "<li>" + recipe.title + "</li>";
    return html;
  }

  buildRecipesFooter = function() {
    $('.footer-recetas-recientes').html('');
    var recipeFooter = [];
    var recipesQuery = dataRef.limitToLast(3);
    recipesQuery.on('value', function(snapshot) {
      snapshot.forEach(function(recipe) {
        recipeFooter.push(recipeFooterHtml(recipe.val()));
      });
      var renderHtml = recipeFooterHtml.join('');
      $('.footer-recetas-recientes').append(renderHtml);
    }, function(error) {
      console.log('Read failed: ', error.code);
    });
  };

  recipeHtmlTodasItem = function(recipe) {
    var html = "<div class=\"col-md-3 col-sm-6 col-xs-12 recipe-container-todas\"> <div class=\"image-wrapper-recipes-todas\"> <a data-toggle=\"modal\" data-target=\"#test-modal-receta\" href=\"#\"><div class=\"wrapper-overflow\"><img src=\"" + recipe.photo_url + "\" /> </div> <h4 class=\"recipe-title-todas\">" + recipe.title + "</h4></a> <p class=\"recipe-upload-date\"> " + recipe.date + " </p> </div> </div>";
    return html;
  }

  buildRecipesTodas = function(tag) {
    $('.recipes-todas').html('');
    var recipeTodas = [];
    if (tag) {
      var recipesTodas = dataRef.orderByChild('tag').equalTo(tag).limitToLast(16);
    } else {
      var recipesTodas = dataRef.limitToLast(16);
    }
    recipesTodas.on('value', function(snapshot) {
      snapshot.forEach(function(recipe) {
        console.log(recipe.val());
        recipeTodas.push(recipeHtmlTodasItem(recipe.val()));
      });
      var renderHtml = recipeTodas.join('');
      console.log(renderHtml);
      $('.recipes-todas').html(renderHtml);
    }, function(error) {
      console.log('Read failed: ', error.code);
    });
  }

  /// trials for dropdown issue on mobile view


  //  if ($(window).width() < 768) {
  //    $('.navbar-nav li a').on('click', function(){
  //       $('.navbar-collapse').addClass('in');
  //       });
  //         $('.navbar-nav li a').on('click', function(){
  //            $('.navbar-collapse').removeClass('in')
  //         });
  //    } else {
  //    };


  //    $('#dropdown-li').on('click', function(){
  //        $('#dropdown-li').attr('aria-expanded', 'true');
  //      $('li.dropdow').addClass('open');
  //      });



  /// end trials for dropdown issue on mobile view

});
