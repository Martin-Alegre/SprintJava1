let card = document.getElementById("main-div-card");
  
function createCards(event) {
    return `<div class="card" style="width: 16rem;">
            <img class="img-box" src="${event.image}" class="card-img-top" alt="${event.name}">
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <h6>Date: ${event.date}</h6>
                <div class="price-div">
                  <h5>$${event.price}</h5>
                  <a href="./details.html" class="btn btn-primary">More Details</a>
                </div>
              </div>
            </div>`;
        
}

function renderCards(events) {
  let card = document.getElementById("main-div-card");
  let template= ""
  for (let event of events){
    template += createCards(event)
  }
    console.log(template)
    card.innerHTML += template
}
  
function filterEvents(data) {
  let currentDate = (data.currentDate);
  let upComingEvents = data.events.filter((event) => {
    return (event.date) > currentDate;
  });

  renderCards(upComingEvents);
}

filterEvents(data);