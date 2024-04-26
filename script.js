const buttonSubmit = document.querySelector("#subscribe");
const dismissButton = document.querySelector("#dismiss");
const containerElement = document.querySelector(".container");
const successButton = document.querySelector(".success-message-desktop");
const inputElement = document.querySelector("#email");
const userEmailElement = document.getElementById("userEmail");


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

buttonSubmit.addEventListener("click", () => {
    const email = inputElement.value;
    const isValid = validateEmail(email);
    if (isValid) {
        containerElement.classList.add("hide");
        successButton.classList.remove("hide");
        document.querySelector("#email-error").innerHTML = "";
        userEmailElement.textContent = email;
    } else {
        document.querySelector("#email-error").innerHTML = "Valid email required";
        document.querySelector("#email").style.border = "1px solid Red";
    }
    setTimeout(() => {
        document.querySelector("#email-error").innerHTML = "";
        document.querySelector("#email").style.border = "";
        inputElement.value = "";
    }, 2000);
});
dismissButton.addEventListener("click", () => {
    containerElement.classList.remove("hide");
    successButton.classList.add("hide");
    inputElement.value = "";
    inputElement.classList.remove("active");
});
inputElement.addEventListener("input", () => {
    const emailValue = inputElement.value;
    if (emailValue) {
      inputElement.style.border = "1px solid green";
    } else {
      inputElement.style.border = ""; // Reset to default border color
    }
});