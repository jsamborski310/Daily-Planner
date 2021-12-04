var container = document.getElementById("container");

var hour;

var tr;
var tdTime;
var tdInput;
var tdTextArea;
var tdButtonArea;
var tdButton;
var savingButton;

var variable;
var storedValue;

var entry;
var time;

//////////////////////////////
// Displays Current Day.

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
        container.appendChild(tr);
        tr.setAttribute("data-hour", hour);

      

        // Time --------------------------
        tdTime = document.createElement('td');
        tr.appendChild(tdTime);

       

        // Converts time from Military to Standard.
        tdTime.textContent = moment(hour, 'hour').format('hh:00 a');

       

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

         $(tdButton).click(saveEntry);

      
    // Past, Present, Future --------------------------

        pointInTime();

  
    // Displays Stored Entries --------------------------

        variable = hour.toString();
        storedValue = localStorage.getItem(variable);


        if(storedValue) {
        tdTextArea.textContent = storedValue; 
        }

    }

} 

getTime();


///////////////////////////////////
// Applies background color depending on Past, Present, Future

function pointInTime() {


    if(tr.dataset.hour == moment().hour()) {
        console.log("Testing: equal");
        tdInput.setAttribute("class", "present");;
         
    }
    else if(tr.dataset.hour >= moment().hour() ) {
        console.log("Testing: Future");
         tdInput.setAttribute("class", "future");
    }
    else {
        console.log("Testing: Past");
        tdInput.setAttribute("class", "past");
        
    }

}



////////////////////////////////////
// Saving


function saveEntry(event) {
 
    event.preventDefault();

    console.log('target', event.currentTarget);

    entry = event.currentTarget.parentElement.previousElementSibling.firstChild.value;

    time = event.currentTarget.parentElement.parentElement.dataset.hour;


    localStorage.setItem(time, entry);
   

  };

