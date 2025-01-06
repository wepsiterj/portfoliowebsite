const correctPasswords = {
    section1: "password1",
    section2: "password2",
    section3: "password3"
};

// Function to unlock the password section
function unlockSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'block'; // Show the password input and button
}

// Function to check the entered password and unlock content or redirect
function checkPassword(passwordFieldId, btnId, sectionId, subheadingId, redirectFile) {
    const password = document.getElementById(passwordFieldId).value;
    const correctPassword = correctPasswords[sectionId];

    if (password === correctPassword) {
        // Unlock the content
        document.getElementById(sectionId).style.display = 'block';
        document.getElementById('heading' + sectionId.charAt(sectionId.length - 1)).style.backgroundColor = '#2ecc71'; // Change heading background to green
        
        // Remove blur effect from subheading
        document.getElementById(subheadingId).style.filter = 'none';

        // Disable password field and button
        document.getElementById(passwordFieldId).disabled = true;
        document.getElementById(btnId).disabled = true;

        // Clear input field
        document.getElementById(passwordFieldId).value = '';

        // Redirect to another HTML file (if correct password)
        window.location.href = redirectFile;
    } else {
        // Show an alert if password is incorrect
        alert("Incorrect password, try again!");
    }
}

// whatsapp code //

function openWhatsApp() {
    window.open('https://wa.me/9360857383', '_blank');
}

// finish whatapp code