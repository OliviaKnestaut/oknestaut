
(function () {
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
// in-memory submissions list
let submissions = [];

const fields = [
    { el: document.getElementById('firstname'), error: document.getElementById('firstname-error'), validate: v => v.trim().length > 0, message: 'First name is required.' },
    { el: document.getElementById('lastname'), error: document.getElementById('lastname-error'), validate: v => v.trim().length > 0, message: 'Last name is required.' },
    { el: document.getElementById('email'), error: document.getElementById('email-error'), validate: v => v.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Please enter a valid email address.' },
    { el: document.getElementById('message'), error: document.getElementById('message-error'), validate: v => v.trim().length >= 10, message: 'Message must be at least 10 characters.' }
];

function showError(fieldObj, text) {
    fieldObj.el.setAttribute('aria-invalid', 'true');
    fieldObj.error.textContent = text;
    fieldObj.error.style.display = 'block';
    fieldObj.el.classList.add('input-error');
}

function clearError(fieldObj) {
    fieldObj.el.removeAttribute('aria-invalid');
    fieldObj.error.textContent = '';
    fieldObj.error.style.display = 'none';
    fieldObj.el.classList.remove('input-error');
}

// live validation on blur/input
fields.forEach(f => {
    f.el.addEventListener('input', function () { if (f.validate(f.el.value)) clearError(f); });
    f.el.addEventListener('blur', function () { if (!f.validate(f.el.value)) showError(f, f.message); else clearError(f); });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';

    let firstInvalid = null;
    fields.forEach(f => {
        if (!f.validate(f.el.value)) {
            showError(f, f.message);
            if (!firstInvalid) firstInvalid = f.el;
        } else {
            clearError(f);
        }
    });

    if (firstInvalid) {
        status.classList.remove('success');
        status.classList.add('error');
        firstInvalid.focus();
        return;
    }

    // collect submission and add to the in-memory list
    const submission = {
        firstname: document.getElementById('firstname').value.trim(),
        lastname: document.getElementById('lastname').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim(),
        submittedAt: new Date().toISOString()
    };
    submissions.push(submission);
    console.log('submissions', submissions);

    // Simulate success (replace with server call as needed)
    status.classList.remove('error');
    status.classList.add('success');
    status.textContent = 'Thanks — your message has been sent.';
    form.reset();
    fields.forEach(clearError);
    form.querySelector('input, textarea').focus();
});
})();