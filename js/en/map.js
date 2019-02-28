
function myMap() {
	var mapCanvas1 = document.getElementById("map1");
    var mapCanvas2 = document.getElementById("map2");
	var mapOptions = {
	  center: new google.maps.LatLng(-19.259176, 146.813765), 
	  zoom: 18
	};
    var map1 = new google.maps.Map(mapCanvas1, mapOptions);
    //var map2 = new google.maps.Map(mapCanvas2, mapOptions);

    var marker1 = new google.maps.Marker({
    	position:mapOptions.center,
    	animation:google.maps.Animation.BOUNCE
    });
    marker1.setMap(map1);

    var map2 = new google.maps.Map(mapCanvas2, mapOptions);

    var marker2 = new google.maps.Marker({
        position:mapOptions.center,
        animation:google.maps.Animation.BOUNCE
    });
    marker2.setMap(map2); 
}
















