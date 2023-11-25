const circulo = document.getElementById('circle');

circulo.addEventListener('click', () => {
    if (circulo.classList.contains("dia")) {
        circulo.classList.remove("dia");
        circulo.classList.add("tarde");
      } else if (circulo.classList.contains("tarde")) {
        circulo.classList.remove("tarde");
        circulo.classList.add("noite");
      } else if (circulo.classList.contains("noite")) {
        circulo.classList.remove("noite");
        circulo.classList.add("dia");
      }
});

circulo.addEventListener('mouseleave', () => {
  circulo.style.backgroundColor = '#f0f8ff';
});