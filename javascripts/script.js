Zepto(function($){
  $(".tab-header li").on('click', function(e){
    target = $(this).data("target");
    tabs = $(this).parent().parent().find(".tabs-container");
    tabs.find("div").removeClass("active");
    tabs.find("div."+target).addClass("active");
  });
});