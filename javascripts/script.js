$( document ).ready(function() {
  $(".tab-header li").on('click', function(e){
    target = $(this).data("target");
    tabs = $(this).parent().parent().find(".tabs-container");
    tabs.find("div").removeClass("appeared");
    tabs.find("div."+target).addClass("appeared");
  });

  $(".menu li").on('click', function(e){
    target = $(this).data("target");
    div_target = $("#"+target);

    console.log(div_target);

    $('html,body').animate({
      scrollTop: div_target.offset().top
    }, 500);
  });

  jQuery(window).load(function() {
    setTimeout(function(){
      $(".logo img").addClass("appeared");
    }, 800);

    setTimeout(function(){
      $(".logo .title").addClass("appeared");
    }, 1200);
  });

  // $(".logo img").one('load', function() {

  // });

  $(".bg").each(function(index) {
    bgDiv = $(this)
    var bgImgSrc = bgDiv.css('background-image');
    bgImgSrc = bgImgSrc.replace('url(','').replace(')','');

    bgImg = new Image();
    bgImg.div = bgDiv;
    bgImg.onload = function(){
      console.log("loaded");
      this.div.addClass("appeared");
    };
    bgImg.src = bgImgSrc;

  });

      $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });

});