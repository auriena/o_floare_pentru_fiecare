emailjs.init("Xmlq5JwSU1eYCqg-E");
function send(){ if (document.getElementById("contact-form").checkValidity() == false) {
  document.getElementById("contact-form").reportValidity();
  return;
}
 var date = {
    name: document.getElementById("contact-form-name").value,
    surname: document.getElementById("contact-form-surname").value,
    email: document.getElementById("contact-form-email").value,
    message: document.getElementById("contact-form-message").value
};
  
emailjs.send("service_un2zord", "template_88jqfs9", date)
.then(function (raspuns){ alert("Mesajul a fost transmis cu succes")  
document.getElementById("contact-form").reset();
},
  function (error) {alert("Eroare la transmitere. Contactati prin telefon magazinul.")
})
}