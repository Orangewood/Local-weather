var api = "https://fcc-weather-api.glitch.me/api/current?";
//api has issues
navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
  enableHighAccuracy: false,
  timeout: 6000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var lati = crd.latitude;
  var long = crd.longitude; 
  getLocation(lati,long);
}

function error(err) {
  console.warn('unable to get location');
}

function getLocation (lati, long) {
  
  var endpoint = api + "lat=" + lati + "&" + "lon=" + long;

  $.ajax({
    url: endpoint,
    type: 'GET',
    success: function(result) {
        var country = result.sys.country;
        var pic = result.weather[0].icon;
        var type = result.weather[0].main;
        var temp = result.main.temp;
        var hello = Math.round(parseInt(result.main.temp) * 9/5 + 32) + '\xB0';
        var world = Math.round(result.main.temp) + '\xB0'
      $("#main").text(result.name + ", " + country);
      $("#type").text(type);
      $("#picture").attr("src", pic);
      $("#temp").text(hello); 
  }
  })
}

  $("#degree").click(function () {
    var currentTempUnit = $("#degree").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#degree").text(newTempUnit);

    console.log(newTempUnit);
    console.log(currentTempUnit);
  });
  


function newClock () {
var newDate = new Date();

var theTime = newDate.toLocaleTimeString();

var wholeDate = newDate.toUTCString();

var finalDate = wholeDate.slice(0,16);


document.getElementById("clock").innerHTML = finalDate + " " +  theTime;
};

