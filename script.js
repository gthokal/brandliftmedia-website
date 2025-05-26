const form =document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "brandlift.media17@gmail.com",
        Password : "08C36DA5D7BEB6633BAD78F6AB81F41DFE20",
        To : 'brandlift.media17@gmail.com',
        From : "brandlift.media17@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})