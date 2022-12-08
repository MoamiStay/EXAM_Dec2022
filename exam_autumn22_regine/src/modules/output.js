// write output to page

export function hi() {
    console.log("hi");
}

// copypasted code from CA2 FED2
const getUser = document.querySelector("input#validationDefaultUsername");
const getEmail = document.querySelector("input#validationDefaultEmail");
const getPass = document.querySelector("input#validationDefault01");
const submitButton = document.querySelector("button#submit-user");

const userError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passError = document.querySelector("#password-error");
const confirmPass = document.querySelector("input#validationDefault02");
const outMsg = document.querySelector("#out-message");