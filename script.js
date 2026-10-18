const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; 

document.getElementById('signInForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'signin', email: email, password: password })
        });

        const result = await res.json();

        if (result.status === "SUCCESS") {
            alert("साइन इन सफल!");
            window.location.href = "welcome.shtml";
        } else {
            alert(result.message);
        }
    } catch(err) {
        alert("त्रुटि: सर्वर से संपर्क नहीं हो सका।");
    }
});