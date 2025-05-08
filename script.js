<script>
// ==== SCROLL FADE-IN ANIMATION ====
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});


// ==== IMAGE MODAL FUNCTIONALITY ====
const profileImg = document.querySelector(".profile-image"); // Add this class to your profile <img>
const modal = document.createElement("div");
modal.classList.add("img-modal");

profileImg.addEventListener("click", () => {
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img src="${profileImg.src}" alt="Full Profile Image">
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn") || e.target.classList.contains("img-modal")) {
    modal.remove();
    document.body.style.overflow = ''; // Restore scrolling
  }
});
</script>
