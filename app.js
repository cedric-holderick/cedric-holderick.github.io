$(document).ready(function(){
  
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  if (this.hash !== "") {
  event.preventDefault();

    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1550, function(){

      window.location.hash = hash;
      });
    } 
  });
})

$(window).scroll(function() {
    $(".slideanim").each(function() {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
         $(this).addClass("slide");
   }
  });
});
