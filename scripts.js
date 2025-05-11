let peliculas = [];

// Submit del formulario

document.getElementById("form").addEventListener("submit",agregarPelicula);

function agregarPelicula(event){
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

    mostrarPeliculas(pelicula);
};

    // Mostrar peliculas

function mostrarPeliculas(pelicula) {
    const contenedorP = document.getElementById("cont-peliculas")
    
    // Se crea un elemento article para cada pelicula
    const tarjeta = document.createElement("article");
    const titulo = document.createElement("h2");
    const directorTarjeta = document.createElement("p");
    const año = document.createElement("p");
    const imagen = document.createElement("img");
    const botonDuplicar = document.createElement("button");
    const botonEliminar = document.createElement("button");
    
        // Se les asigna el contenido
    titulo.textContent = pelicula.title;
    directorTarjeta.textContent = "Director: " + pelicula.director;
    año.textContent = "Año: " + pelicula.year;
    imagen.src = pelicula.image;
    imagen.alt = pelicula.title;
    botonDuplicar.textContent = "Duplicar";
    botonEliminar.textContent = "Eliminar";

    
    // Los elementos se añaden a la tarjeta
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(directorTarjeta);
    tarjeta.appendChild(año);
    tarjeta.appendChild(botonDuplicar);
    tarjeta.appendChild(botonEliminar);
    contenedorP.appendChild(tarjeta);
    

     // Duplicar pelicula
    botonDuplicar.addEventListener("click", () =>{
        duplicarPelicula(pelicula);
    })

    // Eliminar pelicula
    botonEliminar.addEventListener("click", () => {
        contenedorP.removeChild(tarjeta);
    })
    
    tarjeta.className = "bg-gray-700 shadow-md rounded-xl p-4 h-full w-4/6 mx-auto mb-4 flex flex-col items-center";
    imagen.className = "rounded-sm mb-4 w-full h- object-cover";
    titulo.className = "text-xl font-bold mb-2";
    directorTarjeta.className = "text-gray-200 mb-2";
    año.className = "text-gray-200 mb-2";
    botonDuplicar.className = "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300";
    botonEliminar.className = "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300 mt-2";
};

// Duplicar pelicula
function duplicarPelicula(pelicula) {

    let peliculaCopia = {...pelicula};
    if ( peliculaCopia.title.includes("(copia)")){
        peliculaCopia.title + " (copia)";
    } else{
        peliculaCopia.title = peliculaCopia.title + " (copia)";
    }

    mostrarPeliculas(peliculaCopia);
}






