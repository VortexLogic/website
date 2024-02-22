const form = document.getElementById('contact_form');
const spinner = document.getElementById('spinner');

function setSpinner(isVisible) {
    if (isVisible) {
        spinner.classList.remove('hidden');
        spinner.classList.add('inline');
    } else {
        spinner.classList.add('hidden');
        spinner.classList.remove('inline');
    }
}

function setContactMessageStatus(isSuccess) {
    const successText = document.getElementById('contact_success_text');
    const errorText = document.getElementById('contact_error_text');

    if (isSuccess) {
        successText.classList.remove('hidden');
        errorText.classList.add('hidden');
    } else {
        successText.classList.add('hidden');
        errorText.classList.remove('hidden');
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    setSpinner(true);

    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const reqData = {
        name: name,
        company: company,
        email: email,
        message: message,
    };

    const url = form.getAttribute('action');
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqData),
    };
    fetch(url, options)
        .then(response => {
            setSpinner(false);

            if (response.ok) {
                form.reset();
                setContactMessageStatus(true);
            } else {
                setContactMessageStatus(false);
            }
        })
        .catch(_err => {
            setSpinner(false);
            setContactMessageStatus(false);
        });
});
