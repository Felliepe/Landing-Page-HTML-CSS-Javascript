// Gravar dados no localStorage
const form = document.querySelector(".form-group")

form.addEventListener("submit", (e) => {
    e.preventDefault() // "preventDefault" 

    const nameInput = document.querySelector("#name")
    const emailInput = document.querySelector("#email")
    const phoneInput = document.querySelector("#phone")
    const interestInput = document.querySelector("#interest")

    localStorage.setItem("name", nameInput.value)
    localStorage.setItem("email", emailInput.value)
    localStorage.setItem("phone", phoneInput.value)
    localStorage.setItem("interest", interestInput.value)

    nameInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
})