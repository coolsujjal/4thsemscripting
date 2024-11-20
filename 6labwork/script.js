console.log(document.body.style.backgroundColor);
function calculateSum() {
    const numbers = document.getElementById("numbersInput");
    const button1 = document.getElementById("button1");

    
    const numbersArray = numbers.value.split(",").map(Number);
    console.log(numbersArray);
    let sum = 0;
numbersArray.forEach((number)=>{
    sum += number;
})
document.getElementById('sum').textContent = `The sum is just ${sum}`;

const now = new Date();

document.getElementById('dateTime').textContent = `calculation was done at : ${now}`;
document.body.style.backgroundColor = 'red';
console.log(document.body.style.backgroundColor);

}

// Variables to manage the new window
let newWindow = null;

// Function to open a new window
function openNewWindow() {
    if (newWindow && !newWindow.closed) {
        alert("Window is already open!");
        return;
    }
    newWindow = window.open("", "_blank", "width=400,height=300");
    newWindow.document.write("<h1>New Window</h1>");
    newWindow.document.write("<p>This is a new window opened using JavaScript.</p>");
}

// Function to close the new window
function closeNewWindow() {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
    } else {
        alert("No window to close!");
    }
}