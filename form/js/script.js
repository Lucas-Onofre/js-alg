const form = document.getElementById('contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    clearErrors()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    validateForm(data)
})

function validateForm(data) {
    const { name, email, subject, message } = data

    const spans = document.querySelectorAll('span.error')
    spans.forEach(span => span.remove())

    if (!name) {
        appendError('name')
    }

    if (!email) {
        appendError('email')
    }

    if (!subject) {
        appendError('subject')
    }

    if (!message) {
        appendError('message')
    }

    if (name && email && subject && message) {
        clearErrors()
        console.log(data)

        alert('Your message has been sent!')
    }
}

function appendError(inputName) {
    const input = document.getElementById(inputName)
    const span = document.createElement('span')

    span.classList.add('error')
    span.innerText = `Please enter your ${inputName}`
    input.parentNode.appendChild(span)
}

function clearErrors() {
    const spans = document.querySelectorAll('span.error')
    spans.forEach(span => span.remove())
}