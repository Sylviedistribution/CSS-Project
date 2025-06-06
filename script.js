//CAROUSSEL
const carousel = document.getElementById("caroussel");
const scrollAmount = 320;

const btnLeft = document.getElementById("scrollLeft");
const btnRight = document.getElementById("scrollRight");

function updateScrollButtons() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Désactiver bouton gauche si on est tout à gauche
  btnLeft.disabled = carousel.scrollLeft <= 0;

  // Désactiver bouton droite si on est tout à droite
  btnRight.disabled = carousel.scrollLeft >= maxScrollLeft;
}

// Sur clic gauche
btnLeft.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  setTimeout(updateScrollButtons, 600); // attends un peu que le scroll se fasse
});

// Sur clic droite
btnRight.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  setTimeout(updateScrollButtons, 600);
});

// Au chargement
updateScrollButtons();


//Curseur latent
const dot = document.querySelector('.cursor-dot');

let mouseX = 0;
let mouseY = 0;

let dotX = 0;
let dotY = 0;

const speed = 0.1; // Plus bas = plus lent, plus de latence

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Interpolation douce vers la position de la souris
  dotX += (mouseX - dotX) * speed;
  dotY += (mouseY - dotY) * speed;

  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;

  requestAnimationFrame(animate);
}

animate();

//CHANGE BACKGROUND COULEUR NAVBAR 
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("navbar-transparent");
  } else {
    header.classList.remove("navbar-transparent");
  }
});

//BACON MENU
const bacon = document.querySelector("bacon");
const navbar = document.getElementsByClassName("navbar")



//Redirect route
document.getElementById("eticket").addEventListener("click", () => {
  window.location.href = "https://github.com/Sylviedistribution/ticket-france-eclair";
});

document.getElementById("mprew").addEventListener("click", () => {
  window.location.href = "https://github.com/Sylviedistribution/rapport_de_stage";
});

document.getElementById("miadreams").addEventListener("click", () => {
  window.location.href = "https://mia-dreams.com/";
});

document.getElementById("blog").addEventListener("click", () => {
  window.location.href = "https://github.com/Sylviedistribution/MonBlog";
});

document.getElementById("ter").addEventListener("click", () => {
  window.location.href = "https://github.com/Sylviedistribution/TER";
});

//SEND NOTIFICATION

const sent = document.getElementById("send");
sent.addEventListener("click", () => {
    alert("✅ Message sent successfully!");

});

//MENU TOGGLE
 const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let isOpen = false;

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    isOpen = !isOpen;

    // Toggle icon : burger ↔ close
    if (isOpen) {
      menuToggle.classList.remove('fa-bars');
      menuToggle.classList.add('fa-xmark'); // croix
    } else {
      menuToggle.classList.remove('fa-xmark');
      menuToggle.classList.add('fa-bars'); // burger
    }
  });