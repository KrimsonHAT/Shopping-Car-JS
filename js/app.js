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

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );

    if(existe){
        // ACTUALIZAMOS LA CANTIDAD
        const cursos = articulosCarrito.map( curso=>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //Retorna el objeto actualizado
               
            }else{
                return curso;//Retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // Agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }



    console.log(infoCurso);
    

    console.log(articulosCarrito);
    carritoHtml();
}


// Muestra el carrito dd ecompras en el html

function carritoHtml(){

    // Limpiar html

    limpiarHtml()

    // recorrre carrito y genera html
    articulosCarrito.forEach((curso)=>{
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr');
        console.log(curso);
        row.innerHTML = `
        <td>
            <img src="${imagen}" width=100>
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
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