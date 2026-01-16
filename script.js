const slider = document.querySelector(".project-slider");

slider.addEventListener("mouseover", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseout", () => {
  slider.style.animationPlayState = "running";
});
