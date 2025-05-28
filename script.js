

function sendEmail(){
    console.log("email param");
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    console.log(params)

    emailjs.send("service_ynvdb8a","template_na9r2b9", params).then(alert("Email Sent!!"))
}
