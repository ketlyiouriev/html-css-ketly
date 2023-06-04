/* about.html javascript */
const accordion_elements = document.getElementsByClassName("accordion-label");

for (let i = 0; i < accordion_elements.length; i++) {
  accordion_elements[i].addEventListener("click", () => {
    if (accordion_elements[i].classList.contains("is-open")) {
      accordion_elements[i].classList.remove("is-open");
    } else {
      const accordion_elements_open = document.querySelectorAll(".is-open");
      for (let j = 0; j < accordion_elements_open.length; j++) {
        accordion_elements_open[j].classList.remove("is-open");
      }
      accordion_elements[i].classList.add("is-open");
    }
  });
}

/* contact.html javascript */
const login_form = document.getElementsByTagName("form");

login_form[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const first_name = document.getElementById("fname");
  const email = document.getElementById("email");

  if (first_name.value == "" || email.value == "") {
    window.alert("Jätsid mõne kohustusliku välja täitmata! Proovi uuesti!");
    window.location.href = "contact.html";
  } else {
    window.alert("Küsimustik edukalt täidetud!");
    window.location.href = "thankyou.html";
  }
});
