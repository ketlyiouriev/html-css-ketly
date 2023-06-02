//function about_accordion() {
    const accordion_elements = document.getElementsByClassName("accordion");
    console.log(accordion_elements);
    console.log(accordion_elements[1]);

    accordion_elements.forEach((accordion_element) => {
        accordion_element.addEventListener("click", () => {
            if (accordion_element.classList.contains("is-open")) {
                accordion_element.classList.remove("is-open");
            }
            else {
                const accordion_elements_open = document.querySelectorAll(".is-open");
                accordion_elements_open.forEach((accordion_element_open) => {
                    accordion_element_open.classList.remove("is-open");
                });
                accordion_element.classList.add("is-open");
            }
        });
    });
//}

/*window.onload = about_accordion;*/


const login_form = document.getElementsByTagName("form");
console.log(login_form);
console.log(login_form[0]);

login_form[0].addEventListener("submit", (e) => {
    e.preventDefault();

    const first_name = document.getElementById("fname");
    const email = document.getElementById("email");

    if (first_name.value == "" || email.value == "") {
        window.alert("Proovi uuesti!");
    } else {
        window.alert("Küsimustik edukalt täidetud!");
    }
});

/*function submit_form() {
    const first_name = document.getElementById("fname");
    const password = document.getElementById("password");

    if (username.value == "" || password.value == "") {
        alert("Proovi uuesti!");
    } else {
        alert("Küsimustik edukalt täidetud!");
    }
};*/