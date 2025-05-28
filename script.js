

// function sendEmail(){
//     console.log("email param");
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     }

//     console.log(params)

//     emailjs.send("service_ynvdb8a","template_na9r2b9", params).then(alert("Email Sent!!"))
// }

const btn = document.getElementById("button")

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault()

  btn.value = "Sending..."

  const serviceID = "service_ynvdb8a"
  const templateID = "template_na9r2b9"

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email"
      //alert("Sent!");
      window.location.hash = "#popup2";
    },
    (err) => {
      btn.value = "Send Email"
      alert(JSON.stringify(err))
    },
  )
})
