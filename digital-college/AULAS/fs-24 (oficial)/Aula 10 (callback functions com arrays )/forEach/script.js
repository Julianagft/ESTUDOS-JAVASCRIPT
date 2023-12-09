const img = document.querySelectorAll("img");

//getElementByTagName, assim como todos os getElements e o querrySelector retornam HTMLColection que é basicamente inutil. Ja o querrySelectorAll retorna um Node List. 

//querrySelectorAll funciona igual o querrySelector "normal" na hora de selecionar os elementos EX: "#";

// img.forEach((elemento) => {
    
//     elemento.style.border = "2px  solid red";
//     elemento.style.borderRadius = "10px";
// });

/* -------------------------------------------------------------------------------------------------------------------- */

// BOA PRATICA: Sempre que eu me deparar com um array like eu tenho que transformar em array para evitar bugs. 


const arrayDeImagens = Array.from(img);

arrayDeImagens.forEach((elemento) => {
    
    elemento.style.border = "2px  solid red";
    elemento.style.borderRadius = "10px";
    
});