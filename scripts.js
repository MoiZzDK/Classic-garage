// You can add interactivity here, such as pausing the animation on hover.
document.querySelector('.animated-box').addEventListener('mouseover', function() {
    this.style.animationPlayState = 'paused';
});

document.querySelector('.animated-box').addEventListener('mouseout', function() {
    this.style.animationPlayState = 'running';
});
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');

        // Add the fade-out class to the body
        document.body.classList.add('fade-out');

        // Wait for the animation to complete (0.5s) before navigating
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
});
window.onload = () => {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}
// Function to switch between sections
function showSection(sectionId) {
    // Get both sections
    var autoexpertenSection = document.getElementById('autoexperten-section');
    var classicGarageSection = document.getElementById('classic-garage-section');
    
    // Hide both sections initially (remove active class)
    autoexpertenSection.classList.remove('active');
    classicGarageSection.classList.remove('active');

    // Use setTimeout to create a delay for sliding out
    setTimeout(function() {
        // Hide sections completely after sliding out
        autoexpertenSection.style.display = 'none';
        classicGarageSection.style.display = 'none';

        // Show the selected section with sliding in animation
        var selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
        
        // Trigger the slide-in effect after a small delay
        setTimeout(function() {
            selectedSection.classList.add('active');
        }, 50);
    }, 500); // Matches the CSS transition time
}

// Event listeners for logos
document.getElementById('autoexperten-logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('autoexperten-section'); // Show Autoexperten section
});

document.getElementById('classic-garage-logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('classic-garage-section'); // Show Classic Garage section
});

// Dropdown menu links
document.getElementById('autoexperten-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('autoexperten-section'); // Show Autoexperten section
});

document.getElementById('classic-garage-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('classic-garage-section'); // Show Classic Garage section
});

// Show the Autoexperten section by default
showSection('autoexperten-section');
// Function to switch between sections with sliding animation
function showSection(sectionId) {
    // Get both sections
    var autoexpertenSection = document.getElementById('autoexperten-section');
    var classicGarageSection = document.getElementById('classic-garage-section');
    
    // Determine which section is currently active
    var activeSection = autoexpertenSection.classList.contains('active') ? autoexpertenSection : classicGarageSection;
    var nextSection = document.getElementById(sectionId);
    
    if (activeSection !== nextSection) {
        // Slide out the active section to the left
        activeSection.classList.remove('active');
        activeSection.classList.add('slide-left');

        // Prepare the next section (hidden initially, sliding in from the right)
        nextSection.style.display = 'block';
        nextSection.classList.add('slide-right');

        // Wait for the current section to slide out, then bring in the next section
        setTimeout(function() {
            // Reset the sliding out section
            activeSection.style.display = 'none';
            activeSection.classList.remove('slide-left');

            // Remove the sliding right class and activate the new section
            nextSection.classList.remove('slide-right');
            nextSection.classList.add('active');
        }, 1000); // Matches the transition time of 1 second
    }
}

// Event listeners for logos
document.getElementById('autoexperten-logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('autoexperten-section'); // Show Autoexperten section
});

document.getElementById('classic-garage-logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('classic-garage-section'); // Show Classic Garage section
});

// Dropdown menu links
document.getElementById('autoexperten-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('autoexperten-section'); // Show Autoexperten section
});

document.getElementById('classic-garage-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('classic-garage-section'); // Show Classic Garage section
});

// Show the Autoexperten section by default
showSection('autoexperten-section');

document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.getElementById("burger-btn").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Grab the burger button and dropdown content
const burgerBtn = document.getElementById("burger-btn");
const dropdownContent = document.getElementById("dropdown-content");

// Toggle the 'active' class on click
burgerBtn.addEventListener("click", function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
})

