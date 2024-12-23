document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    let isValid = true;

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Age validation
    const age = document.getElementById("age").value;
    const ageError = document.getElementById("ageError");
    if (!/^\d+$/.test(age) || age < 1 || age > 120) {
        ageError.textContent = "Age must be a number between 1 and 120.";
        isValid = false;
    } else {
        ageError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent =
            "Password must be at least 8 characters, including uppercase, lowercase, number, and special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Zip code validation
    const zip = document.getElementById("zip").value;
    const zipError = document.getElementById("zipError");
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(zip)) {
        zipError.textContent = "Zip code must be in the format 12345 or 12345-6789.";
        isValid = false;
    } else {
        zipError.textContent = "";
    }

    // Terms and conditions validation
    const terms = document.getElementById("terms").checked;
    const termsError = document.getElementById("termsError");
    if (!terms) {
        termsError.textContent = "You must agree to the terms and conditions.";
        isValid = false;
    } else {
        termsError.textContent = "";
    }

    // URL validation
    const url = document.getElementById("url").value;
    const urlError = document.getElementById("urlError");
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-]*)*$/;
    if (url && !urlRegex.test(url)) {
        urlError.textContent = "Invalid URL format.";
        isValid = false;
    } else {
        urlError.textContent = "";
    }

    // Date validation
    const date = document.getElementById("date").value;
    const dateError = document.getElementById("dateError");
    const today = new Date();
    if (date && new Date(date) > today) {
        dateError.textContent = "Date cannot be in the future.";
        isValid = false;
    } else {
        dateError.textContent = "";
    }

    // File size validation
    const file = document.getElementById("file").files[0];
    const fileError = document.getElementById("fileError");
    if (file && file.size > 1048576) { // 1MB = 1048576 bytes
        fileError.textContent = "File size must be less than 1MB.";
        isValid = false;
    } else {
        fileError.textContent = "";
    }

    // Country selection validation
    const country = document.getElementById("country").value;
    const countryError = document.getElementById("countryError");
    if (!country) {
        countryError.textContent = "Please select a country.";
        isValid = false;
    } else {
        countryError.textContent = "";
    }

    // If all validations pass
    if (isValid) {
        alert("Registration successful!");
    }
});
        