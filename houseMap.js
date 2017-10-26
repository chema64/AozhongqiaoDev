function myMap() {
	var mapCanvas1 = document.getElementById("map1");
	var mapOptions = {
	  center: new google.maps.LatLng(-19.306791, 146.813510),
	  zoom: 19
	};
    var map1 = new google.maps.Map(mapCanvas1, mapOptions);
    
    var marker1 = new google.maps.Marker({
    	position:mapOptions.center
    	
    });
    marker1.setMap(map1);



}