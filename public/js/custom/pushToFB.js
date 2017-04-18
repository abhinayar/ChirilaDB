var firebase = new Firebase('https://chiriladb-1487143035648.firebaseio.com/');
var _global_data = null;

$(document).ready(function(){
  $.ajax({
     type: "GET",
     url: "CSV/30-37.csv",
     dataType: "text",
     success: function(data) {
       console.log("AJAX GET success") 
       handleCSV(data);
     },
     error: function(er) {
       console.log("AJAX GET error");
       console.log(er);
     }
  });
  //Handle CSV function
  function handleCSV(csv_data) {
    var time = new Date();
    console.log("Parsing data...", time);
    var data = [];
    Papa.parse(csv_data, {
      worker: true,
      header: true,
      dynamicTyping: false,
      chunk: function(results, parser) {
        console.log("parsing...");
        //console.log("Row:", row.data);
        data.push(results.data);
      },
      complete: function() {
        console.log("All done!", time);
        _global_data = data;
        console.log(_global_data);
        //firebase.child("db0").remove();
        firebase.push({'db3' : _global_data[0]});
      }
    });
  }
});
