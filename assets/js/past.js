import{renderCards, pintarCheckBox, filtrarCartas} from"../module/function.js"

let card = document.getElementById("main-div-card");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then( resole => resole.json())
    .then( data => { 
      let checkboxDiv = document.getElementById("checkboxDiv");
      const categorias = data.events.map(events => events.category)
      const categoriasSinRepetir = new Set (categorias)
      const arrayCategoriasSinRepetir = Array.from(categoriasSinRepetir)
      let currentDate = (data.currentDate);                
      let pastEvents = data.events.filter((event) => {      
        return (event.date) < currentDate;                     
      });
      renderCards(pastEvents, card);
      pintarCheckBox(arrayCategoriasSinRepetir, checkboxDiv)
      //declaraciones para los filtros
      const categoriasSelecionadas = [];
      let searchInput = document.getElementById("search-input");
      const checkboxes = checkboxDiv.querySelectorAll('input[type="checkbox"]');
      
    //filtros
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        categoriasSelecionadas.length = 0; // Vaciar el arreglo antes de cada filtrado
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            categoriasSelecionadas.push(checkbox.labels[0].innerText.toLowerCase());
          }
        });
        const searchInput = document.getElementById("search-input").value.toLowerCase().trim();
        filtrarCartas(pastEvents, categoriasSelecionadas, searchInput, card);
      });
    });
    searchInput.addEventListener("keyup", () => {
      const searchQuery = searchInput.value.toLowerCase().trim();
      filtrarCartas(pastEvents, categoriasSelecionadas, searchQuery, card);
    });
  })
  .catch((error) => console.error(error));




    