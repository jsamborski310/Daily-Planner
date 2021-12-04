//////////////////////////////
// Variables

// Getting Elements ---------
var table = document.getElementById("table");


// Hour ---------
var hour;

// Creating the Form and Buttons ---------
var tr;
var tdTime;
var tdInput;
var tdTextArea;
var tdButtonArea;
var tdButton;
var savingButton;

// Storing  ---------
var variable;
var storedValue;
var entry;
var time;

//////////////////////////////
// Displays Current Day in Jumbotron.

function beginTime() {

    setInterval(function() {

  var today = moment();
  $("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

    }, 1000);
}
beginTime();


//////////////////////////////
// Gets time.

function getTime() {

  
    for (hour = 9; hour < 19; hour++) {
        
       

    // Row --------------------------
        tr = document.createElement('tr');
        table.appendChild(tr);
        tr.setAttribute("data-hour", hour);

      

    // Time --------------------------
        tdTime = document.createElement('td');
        tr.appendChild(tdTime);
        
    // Converts time from Military to Standard.
        tdTime.textContent = moment(hour, 'hour').format('hh:00 a');

        tdTime.setAttribute("class", "timeOfDay");
       

    // Input --------------------------

        tdInput = document.createElement('td');
        tr.appendChild(tdInput);
       
        tdTextArea = document.createElement("textarea");
        
        tdInput.appendChild(tdTextArea);

       

    // Button --------------------------

        tdButtonArea = $('<td>');
        $(tr).append(tdButtonArea);

        tdButton = $('<button>');
        $(tdButton).html("<i class='far fa-save'></i>");

        $(tdButton).addClass("savingButton");

        $(tdButtonArea).append(tdButton);

        savingButton = $('.savingButton');

        
    // Event Listener
        // Placing it within the loop, ties it to the specific row.
         $(tdButton).click(saveEntry);

      
    // Calling Past, Present, Future Function --------------------------
        // Placing within the loop, reads the time for each row.
        pointInTime();

  
    // Displays Stored Entries --------------------------
        // Stringified hour to be read by local storage. 
        variable = hour.toString();

        // Getting stored entries to display.
        storedValue = localStorage.getItem(variable);

        // If user enters text, it's saved to the corresponding row. 
        if(storedValue) {
        tdTextArea.textContent = storedValue; 
        }

    }

} 

getTime();


///////////////////////////////////
// Applies background color depending on Past, Present, Future.

function pointInTime() {


    if(tr.dataset.hour == moment().hour()) {
        console.log("Testing: equal");
        tdInput.setAttribute("class", "present tdInput");;
         
    }
    else if(tr.dataset.hour >= moment().hour() ) {
        console.log("Testing: Future");
         tdInput.setAttribute("class", "future tdInput");
    }
    else {
        console.log("Testing: Past");
        tdInput.setAttribute("class", "past tdInput");
        
    }

}


////////////////////////////////////
// Saving to local storage.


function saveEntry(event) {
 
    event.preventDefault();

    // Targeting the text input.
    entry = event.currentTarget.parentElement.previousElementSibling.firstChild.value;

    time = event.currentTarget.parentElement.parentElement.dataset.hour;

    localStorage.setItem(time, entry);
   

  };

