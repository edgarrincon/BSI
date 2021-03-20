function sendMail(params) {
  const contact_name = document.getElementById("contact_name").value;
  const contact_email = document.getElementById("contact_email").value;
  const contact_subject = document.getElementById("contact_subject").value;
  const contact_tel = document.getElementById("contact_tel").value;
  const contact_message = document.getElementById("contact_message").value;

  if (
    (contact_name,
    contact_email,
    contact_tel,
    contact_subject,
    contact_message == "")
  ) {
    alert("Please fill the required fields");
  } else {
    let userData = {
      contact_name: contact_name,
      contact_email: contact_email,
      contact_subject: contact_subject,
      contact_tel: contact_tel,
      contact_message: contact_message,
    };
    emailjs.send("GMAIL", "TEMPLATE", userData).then(function (res) {
      console.log("success", res.status);
    });
    alert("Thank you! we will keep in touch");
  }
}
