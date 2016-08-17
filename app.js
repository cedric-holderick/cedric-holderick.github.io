$(document).ready(function(){
  
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  if (this.hash !== "") {
  event.preventDefault();

    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1250, function(){

      window.location.hash = hash;
      });
    } 
  });
})

$(window).scroll(function() {
    $(".slideanim").each(function() {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
         $(this).addClass("slide");
   }
  });
});


var myCenter = new google.maps.LatLng(51.09169139999999,3.4370813000000453)
function initialize() {
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
position:myCenter,
});
marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
