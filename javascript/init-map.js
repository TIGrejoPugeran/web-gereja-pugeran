document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map-container').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyBGSS2lubdUSrwbKjf_yf5k8RyiSv_MfK0&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

var map;

function initMap() {
  var center = {lat: -7.8163089, lng: 110.3560218};
  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 18,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Gereja Hati Kudus Tuhan Yesus Pugeran</h1>'+
    '<br/>'+
    '<div id="bodyContent">'+
    '<p>Jl. Suryaden No. 63, Gedongkiwo, Mantrijeron, Suryodiningratan, Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55142</p>'+
    '<br/>'+
    '<p>(0274) 372295</p>'+
    '</div>'+
    '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(map, marker);
}
