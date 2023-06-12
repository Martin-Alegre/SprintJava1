let card = document.getElementById("main-div-card");

let searchInput = document.getElementById("search-input");
  
function createCards(event) {
  return `<div class="card" style="width: 16rem;">
          <img class="img-box" src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <h6>Date: ${event.date}</h6>
              <div class="price-div">
                <h5>$${event.price}</h5>
                <a href="./details.html?id=${event._id}" class="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>`;
      
}

function renderCards(events) {
  card.innerHTML = '';
  let template= ""
  for (let event of events){
    template += createCards(event)
  }
  console.log(template)
  card.innerHTML += template
}


//SPRINT 3: CHECKBOX DINAMICOS C/NODOS//

let checkboxDiv = document.getElementById("checkboxDiv")

const categorias = data.events.map(events => events.category)

const categoriasSinRepetir = new Set (categorias)

const arrayCategoriasSinRepetir = Array.from(categoriasSinRepetir)

pintarCheckBox(arrayCategoriasSinRepetir, checkboxDiv)

const checkboxes = checkboxDiv.querySelectorAll(`input[type="checkbox"]`)

function crearCheck( category ){
  const div = document.createElement('DIV')
  div.classList.add( 'form-check' )

  const input = document.createElement( 'INPUT' )
  input.type = "checkbox"
  input.className = "form-check-input"
  input.value = category
  input.id = `${category}-check` 
  input.name = "category"

  const label = document.createElement('LABEL')
  label.className = "form-check-label"
  label.setAttribute('for',`${category}-check`)
  label.textContent = category
  label.style = "cursor:pointer"

  div.appendChild(input)
  div.appendChild(label)

  return div
} 

function pintarCheckBox( categorias, elemento ){

  const fragment = document.createDocumentFragment()

  for (const category of categorias) {
      const div = crearCheck( category )
      fragment.appendChild( div )
  }

  elemento.appendChild( fragment )
}

function filtrarCartas(){
    let categoriasSeleccionadas = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked){
        categoriasSeleccionadas.push(checkbox.labels[0].innerText)
      }
    });

    let searchQuery = searchInput.value.toLowerCase().trim();

      let filteredEvents = data.events.filter((event) => {
        let categoryNameMatch = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(event.category);
        let nameMatch = event.name.toLowerCase().includes(searchQuery);
        let descriptionMatch = event.description.toLowerCase().includes(searchQuery);
        return categoryNameMatch && (nameMatch || descriptionMatch);
      });
        let currentDate = (data.currentDate);
        let pastEvents = filteredEvents.filter((event) => {
          return (event.date) > currentDate;
        });
      
        renderCards(pastEvents);  
}
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filtrarCartas);
  });
  
  searchInput.addEventListener('keyup', filtrarCartas);
  
  window.addEventListener('load', () => {
    console.log('Window loaded. Rendering all events.');
    filtrarCartas();
  });