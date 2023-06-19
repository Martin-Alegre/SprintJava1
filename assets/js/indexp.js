let card = document.getElementById("main-div-card");

let searchInput = document.getElementById("search-input");

let checkboxDiv = document.getElementById("checkboxDiv");

let data;

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then( resole => resole.json())
    .then( data => { 
       data = data
    })
    .catch( err => console.log(err))

    function crearCheckBox(data, checkboxDiv){
        const arrayCategoriasSinRepetir = array.from(new Set(data.events.maps(events => events.category)))
        arrayCategoriasSinRepetir.array.forEach(element => {
            
        });
    }
