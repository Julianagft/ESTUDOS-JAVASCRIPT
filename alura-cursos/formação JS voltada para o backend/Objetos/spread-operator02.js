const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }


   let guerreiro = { fichaGuerreiro, equipoGuerreiro };
   console.log(guerreiro);
   // Se deixar assim ainda vai exibir como dois objetos separados:

   // Usando o Spread Operator para resolver:

   guerreiro = {...fichaGuerreiro, ...equipoGuerreiro};

   console.log(guerreiro);

   // Agora guerreiro será exibido como um objeto só!


   // OBS: Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.