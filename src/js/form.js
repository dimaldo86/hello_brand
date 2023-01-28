const formSubmit = () => {
    const usernameEl = document.querySelector('#name');
    const emailEl = document.querySelector('#email');
    const form = document.querySelector('.form');

    const checkUsername = () => {
        let valid = false;
        const min = 3,
            max = 25;
        const username = usernameEl.value.trim();
        if (!isRequired(username)) {
            showError(usernameEl, 'Naam is verplicht');
        } else if (!isBetween(username.length, min, max)) {
            showError(usernameEl, `De gebruikersnaam moet tussen de tekens ${min} en ${max} liggen`)
        } else {
            showSuccess(usernameEl);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            showError(emailEl, 'E-mail is verplicht');
        } else if (!isEmailValid(email)) {
            showError(emailEl, 'Geef een geldig e-mailadres op')
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    const showError = (input, message) => {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');
        const error = formField.querySelector('.form__err');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        const formField = input.parentElement;
        formField.classList.remove('error');
        formField.classList.add('success');
        const error = formField.querySelector('.form__err');
        error.textContent = '';
    }
    const clearInputs = () => {
        const inputs = form.querySelectorAll('input')
        const text = form.querySelector('textarea')

        setTimeout(() => {
            inputs.forEach(input => {
                input.value = ''
            })

            text.value = ''
        }, 1000)

    };

        const message = {
            loading: 'Laden...',
            success: 'Bedankt! U wordt binnenkort gecontacteerd.',
            failure: 'Er ging iets mis...'
        };

    function serializeForm(formNode) {
        return new FormData(formNode)
    }

    async function sendData(data) {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch('assets/php', {
          method: 'POST',
          body: data,
        })

        return res.text()
      }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);

        const formData = serializeForm(e.target)
        const { status, err } = await sendData(formData)

        if (status === 200) {
            statusMessage.textContent = message.success;
          } else {
            statusMessage.textContent = message.failure
          }

          setTimeout ( () => {
                statusMessage.remove();
            }, 5000);

        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail()

        let isFormValid = isUsernameValid && isEmailValid

        // submit to the server if the form is valid
        // if (isFormValid) {

        // }
        clearInputs()
    });

    form.addEventListener('input', checkValidity);

    function checkValidity(e) {
        switch (e.target.id) {
            case 'name':
                checkUsername();
                break;
            case 'email':
                checkEmail();
                break;
        }
        const formNode = e.target.form
        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail()
        let isFormValid = isUsernameValid && isEmailValid
        formNode.querySelector('.form__btn').disabled = !isFormValid
      }
}

export default formSubmit