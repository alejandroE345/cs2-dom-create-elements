console.log("Script Started");

// Function for main program
function start() {
    console.log("click");
    let heading = document.createElement("h1");
    heading.innerText = "Attendance";
    // Setting styles
    heading.style.color = "whitesmoke";
    heading.style.fontFamily = "fantasy";
    heading.style.backgroundColor = "darkblue";
    // Adding the element to the page
    document.body.appendChild(heading);
    // Aquiring the user's name to add to the attendance list
    let userName = prompt("What is your name?");
    let userLastName = prompt("What is your last name?");
    console.log(userName);
    console.log(userLastName);
    addName(userLastName, userName);
    addSeparator();
    userName = prompt("What is your name?");
    userLastName = prompt();
}
// Function for the 1st exercise
    function addName(lastName, firstName) {
        let name = document.createElement("h2");
        name.innerText = lastName + firstName;
        document.body.appendChild(name);
}

// Function for 3rd exercise
    function addSeparator() {
        let separator = document.createElement("hr");
        document.body.appendChild(separator);
    }


