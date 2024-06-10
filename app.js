let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });
});


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '') {
        alert('Please enter your name.');
        return false;
    }

    if (email.trim() == '') {
        alert('Please enter your email address.');
        return false;
    }

    if (phone.trim() == '') {
        alert('Please enter your phone number.');
        return false;
    }

    if (subject.trim() == '') {
        alert('Please enter the subject.');
        return false;
    }

    if (message.trim() == '') {
        alert('Please enter your message.');
        return false;
    }

    return true;
}

// Form Submit to Email

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    if (validateForm()) {
        const formData = new FormData(this); 

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Show success message to the user
                alert('Form submitted successfully!');
                // Reset the form
                document.getElementById('contactForm').reset();
            } else {
                // Show error message to the user
                alert('Error submitting form. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form. Please try again later.');
        });
    }
});


