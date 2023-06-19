const contenedor = document.getElementById("contenedor-details")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then( resole => resole.json())
    .then( data => { 
        const params = new URLSearchParams( location.search )
        const id = params.get ("id")
        const idEncontrado = data.events.find (event => event._id == id)
        contenedor.innerHTML = `
                <img class="img-datails" src="${idEncontrado.image}" alt="${idEncontrado.name}">
                <div class="info-details">
                 <h3>${idEncontrado.name}</h3>
                    <h6>${idEncontrado.description}</h6>
                    <h6>Category: ${idEncontrado.category}</h6>
                    <h6>Date: ${idEncontrado.date}</h6>
                    <h6>Place: ${idEncontrado.place}</h6>
                    <h6>Capacity: ${idEncontrado.capacity}</h6>
                    <h6>Price: $${idEncontrado.price}</h6>
                </div>`
    })
    .catch( err => console.log(err))