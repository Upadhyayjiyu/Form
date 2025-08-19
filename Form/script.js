const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("active");
    currentStep++;
    formSteps[currentStep].classList.add("active");
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("active");
    currentStep--;
    formSteps[currentStep].classList.add("active");
  });
});

document.getElementById("multiStepForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
