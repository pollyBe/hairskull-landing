// Nav scroll
const nav = document.getElementById("nav")
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60)
})

// Fade in on scroll
const faders = document.querySelectorAll(".fade-in")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80)
        observer.unobserve(e.target)
      }
    })
  },
  {threshold: 0.1}
)
faders.forEach((el) => observer.observe(el))

// Mobile nav
function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("open")
}
function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open")
}

// Form submit → Telegram redirect
function handleFormSubmit() {
  alert("Заявка отправлена! Для быстрой связи напишите в Telegram: @hairskulladmin")
  // В продакшне подключите реальную отправку через EmailJS, Formspree или backend
}
