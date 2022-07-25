
//Clikcing in a button to read the letter (btn). It is possible to click on the letter int the table (table) and readt it (change toggle). 
document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".table").classList.toggle("change");
  });
  