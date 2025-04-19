document.addEventListener("DOMContentLoaded", function () {
    const roleSelect = document.getElementById("Role");
    const educationBox = document.getElementById("education-box");
  

    roleSelect.addEventListener("change", function () {
        const selectedRole = roleSelect.value;

        // Cacher les champs par défaut
        educationBox.style.display = "none";

        // Afficher Education Establishment pour Student et Professor
        if (selectedRole === "Student" || selectedRole === "Professor") {
            educationBox.style.display = "block";
        } 
       
    });
});
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var selectedRole = document.getElementById("Role").value;

    if (selectedRole === "Student") {
        window.location.href = "student1.html"; 
    } else {
        window.location.href = "driver.html";  
    }
});