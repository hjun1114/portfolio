
  $(function(){

      $(".dark-overlay").addClass('animated fadeInLeft');

      $(".header-tagline").addClass('animated fadeIn');

      $("#fullpage").fullpage({
         anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage']
      });
  });
