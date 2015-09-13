/* 
* @Author: Chenyu
* @Date:   2015-09-13 18:39:24
* @Last Modified by:   Chenyu
* @Last Modified time: 2015-09-13 19:39:42
*/

'use strict';
 

// funcitons to generate the maps with certain preset.
// center is a Google Maps LatLng object that tells the the API where to center the map.
// zoom is a number between 0 (farthest) and 22 that sets the zoom level of the map.
// mapTypeId is used to specify what type of map to use. Your choices are ROADMAP, SATELLITE, HYBRID, or TERRAIN.
      function initializeMap1() {
        var mapCanvas = document.getElementById('map1');

        var myLatLng = {lat: 1.342084, lng: 103.682553};
        var mapOptions = {
          center: myLatLng,
          zoom: 17,
        }

        //create the map
        var map = new google.maps.Map(mapCanvas, mapOptions)

        //create a marker
		var marker = new google.maps.Marker({
			position: myLatLng,
			title:"Southerner Cinema"
		});

		//append the mark to the map
		marker.setMap(map);
      }
//generate the second cinema map
        function initializeMap2() {
        var mapCanvas = document.getElementById('map2');
        var myLatLng = {lat: 1.349569, lng: 103.684587};
        var mapOptions = {
          center: myLatLng,
          zoom: 17,
        }

        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
			position: myLatLng,
			title:"ADM Cinema"
		});

		//append the mark to the map
		marker.setMap(map);
      }
//generate the third cinema map
        function initializeMap3() {
        var mapCanvas = document.getElementById('map3');
        var myLatLng = {lat: 1.351119, lng: 103.687832};
        var mapOptions = {
          center: myLatLng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
			position: myLatLng,
			title:"Executive Cinema"
		});

		//append the mark to the map
		marker.setMap(map);
      }


//attach the maps when the DOM finishes loading
    google.maps.event.addDomListener(window, 'load', initializeMap1);
    google.maps.event.addDomListener(window, 'load', initializeMap2);
	google.maps.event.addDomListener(window, 'load', initializeMap3);

  