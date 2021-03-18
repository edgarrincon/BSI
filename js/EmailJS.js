function sendMail(params) {
  var userData = {
    contact_name: document.getElementById("contact_name").value,
    contact_email: document.getElementById("contact_email").value,
    contact_subject: document.getElementById("contact_subject").value,
    contact_tel: document.getElementById("contact_tel").value,
    contact_message: document.getElementById("contact_message").value,
  };

  emailjs.send("GMAIL", "TEMPLATE", userData).then(function (res) {
    console.log("success", res.status, userData);
  });
}