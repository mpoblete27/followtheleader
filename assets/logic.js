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

      // Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key='+config.mykey+'&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
      