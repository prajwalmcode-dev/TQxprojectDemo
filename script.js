// JavaScript to hide/show navbar on scroll
let prevScrollPos = window.scrollY; // Store the initial scroll position
let navbar = document.getElementById("navbar");

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    // If user scrolls down, hide the navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.style.top = "-300px"; // Adjust based on your navbar height
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }
    prevScrollPos = currentScrollPos;
}


// Choosing the Best Method
// window.scrollY with onscroll or addEventListener:

// Best for: Simplicity and compatibility with most browsers.
// Limitations: This method may be less efficient for long pages with a lot of content, as it triggers on every scroll event.


let moreMenu = document.getElementById('moreMenu');
let more = document.getElementById('more');
let moreContent = document.getElementById('moreContent');
// let width = document.getElementsByName('width');
let count = 0;

moreContent.remove();

moreMenu.addEventListener('click', function () {
    
    console.log(count);
    count = count + 1;
    console.log(count);

    
    if (count % 2 == 0) {
        // moreContent.style.transition = "all 3s linear";
        moreContent.remove();
        console.log("count in if: " + count);
    }
    else {
        // moreContent.style.transition = "all 3s linear";
        more.appendChild(moreContent);
        console.log("count in else: " + count);
    }

});