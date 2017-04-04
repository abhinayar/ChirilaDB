//ChirilaDB Javascript
//By Abhi Nayar, Yale 2018
//http://www.linkedin.com/in/abhinayar

//For inquiries please contact author
/*Dependencies:
-jQuery
*/

//Makes sure jQuery is OK
$.noConflict;
//Ready function
$(document).ready(function(){    
    //Logo link 
    $(".sidebar .top-left").click(function() {
        window.location.href = '../index.html'; 
    });
});