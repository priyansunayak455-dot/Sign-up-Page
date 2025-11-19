const submitBtn = document.querySelector('.form button');
const isSignupPage = document.querySelector('.fn');

if (submitBtn) {
    if (isSignupPage) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const name = document.querySelector('.fn input').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.querySelector('.cps input').value;

            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }

            alert('Account created successfully!');
        });

    } else {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email.trim() && password.trim()) {
                alert('Login successful!');
            } else {
                alert('Please fill in both fields.');
            }
        });
    }
}