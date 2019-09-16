window.addEventListener('load', doitfirst);
        function doitfirst() {
            map = document.getElementById('map');
           
            function getmylocation() {
                //1- check availability of geolocation
                result.style.display = "none"
                map.style.display = "block";
                if (navigator.geolocation) {
                    //2- get permission getCurrentPosition
                    navigator.geolocation.getCurrentPosition(getposition, errorhandeler);
                }
                else {
                    map.innerText = "Update Your Browser and Try Again !";
                }
            }
            // display
            bDisply = document.getElementById("display");
            bDisply.addEventListener('click',getmylocation);
           
            
            bDisply2 = document.getElementById("displayINfo");
            bDisply2.addEventListener('click',function(){
                console.log("s")
                result.style.display = "block"
                 map.style.display = "none";
            });
            //

            function getposition(position) {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                //===========
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                time = parseInt (position.timestamp);
                la.value = lat;
                lo.value = lon;
                x = new Date(time)
                ac.value = position.coords.accuracy
                tim.value = x.toString();
                ///============
                mylocation = new google.maps.LatLng(lat, lon);
                var myLatLng = {lat: lat, lng:lon};
                myspecs = { zoom: 17, center: mylocation };
                // var myMarker = new google.maps.Marker({
                //     position: new google.maps.LatLng(lat, lon),
                //     draggable: true
                // });
               mymap = new google.maps.Map(map, myspecs);
                var myimage = new Image();
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: mymap,
                    title: 'Hello World!'
                  });
                myimage.src = mymap
                map.appendChild(myimage);
                
            }
            function errorhandeler(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        map.innerText = "PERMISSION_DENIED";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        map.innerText = "POSITION_UNAVAILABLE";
                        break;
                    case error.TIMEOUT:
                        map.innerText = "TIMEOUT";
                        break;
                    case error.UNKOWN_ERROR:
                        map.innerText = "UNKOWN_ERROR";
                        break;
                    default:
                }
                //alert("Error");
            }
        }
        