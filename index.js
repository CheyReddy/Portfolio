var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* media ports */

document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu");
    
    if (!sidemenu) {
        console.log("Element with id 'sidemenu' not found!");
        return;
    }

    function openmenu() {
        sidemenu.style.right = "0"; // Ensure this works
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    // Attach functions globally so they work with onclick attributes
    window.openmenu = openmenu;
    window.closemenu = closemenu;
});

// Form
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").reset();
});