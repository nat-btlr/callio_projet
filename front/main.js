const items = document.querySelectorAll(".accordion button");
const contactForm = document.querySelector(".contact_form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile_menu');

/* FAQ accordion */
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/* Burger menu opening */
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('show');
  mobileMenu.classList.toggle('show');
});

/* Contact form submission */ 
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr);
    console.log("Response text: " + xhr.responseText);
    if(xhr.status == 200) {
      alert("Email sent");
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert("Something went wrong");
    }
  }
  xhr.send(JSON.stringify(formData));
});
