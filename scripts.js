let peliculas = [];

// Submit del formulario
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const image = document.getElementById("image").value;

    // objeto pelicula
    const pelicula = {
        title: title,
        director: director,
        year: year,
        image: image
    }

    // asignar objeto al array peliculas
    peliculas.push(pelicula);

    // Limpiar el formulario
    document.getElementById("form").reset();

    // Mostrar peliculas

    const contenedorP = document.getElementById("cont-peliculas")
    
    // Se crea un elemento article para cada pelicula
    const tarjeta = document.createElement("article");
    const titulo = document.createElement("h2");
    const directorTarjeta = document.createElement("p");
    const año = document.createElement("p");
    const imagen = document.createElement("img");
    const botonDuplicar = document.createElement("button");

    // Se les asigna el contenido
    titulo.textContent = pelicula.title;
    directorTarjeta.textContent = "Director: " + pelicula.director;
    año.textContent = "Año: " + pelicula.year;
    imagen.src = pelicula.image;
    imagen.alt = pelicula.title;
    botonDuplicar.textContent = "Duplicar";

    // Los elementos se añaden a la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(directorTarjeta);
    tarjeta.appendChild(año);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(botonDuplicar);
    contenedorP.appendChild(tarjeta);

    // Duplicar pelicula
    botonDuplicar.addEventListener("click", ()=>{

    })

});






