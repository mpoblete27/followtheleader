var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY; 

//map function taken directly off the google maps tutorial
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644}, //centered on australia when map opens
          zoom: 8
        });
      }