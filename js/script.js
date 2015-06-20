$(document).ready(function(){
    $(".box").mouseover(function(){
		$(this).fadeTo("slow", 1);
	});
	$(".box").mouseleave(function(){
		$(this).fadeTo("slow", 0.5);
	});
    $(".gallary").mouseover(function(){
		$(this).fadeTo("slow", 1);
	});
	$(".gallary").mouseleave(function(){
		$(this).fadeTo("slow", 0.5);
	});
	      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
});