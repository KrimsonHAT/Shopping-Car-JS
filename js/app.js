// variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListenners()
function cargarEventListenners(){

    // cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso);
}



// Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
  
}
// LEE el contenido del HTML al que le dimos click
// y extrae la información del curso

function leerDatosCurso(curso){
    console.log(curso);
    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1

    }
    console.log(infoCurso);
    // Agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito,infoCurso];

    console.log(articulosCarrito);
    carritoHtml();
}


// Muestra el carrito dd ecompras en el html

function carritoHtml(){

    // Limpiar html

    limpiarHtml()

    // recorrre carrito y genera html
    articulosCarrito.forEach((curso)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;
        // Agregar el HTML del carrito en el tbody
       contenedorCarrito.appendChild(row);
    })
}


// Elimina los cursos del tbody
function limpiarHtml(){
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}