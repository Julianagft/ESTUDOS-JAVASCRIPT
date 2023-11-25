const circulo = document.getElementById('circle');

circulo.addEventListener('mousemove', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  circulo.style.backgroundColor = randomColor;
});

circulo.addEventListener('mouseleave', () => {
  circulo.style.backgroundColor = '#807b7b';
});

// O toString(16) é um método em JavaScript que converte um número para sua representação como uma string em base hexadecimal. Nesse contexto:

// O 16 passado como argumento para o método toString indica que a conversão deve ser feita para a base 16, que é a base hexadecimal.
// Então, quando você usa .toString(16), está dizendo ao JavaScript para representar o número como uma string usando os dígitos 0-9 e as letras A-F, que são os caracteres usados na base hexadecimal.

// Por exemplo:

// O número 15 em base 10 seria 'F' em base 16.
// O número 16 em base 10 seria '10' em base 16.
// O número 255 em base 10 seria 'FF' em base 16.
// Essa representação hexadecimal é comumente usada para cores, onde cada componente de cor (vermelho, verde, azul) é representado por dois dígitos hexadecimais. Por exemplo, #RRGGBB, onde RR representa a intensidade de vermelho, GG o verde, e BB o azul.





