

//////////////////////////////
// Displays Current Day.

function beginTime() {

    setInterval(function() {

  var today = moment();
  $("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

    }, 1000);
}
beginTime();


//////////////////////////


var container = document.getElementById("container");


// var standardTime = moment().format('hh:mm a');
// console.log("Standard Time :" + standardTime)

// moment("HH").format('hh:mm a');

// var hours = moment().hour();

// var hours = [];

 

function getTime() {

  
    for (hour = 9; hour < 19; hour++) {
        

        // Row --------------------------
        var tr = document.createElement('tr');
        container.appendChild(tr);



        // Time --------------------------
        var tdTime = document.createElement('td');
        tr.appendChild(tdTime);

        // Set ID. Subtract 1 from hour to correct time difference.
        tdTime.setAttribute("id", "hour" + (hour-1));


        // Converts time from Military to Standard.
        tdTime.textContent = moment().add(hour, 'hour').format('hh:00 a');



        // Input --------------------------
        var tdInput = document.createElement('td');
        tr.appendChild(tdInput);
        tdInput.setAttribute("style", "background-color: pink;");
        tdInput.textContent = "text goes here";


        // Button --------------------------
        var tdButton = document.createElement('td');
        tr.appendChild(tdButton);
        tdButton.textContent = "button goes here";

    }
 

}

getTime();



/////////////////////////////////////////////////////////
// TESTING

// Gives the current hour. Military time.
console.log("Moment / Number:" + moment().hour());


// Reads the hour as a number. 
if(moment().hour() > 10) {
    console.log("true");
}
else {
    console.log("false");
}


// Formats the hour as standard time.
 console.log("Changing format: " + moment().format('hh:mm a'));


