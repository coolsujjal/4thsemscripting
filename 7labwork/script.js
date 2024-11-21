
const form = document.querySelector('form');
form.addEventListener('mouseenter',()=>{
    form.style.backgroundColor = 'red';
});

const participants=[];
function registername(event){
    event.preventDefault();

    if(!validateform()){
        return;
    }
    
    const name = document.getElementById('name');
    const nameInput = name.value.trim();
    if(name){
        participants.push(nameInput);
        name.value = '';
        displaynames();
    }else{
        console.log("Name cannot be mt");
    }
}



function displaynames() {

    const names = document.getElementById('names');
    names.innerHTML = '';
    participants.forEach(participant => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
        names.appendChild(listItem);
    });
}


function validateform() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const result = document.getElementById('validationResult');
    if(name.value.trim() === '' || email.value.trim() === '') {
        // alert('Please enter both name and email.');
        result.textContent = "please enter a valid contents";
        result.style.color = 'red';
        return false;
    } else {
        // alert('Registration successful!');
        result.textContent = "Registration successful!";
        result.style.color = 'blue';
        return true;
    }
}



function showTooltip(inputField, tooltip) {
    tooltip.style.display = 'block';
    // tooltip.style.left = inputField.offsetLeft + 'px';
    // tooltip.style.top = (inputField.offsetTop + inputField.offsetHeight + 10) + 'px';

    const rect = inputField.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top + rect.height + 10) + 'px';
}
function hideTooltip(tooltip) {
    // Hide tooltip
    tooltip.style.display = "none";
}

//Username field event listeners
const usernameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const usernameTooltip = document.getElementById('usernameTooltip');
const passwordTooltip = document.getElementById('passwordTooltip');
usernameInput.addEventListener('focus', () => {
    showTooltip(usernameInput, usernameTooltip);
});
usernameInput.addEventListener('blur', () => {
    hideTooltip(usernameTooltip);
});
passwordInput.addEventListener('focus', () => {
    showTooltip(passwordInput, passwordTooltip);
});
passwordInput.addEventListener('blur', () => {
    hideTooltip(passwordTooltip);
});