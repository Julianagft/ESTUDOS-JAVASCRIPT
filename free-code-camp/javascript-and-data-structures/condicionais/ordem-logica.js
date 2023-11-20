// USAR A ORDEM LOGICA EM INSTRUÇÕES IF/ELSE

function orderMyLogic(val) {
    if (val >= 5 && val < 10) {
       console.log("Less than 10");
    } else if (val < 5) {
      console.log("Less than 5");
    } else {
       console.log("Greater than or equal to 10");
    }
  }
  
  orderMyLogic(14);