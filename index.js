document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    const content = item.querySelector(".timeline-content");
    const dot = item.querySelector(".timeline-dot");

    // Mouse hover handlers
    item.addEventListener("mouseenter", () => {
      content.classList.add("active-content");
      dot.classList.add("active-dot");
    });

    item.addEventListener("mouseleave", () => {
      content.classList.remove("active-content");
      dot.classList.remove("active-dot");
    });

    // Keyboard focus handlers (for accessibility)
    item.addEventListener("focusin", () => {
      content.classList.add("active-content");
      dot.classList.add("active-dot");
    });

    item.addEventListener("focusout", () => {
      content.classList.remove("active-content");
      dot.classList.remove("active-dot");
    });
  });

  // Auto-focus input with id "name" if present
  const nameInput = document.getElementById("name");
  if (nameInput) {
    nameInput.focus();
  }
});
