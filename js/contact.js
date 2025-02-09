document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // EmailJS configuration
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Your Name', // Replace with your name
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            submitBtn.textContent = 'Message Sent!';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
            
            // Clear form
            document.getElementById('contact-form').reset();
            
            // Show success message
            alert('Thank you! Your message has been sent.');
        }, function(error) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS error:', error);
        });
});
