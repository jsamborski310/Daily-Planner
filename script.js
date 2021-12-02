

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
        tdButtonArea = document.createElement('td');
        tr.appendChild(tdButtonArea);

        tdButton = document.createElement("button");
        tdButtonArea.appendChild(tdButton);
        tdButton.setAttribute("class", "savingButton");
        
        savingButton = document.querySelector(".savingButton");
        
        tdButton.textContent = "Submit";

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
// TESTING SAVING



function saveEntry(event) {
 
    
    event.preventDefault();
    var entry = event.target.parentNode.previousElementSibling.firstChild.value;
    var time = //pulling from the dataset
    //event.target.parentNode.parentNode.dataset

    // Pushes each new initial and score to the end of the highScores array.
    // tdInput.push(tdTextArea);

    // Stores scores.
    // localStorage.setItem("user_input", JSON.stringify(entry, time));
    localStorage.setItem(time, entry)
   
 console.log(tdTextArea.textContent);
 console.log(event.target.parentNode.previousElementSibling.firstChild.value);
  };

// Save scores function is executed on the click of this button.
savingButton.addEventListener("click", saveEntry); 

function showEntries() {

    // Gets user inputs from local storage.
    tdInput = JSON.parse(localStorage.getItem("user_input")) || [];
    //whateverCodethattellsitwhichtextareatogoto.value(localStroage.getItem(time)) = 

    // Loops through inputs in local storage, to get a count on how many exist.
    for (var i = 0; i < tdInput.length; i++) {

        tdInput.append(tdTextArea);
   }
}

showEntries();



/////////////////////////////////////////////////////////
// TESTING

// Gives the current hour. Military time.
console.log("Moment / Number:" + moment().hour());
console.log(moment().hour());
console.log(hour);

// Reads the hour as a number. 
if(moment().hour() > 10) {
    console.log("true");
}
else {
    console.log("false");
}

// Formats the hour as standard time.
 console.log("Changing format: " + moment().format('hh:mm a'));



