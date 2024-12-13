const items = document.querySelectorAll(".accordion button");
const contactForm = document.querySelector(".contact_form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
document.addEventListener('DOMContentLoaded', function() {
let iconeburger = document.getElementById('iconeburger');
let menuburger = document.getElementById('menuburger');
let langues = document.getElementById('langues');
let submenu = document.getElementById('submenu');

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

/* Toggle pour le menu burger */
iconeburger.addEventListener("click", function() {
  if (menuburger.style.display === "none" || menuburger.style.display === "") {
    menuburger.style.display = "block";
    iconeburger.innerHTML = '<img src="assets/images/croix.png" alt="icône croix"/>';
  } else {
    menuburger.style.display = "none";
    iconeburger.innerHTML = '<img src="assets/images/burger.png" alt="icône menu burger">';
  }
});

/* Toggle du submenu */
langues.addEventListener("click", function() {
  if (submenu.style.display === "none" || submenu.style.display === "") {
    submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  });
});
