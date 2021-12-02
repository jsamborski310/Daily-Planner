

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



function getTime() {

  
    for (hour = 9; hour < 19; hour++) {
        
        

        // Row --------------------------
        let tr = document.createElement('tr');
        container.appendChild(tr);
        tr.setAttribute("data-hour", hour);



        // Time --------------------------
        let tdTime = document.createElement('td');
        tr.appendChild(tdTime);

    


        // Converts time from Military to Standard.
        // tdTime.textContent = moment().add(hour, 'hour').format('hh:00 a');
        tdTime.textContent = moment(hour, 'hour').format('hh:00 a');



        // Input --------------------------
        let tdInput = document.createElement('td');
        tr.appendChild(tdInput);
       

        let tdTextArea = document.createElement("textarea");
        tdInput.appendChild(tdTextArea);


        // Button --------------------------
        let tdButtonArea = document.createElement('td');
        tr.appendChild(tdButtonArea);

        let tdButton = document.createElement("button");
        tdButtonArea.appendChild(tdButton);
        tdButton.textContent = "Submit"

    }
}
getTime();



//////////////
// Do I need to pull this into the loop? Or call the above function here?

function pointInTime() {


    if(moment().hour() === hour) {
        console.log("Testing: equal");
        //  tdInput.style.background = "black";
    }
    else if( moment().hour() >= hour ) {
        console.log("Testing: Past");
        //  tdInput.setAttribute("style", "background-color:red;");
    }
    else {
        console.log("Testing: Future");
        // tdInput.setAttribute("style", "background-color:#ffffff;");
    }

}
console.log(moment().hour());
console.log(hour);




pointInTime();



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


