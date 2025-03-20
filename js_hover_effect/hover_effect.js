document.addEventListener("DOMContentLoaded", function() {
    // Log a message to the console to confirm that the DOM is fully loaded and parsed
    console.log("DOM fully loaded and parsed");

    // Select all img elements within elements that have the class 'hero-content' and store them in a NodeList
    const heroContents = document.querySelectorAll('.hero-content img');

    // Iterate over each img element in the NodeList
    heroContents.forEach((img) => {
        // Add an event listener for the 'mouseover' event to each img element
        img.addEventListener('mouseover', function() {
            // When the mouse is over the img element, change the body's background image
            // to the URL of the current img element's src attribute
            document.body.style.setProperty('background-image', `url(${this.src})`, 'important');
        });
    });
});
