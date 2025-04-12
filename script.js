const modal = document.getElementById("modal");
const notification = document.getElementById("notification");
const emailInput = document.getElementById("emailInput");
const quantityInput = document.getElementById("quantityInput");

function openModal() {
  modal.style.display = "flex";
}

function submitEmail() {
  const email = emailInput.value;
  if (email && email.includes("@")) {
    modal.style.display = "none";
    emailInput.value = "";
    showNotification();
  } else {
    alert("Please enter a valid email address.");
  }
}

function showNotification() {
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function changeQuantity(amount) {
  let current = parseInt(quantityInput.value);
  if (!isNaN(current)) {
    const newQty = Math.max(1, current + amount);
    quantityInput.value = newQty;
  }
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you! We'll get back to you soon.");
    contactForm.reset();
  });
  
