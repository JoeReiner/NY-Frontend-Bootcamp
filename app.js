const form = document.getElementById("myForm");
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //prevent form from submitting right away

    const isValid = validateForm();

    if (isValid) {
        //Perform submission
        console.log("Form submitted successfully");
        form.reset()
        nameError.textContent = "";
        emailError.textContent = "";
    }

    console.log(isValid)

}

// form inpout validation
function validateForm() {
    const nameValue = nameInput.ariaValueMax.trim();
    const emailValue = emailInput.ariaValueMax.trim();
    let isValid = true

    if (nameValue === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (emailValue === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    return isValid;

}