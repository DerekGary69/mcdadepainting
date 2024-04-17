var form = document.querySelector('#contactform');
form.addEventListener('submit', async function(event) {
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;

    if (email === '' && phone === '') {
        alert('Please enter an email address or a phone number.');
        event.preventDefault();
    } else {
        event.preventDefault();

        var formData = new URLSearchParams(new FormData(form));

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                body: formData
            });
            const text = await response.text();
            if (text === 'Success') {
                form.reset();
                document.querySelector('#messagestatus').textContent = "Your message has been sent. We'll get back to you as soon as possible.";
            } else {
                document.querySelector('#messagestatus').textContent = "There was an error sending your message. Please contact us directly.";
            }
        } catch (error) {
            console.error(error);
        }
    }
});


