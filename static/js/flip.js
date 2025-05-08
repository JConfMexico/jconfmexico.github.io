document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-flip").forEach(button => {
      button.addEventListener("click", function () {
        const card = this.closest(".flip-card");
        card.classList.toggle("flipped");
      });
    });
  });