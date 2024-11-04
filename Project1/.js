// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("skillsLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        const skillsSection = document.getElementById("skillsSection");
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    });
});
