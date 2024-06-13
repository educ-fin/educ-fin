document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour basculer la visibilité des listes déroulantes
    function toggleDropdown(id) {
        const element = document.getElementById(id);
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    // Rendre la fonction accessible globalement
    window.toggleDropdown = toggleDropdown;
});
