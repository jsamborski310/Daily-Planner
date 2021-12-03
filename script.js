

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

var hour;

var container = document.getElementById("container");

var tr;

var tdTime;

var tdInput;

var tdTextArea;

var tdButtonArea;

var tdButton;

var savingButton;

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
        tdTime.textContent = moment().add(hour, 'hour').format('hh:00 a');
        tdTime.textContent = moment(hour, 'hour').format('hh:00 a');



        // Input --------------------------
        tdInput = document.createElement('td');
        tr.appendChild(tdInput);
       

        tdTextArea = document.createElement("textarea");
        tdInput.appendChild(tdTextArea);
        //if(localStorage data exists) {
            //textContent = time
        //}


        // Button --------------------------
        // tdButtonArea = document.createElement('td');
        // tr.appendChild(tdButtonArea);

        // tdButton = document.createElement("button");

        // tdButtonArea.appendChild(tdButton);
        // tdButton.setAttribute("class", "savingButton");
        
        // tdButton.textContent = "<i class='far fa-save'>";

        //  savingButton = document.querySelector(".savingButton");

         //-------------------------//

        tdButtonArea = $('<td>');
        $(tr).append(tdButtonArea);

        tdButton = `
        <button><i class='far fa-save'></i></button>`;

        $(tdButton).hasClass("savingButton");

        $(tdButtonArea).append(tdButton);

        savingButton = $('.savingButton');

        pointInTime();

    } 
}
getTime();



///////////////////////////////////

// Do I need to pull this into the loop? Or call the above function here?
// Am I able to target tdInput or do something with bubbling or capturing since the data-attribute is in the row?
// Does the data attribute need to be assigned to the button as well? 
// More info on forEach.
// Confirm I'll be storing tdTextArea in local storage.
// Currently if statement only displays one option. If this, then not that. Need a styling for all three cases: Past, Present, Future. 
// For save button, event listener for currentTarget?

///////////////////////////////////

function pointInTime() {


    if(tr.dataset.hour == moment().hour()) {
        console.log("Testing: equal");
         tdInput.style.background = "black";
    }
    else if( tr.dataset.hour >= moment().hour() ) {
        console.log("Testing: Future");
         tdInput.setAttribute("style", "background-color:red;");
    }
    else {
        console.log("Testing: Past");
        tdInput.setAttribute("style", "background-color:blue;");
    }

}



////////////////////////////////////
// SAVING

var entry;
var time;

function saveEntry(event) {
 
    event.preventDefault();

    entry = event.target.parentElement.previousElementSibling.firstChild.value;

    time = event.target.parentElement.parentElement.dataset.hour;


    localStorage.setItem(time, entry)
   

  };

$(savingButton).click(saveEntry);
// savingButton.addEventListener("click", saveEntry); 



///////////////////////////////////////
// DISPLAYING


function showEntries() {

    // Gets user inputs from local storage.

    // plans = localStorage.getItem(time);

     var plans = localStorage.getItem(entry);
    
         plans.appendChild(tdTextArea);
    
     // tdInput = JSON.parse(localStorage.getItem("user_input")) || [];
    // time(localStorage.getItem(entry));

    // Loops through inputs in local storage, to get a count on how many exist.
  

    // time.append(tdTextArea);

        // plans.appendChild(time, entry);
   }

showEntries();



/////////////////////////////////////////////////////////
// TESTING

//  console.log(tdTextArea.textContent);
//  console.log(event.target.parentNode.previousElementSibling.firstChild.value);

 // Gets Text Area Text
//  console.log(event.target.parentElement.previousElementSibling.firstChild.value);
//  console.log(event.target.parentElement.parentElement.dataset.hour);

// // Gives the current hour. Military time.
// console.log("Moment / Number:" + moment().hour());
// console.log(moment().hour());
// console.log(hour);

// // Reads the hour as a number. 
// if(moment().hour() > 10) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// // Formats the hour as standard time.
//  console.log("Changing format: " + moment().format('hh:mm a'));



