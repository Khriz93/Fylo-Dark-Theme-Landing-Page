const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#error-message");

form.addEventListener("submit", function(event)
{
    event.preventDefault();
    let formIsValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value.trim()))
    {
        emailInput.classList.add("error");
        emailError.classList.add("active");
        formIsValid = false;
    }
    else
    {
        emailInput.classList.remove("error");
        emailError.classList.remove("active");
    }
});