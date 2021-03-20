function sendMail(params) {
  const contact_name = document.getElementById("contact_name");
  const contact_email = document.getElementById("contact_email");
  const contact_subject = document.getElementById("contact_subject");
  const contact_tel = document.getElementById("contact_tel");
  const contact_message = document.getElementById("contact_message");

  if (
    (!contact_name.checkValidity(),
    !contact_email.checkValidity(),
    !contact_tel.checkValidity(),
    !contact_subject.checkValidity(),
    !contact_message.checkValidity())
  ) {
    alert("Hi 👋 Please fill in all required fields 🙏");
  } else {
    let userData = {
      contact_name: contact_name.value,
      contact_email: contact_email.value,
      contact_subject: contact_subject.value,
      contact_tel: contact_tel.value,
      contact_message: contact_message.value,
    };

    emailjs.send("GMAIL", "TEMPLATE", userData).then(function (res) {
      console.log("success", res.status);
    });
    alert("Thank you!🎉 we will keep in touch 🤝");
  }
}
