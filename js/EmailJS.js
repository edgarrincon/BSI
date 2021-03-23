function sendMail(params) {
  const contact_name = document.getElementById("contact_name");
  const contact_email = document.getElementById("contact_email");
  const contact_subject = document.getElementById("contact_subject");
  const contact_tel = document.getElementById("contact_tel");
  const contact_message = document.getElementById("contact_message");

  if (!contact_name.checkValidity() == true) {
    alert("Please provide your Name!");
    contact_name.focus();
    return false;
  }
  if (!contact_email.checkValidity() == true) {
    alert("Please provide your Email!");
    contact_email.focus();
    return false;
  }

  if (!contact_subject.checkValidity() == true) {
    alert("Please provide your Subject!");
    contact_subject.focus();
    return false;
  }

  if (!contact_tel.checkValidity() == true) {
    contact_tel.addEventListener("invalid", () => {
      if (contact_tel.value === "") {
        contact_tel.setCustomValidity("Enter phone number!");
      } else {
        contact_tel.setCustomValidity(
          "Enter phone number in this format: 305-842-9523"
        );
      }
    });
    alert("Please provide your Phone!");
    contact_tel.focus();
    return false;
  }

  if (!contact_message.checkValidity() == true) {
    alert("Please provide your message!");
    contact_message.focus();
    return false;
  } else {
    // let userData = {
    //   contact_name: contact_name.value,
    //   contact_email: contact_email.value,
    //   contact_subject: contact_subject.value,
    //   contact_tel: contact_tel.value,
    //   contact_message: contact_message.value,
    // };

    // emailjs.send("GMAIL", "TEMPLATE", userData).then(function (res) {
    //   console.log("success", res.status);
    // });
    alert("Thank you!🎉 we will keep in touch 🤝");
  }
}

let phone_input = contact_tel;

phone_input.addEventListener("input", () => {
  phone_input.setCustomValidity("");
  phone_input.checkValidity();
});

contact_tel.addEventListener("invalid", () => {
  if (contact_tel.value === "") {
    contact_tel.setCustomValidity("Enter phone number!");
  } else {
    contact_tel.setCustomValidity(
      "Enter phone number in this format: 123-456-7890"
    );
  }
});
