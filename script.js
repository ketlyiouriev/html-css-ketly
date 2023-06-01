var accordion_elements = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion_elements.length; i++) {
    accordion_elements[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
  });
}