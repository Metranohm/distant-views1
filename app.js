// Get all the links with class "page-scroll"
var links = document.querySelectorAll('.page-scroll');

// Iterate through the links and add a click event listener to each one
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        // Prevent the default behavior of the link
        e.preventDefault();
        
        // Get the target element's id from the href attribute
        var target = this.getAttribute('href');
        
        // Use the scrollIntoView method to smoothly scroll to the target element
        document.querySelector(target).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// Form validation function
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("All fields are required");
        return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Invalid email address");
        return false;
    }
    return true;
}
