let persona = function(n, t, g, f, d){
    this.nombre = n;
    this.tel =t;
    this.grupo = g;
    this.foto = f;
    this.descripcion = d;

}

function agregarPersona(){
    let forma = document.forms["forma"];
    //console.log(forma);
    let aux = new persona(forma["nombre"].value,forma["tel"].value,forma["grupo"].value,forma["agregar-foto"].value,forma["descripcion"].value)
    mostrar();
    return aux;
}
function mostrar(){
    let lista = document.getElementById("listaContactos");
    let aux;
    for(let persona of contactos){
        aux+= `<li class="item-list card-text d-flex justify-content-between">
                    <span>
                        <i class="fa fa-user photo-item"></i>${persona.nombre}
                    </span>
                    <span class="text-right">${persona.tel}</span> 
                </li>`;
    }
    lista.innerHTML= aux;
}

let contactos = [];
document.getElementById("crearContacto").addEventListener("click",()=>{contactos.push(agregarPersona())})
document.getElementById("eliminar").addEventListener("click",()=>{console.log(contactos)})