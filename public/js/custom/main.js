//ChirilaDB Javascript
//By Abhi Nayar, Yale 2018
//http://www.linkedin.com/in/abhinayar

//For inquiries please contact author
/*Dependencies:
-jQuery
-Papa Parse
*/

/* Global Variables */
var _gmapKey = "AIzaSyBq_JAExTxvT_Tin75QXSkEdoEtkxzYruM";
var _globalData = null;

//Google Map Init
/*
    Map Customization-
    Options for mapTypeId:
    roadmap,satellite(no labels),hybrid,terrain
*/

//THIS IS YOUR MAP and SUBMAP
var map;
var subMap;
//INIT MAP FUNCTION
//NOTE: Must be outisde the ready function
function initMap() {    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        disableDefaultUI: true,
        center: new google.maps.LatLng(-27.5,134.5),
        mapTypeId: 'terrain',
        styles: [
            {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
            },
            {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            },
            {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
            },
            {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
            },
            {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
            },
            {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            }
        ]
    });
};
function initSubMap() {    
    subMap = new google.maps.Map(document.getElementById('subMap'), {
        zoom: 4,
        disableDefaultUI: false,
        center: new google.maps.LatLng(-25.7,134.5),
        mapTypeId: 'terrain',
        styles: [
            {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
            },
            {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            },
            {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
            },
            {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
            },
            {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
            },
            {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            }
        ]
    });
}

//Makes sure jQuery is OK
$.noConflict;
//Ready function
$(document).ready(function(){    
    //Logo link 
    $(".sidebar .top-left").click(function() {
        window.location.href = '../index.html'; });
    
    //Get the CSV data
    $.ajax({
       type: "GET",
       url: "testTable.csv",
       dataType: "text",
       success: function(data) {
           //console.log(data);
           handleCSV(data);
       },
       error: function(er) {
           console.log("error");
           console.log(er);
       }
    });
    //parse CSV data
    function handleCSV(csv_data) {
        Papa.parse(csv_data, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                _globalData = results.data;
                
                //Get page name for conditional function calls
                var path = window.location.pathname;
                var page = path.split("/").pop();
                page = page.toString();
                //console.log(page);
                
                
                //if languages page, populate map + lang table
                if (page === "languages.html") {
                    console.log("languages.html");
                    populateMap(0, _globalData.length, _globalData);
                } 
                //else if populate languages subpage
                else if (page === "language_sub.html") {
                    console.log("lang-subpage.html");
                    populateLangSubpage(_globalData);
                }
                //else if populate word table
                else if (page === "words.html") {
                    console.log("words.html");
                    populateWordsTable(_globalData);
                } 
                else if (page === "reconstructions.html") {
                    console.log("reconstructions.html");
                    populateReconstructionsTable(_globalData);
                }
                else {
                    console.log("Page Not Identified. Error");
                }
            }
        });
    }
    
    //Clears and populates the google map
    function populateMap(startLimit, numToDisplay, data) {
        //Indicated WHERE in the dataset to start
        //Given by a global variable that indicates where in the set
        //The user current is
        var start = startLimit;
        //How many items are displayed on the page/table
        //Also a user changeable global var
        var num = numToDisplay;
        //There are many languages repeated in the dataset
        //We will create an array and ONLY map if we haven't mapped before
        var mappedLangs = [];
        //markers array
        var markers = [];
        var infowindows = [];
        //this will be the index where the marker gets stored
        var numMarkers = 0;
        
        for (var i = startLimit; i < startLimit + numToDisplay; i++) {
            //Local var for current row
            var item = data[i];
            
            //Get langName from data and convert -> string
            var langName = item.StdLanguageName.toString();
            
            //Check if the langName is in the mappedLangs array
            //If not then continue
            //Else do nothing and incrmeent i
            if($.inArray(langName, mappedLangs) == -1) {
                //add the current landName to the mapped array
                mappedLangs.push(langName);
                //Get lat/long and make google LatLng
                var lat = item.Latitude;
                var long = item.Longitude;
                var latLng = new google.maps.LatLng(lat, long);
                
                //This div holds the "info window" content
                var infowincontent = document.createElement('div');
                //Title creation
                var strong = document.createElement('strong');
                strong.setAttribute('style', 'white-space: pre; line-height: 1.6em; font-family: "Roboto Slab"; font-size: 14px; font-weight: 700');
                strong.textContent = langName;
                //Add title tp the info window
                infowincontent.appendChild(strong);
                //Add a line break
                infowincontent.appendChild(document.createElement('br'));
                //Now we want the text to go inside
                /*What data do we want to display?
                -StdLangID
                -Variety/Dialect
                -Variety ID
                -Subgroup
                -Family
                */
                
                //NEW VARS FOR READABILITY
                var langname = langName;
                var langid = item.StdLangID.toString();
                var family = item.Family.toString();
                var subgroup = item.Subgroup.toString();
                var variety = item.Variety.toString();
                var isocode = item.ISO639.toString();
                var glottocode = item.Glottolog_id.toString();
                var aiatsis = item.AIATSISCode.toString();
                
                /* Add hr */
                infowincontent.appendChild(document.createElement('hr'));
                //Create text element
                var text = document.createElement('text');
                text.setAttribute('style', 'white-space: pre; line-height: 1.6em; font-family: "Roboto Slab"; font-size: 12px;');
                text.textContent = "Standard Language ID: " + langid + "\r\n";
                text.textContent += "Variety/Dialect: " + variety + "\r\n";
                text.textContent += "Subgroup: " + subgroup + "\r\n";
                text.textContent += "Family: " + family + "\r\n";
                //Append all that to infowindow
                infowincontent.appendChild(text);
                
                //Create map icon
                var icon = {
                    url: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/map-marker-icon.png", // url
                    scaledSize: new google.maps.Size(30, 30), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                
                //Add infowindow, and marker to appropriate array
                //Define function to display on click
                infowindows[numMarkers] = new google.maps.InfoWindow({
                    content: infowincontent
                });
                markers[numMarkers] = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: icon
                });
                google.maps.event.addListener(markers[numMarkers], 'click', (function(marker, i) {
                    return function() {
                        infowindows[i].open(map, markers[i]);
                    }
                })(markers[numMarkers], numMarkers));
                
                //increment this for the next marker
                numMarkers++;
                
                //NOW LET US POPULATE THE LANG TABLE
                //build table row;
                var $langLink = $("<a>").attr("href", "https://abhinayar.github.io/ChirilaDB/language_sub.html?langname=" + langname + "&subgroup=" + subgroup + "&family=" + family + "&iso639=" + isocode + "&glottocode=" + glottocode + "&aiatsis=" + aiatsis + "&variety=" + variety).text(langname);
                var $tr = $('<tr>').append(
                    $('<td>').html($langLink).addClass("langname"),
                    $('<td>').text(subgroup).addClass("subgroup"),
                    $('<td>').text(family).addClass("family"),
                    $('<td>').text(isocode).addClass("isocode"),
                    $('<td>').text(glottocode).addClass("glottocode"),
                    $('<td>').text(aiatsis).addClass("aiatsis"),
                    $('<td>').text(variety).addClass("variety")
                );
                //append to table
                $("#language-table-main .list").append($tr);
            }
        }
        
         var options = {
            valueNames: [ 'langname', 'subgroup', 'family' ]
        };

        var userList = new List('languages-table', options);
    }
    
    function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    
    /*******************/
    /*******************/
    /* LANG SUBPAGE */
    /*******************/
    /*******************/
    function populateLangSubpage(data) {
        //First we need to parse the url to determine the language info
        /*
            We need:
            -Lang Name
            -Subgroup
            -Family
            -Iso639
            -GlottologID
            -AiatsisCode
            -Variety
            
            url is of form:
            http://...../languages_sub.html?langname=_&subgroup=_&family=_ and so on
        */
        
        var langname = getURLParameter('langname');
        var subgroup = getURLParameter('subgroup');
        var family = getURLParameter('family');
        var iso639 = getURLParameter('iso639');
        var glottocode = getURLParameter('glottocode');
        var aiatsis = getURLParameter('aiatsis');
        var variety = getURLParameter('variety');
        var lat = 0, long = 0;
    
        //Replace title
        var title = $("head title").text();
        $("head title").text(title+=langname);
        
        //Populate page
        $("#languages-sub .lang-name").text(langname);
        $("#languages-sub .subgroup").text(subgroup);
        $("#languages-sub .family").text(family);
        $("#languages-sub .iso639").text(iso639);
        $("#languages-sub .glottocode").text(glottocode);
        $("#languages-sub .aiatsis").text(aiatsis);
        
        //Links
        $("#languages-sub .glottolog-link").attr("href", "http://glottolog.org/resource/languoid/id/" + glottocode);
        var wikipediaName = langname.replace(/ /g,"_");
        $("#languages-sub .wikipedia-link").attr("href", "https://en.wikipedia.org/wiki/" + wikipediaName);
        $("#languages-sub .ethnologue-link").attr("href", "https://www.ethnologue.com/language/" + iso639);
        $("#languages-sub .endangeredlanguages-link").attr("href", "http://endangeredlanguages.com/lang/search/#/?endangerment=U,S,AR,V,T,E,CE,SE,AW,D&sample_types=N,A,V,D,I,G,L&locations=known,unknown&q=" + langname + "&type=code");
        $("#languages-sub .olac-link").attr("href", "http://www.language-archives.org/language/" + iso639);
        $("#languages-sub .aiatsis-link").attr("href", "http://austlang.aiatsis.gov.au/main.php?code=" + aiatsis);
        $("#languages-sub .googlescholar-link").attr("href", "https://scholar.google.com/scholar?q=" + langname + "+language&btnG=&hl=en&as_sdt=0%2C7");
        
        //Create word table
        //Loop through Data. NEED EFFICIENCY
        for (var i = 0; i < data.length; i++) {
            //dataOnce is a var bc I need to load lat/long coords and might as well do it while Im "querying" the db anyways
            //It is a FLAG 
            var dataOnce = 0;
            
            var item = data[i]; //get item
            var curLang = item.StdLanguageName.toString(); //get current Language Name
            if (curLang === langname) { 
                //ONLY if this is the lang. HAS TO BE MORE EFFICIENT WAY
                //get words + properties
                
                //First off check flag dataOnce and append to local superVar lat/long
                //only want this ONCE
                if (dataOnce == 0) {
                    lat = item.Latitude;
                    long = item.Longitude;
                    dataOnce++;
                }
                
                //now get rest of data for each word
                var word = item.OriginalForm.toString();
                var phoneticForm = item.PhonemicisedIPA.toString();
                var gloss = item.Std_Gloss.toString();
                var source = item.Author.toString();
                
                //build table row;
                $tr = $("tr");
                var $tr = $('<tr>').append(
                    $('<td>').text(word).addClass("word"),
                    $('<td>').text(phoneticForm).addClass("phonetic-form"),
                    $('<td>').text(gloss).addClass("gloss"),
                    $('<td>').text(source).addClass("source"),
                    $('<td>').text("Coming Soon").addClass("error")
                );
                //append to table
                $("#language-specific-table .list").append($tr);
            }
        }
        setTableSort();
        
        function setTableSort() {
             var options = {
                valueNames: [ 'word', 'phonetic-form', 'gloss' ]
            };

            var userList = new List('lang-word-table', options);
        }
        
        //Now map the language subpage marker
        var latLng = new google.maps.LatLng(lat, long);
        console.log(lat, long);
        var icon = {
            url: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/map-marker-icon.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var marker = new google.maps.Marker({
            position: latLng,
            icon: icon,
            map: subMap
        });
        
        //recenter and zoom map
        var newCenter = latLng;
        var newZoom = 6;
        //subMap.setCenter(newCenter);
        subMap.setOptions({"zoom": newZoom, "center" : latLng});
    }
    

    /*******************/
    /*******************/
    /* WORDS */
    /*******************/
    /*******************/
    
    function populateWordsTable(data) {
        var length = data.length/100;
        $("#words .total-pages").text(Math.round(length));
        for (var i = 1; i <= length; i++) {
            $("#words #pagination").append(
                $('<option>').attr("value", i).text(i)
            );    
        }
        populateWordTable(0, 1, data);
    };
    function populateWordTable(start, end, data) {
        //clear word table
        $("#word-table-main tbody").empty();

        //set start and end values for parsin through word data
        //increments of 100's
        start = start * 100;
        end = end * 100;
        console.log(start, end);

        //loop through and get data (can change order by switched <td>'s but remember to switch within the HTML too!)
        for (var i = start; i < end; i++) {
            //get item
            var item = data[i];
            //get properties
            var word = item.OriginalForm.toString();
            var langName = item.StdLanguageName.toString();
            var phoneticForm = item.PhonemicisedIPA.toString();
            var ogGloss = item.OriginalGloss.toString();
            var stdGloss = item.Std_Gloss.toString();
            var source = item.Author.toString();
            var pos = item.OriginalPofSpeech.toString();

            $tr = $("tr");
            var $tr = $('<tr>').append(
                $('<td>').text(word).addClass("word"),
                $('<td>').text(phoneticForm).addClass("phonetic-form"),
                $('<td>').text(ogGloss).addClass("og-gloss"),
                $('<td>').text(langName).addClass("langname"),
                $('<td>').text(pos).addClass("pos"),
                $('<td>').text(source).addClass("source")
            );
            //append to table
            $("#word-table-main .list").append($tr);
        }
        setTableSort();

        function setTableSort() {
            var options = {
                valueNames: [ 'word', 'langname', 'og-gloss' ]
            };

            var userList = new List('word-table', options);   
        }   
    };
    $("#words #pagination").on("change", function(){
        var start = parseInt($("#words #pagination").val(), 10) - 1;
        var end = parseInt($("#words #pagination").val(), 10);
        populateWordTable(start, end, _globalData);
    });
    
    /*******************/
    /*******************/
    /* RECONSTRUCTIONS */
    /*******************/
    /*******************/
    
    /* SAME FUNCTIONS AS FOR WORD PAGE BUT FOR RECONSTRUCTION.
    IN FUTURE VERSIONS STANDARDIZE AND REFACTOR THIS CODE //TODO
    */
    function populateReconstructionsTable(data) {
        /*
            We want the following:
            Form: Reconstruction_Form
            Level: Reconstruction_Level
            Gloss: Reconstruction_Gloss
            Notes: Reconstruction_Notes
        */
        
        var length = data.length/100;
        $("#reconstructions .total-pages").text(Math.round(length));
        for (var i = 1; i <= length; i++) {
            $("#reconstructions #pagination").append(
                $('<option>').attr("value", i).text(i)
            );    
        }
        populateReconstructionTable(0, 1, data);
    };
    function populateReconstructionTable(start, end, data) {
        //clear word table
        $("#reconstructions-table-main tbody").empty();

        //set start and end values for parsin through word data
        //increments of 100's
        start = start * 100;
        end = end * 100;

        //loop through and get data (can change order by switched <td>'s but remember to switch within the HTML too!)
        for (var i = start; i < end; i++) {
            //get item
            var item = data[i];
            //get properties
            var form = item.Reconstruction_Form.toString();
            var level = item.Reconstruction_Level.toString();
            var gloss = item.Reconstruction_Gloss.toString();
            var notes = item.Reconstruction_Notes.toString();

            $tr = $("tr");
            var $tr = $('<tr>').append(
                $('<td>').text(form).addClass("form"),
                $('<td>').text(level).addClass("level"),
                $('<td>').text(gloss).addClass("gloss"),
                $('<td>').text(notes).addClass("notes")
            );
            //append to table
            $("#reconstructions-table-main .list").append($tr);
        }
        setTableSort();

        function setTableSort() {
            var options = {
                valueNames: [ 'form', 'level', 'gloss' ]
            };

            var userList = new List('reconstructions-table', options);   
        }   
    };
    $("#reconstructions #pagination").on("change", function(){
        var start = parseInt($("#reconstructions #pagination").val(), 10) - 1;
        var end = parseInt($("#reconstructions #pagination").val(), 10);
        populateReconstructionTable(start, end, _globalData);
    });
});
