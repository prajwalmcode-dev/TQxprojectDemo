// JavaScript to hide/show navbar on scroll
let prevScrollPos = window.scrollY; // Store the initial scroll position
let navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    // If user scrolls down, hide the navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.style.top = "-106.5px"; // Adjust based on your navbar height
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }
    prevScrollPos = currentScrollPos;
}


// Choosing the Best Method
// window.scrollY with onscroll or addEventListener:

// Best for: Simplicity and compatibility with most browsers.
// Limitations: This method may be less efficient for long pages with a lot of content, as it triggers on every scroll event.
