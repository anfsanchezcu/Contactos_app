let contactos = [];
let picture="";
const lector = new FileReader;

lector.addEventListener('load', (event) => {
    document.getElementById("imgPreview").src = event.target.result;
})

const persona = function(n, t, g, f, d){
    this.nombre = n;
    this.tel =t;
    this.grupo = g;
    this.foto = f;
    this.descripcion = d;

}
function agregarPersona(){
    let forma = document.forms["forma"];
    if(forma["nombre"].value !="" && forma["tel"].value !=""){
        
        let aux = new persona(forma["nombre"].value,forma["tel"].value,forma["grupo"].value,picture,forma["descripcion"].value)
        
        return aux;
    }
    return false;
    
}
function mostrar(){
    let lista = document.getElementById("listaContactos");
    let aux="";
    let i = 0;
    for(let persona of contactos){
        if(persona != undefined){
            aux+= `<li class="item-list card-text d-flex justify-content-between" id="${i}">
                    <span id="${i}">
                        <i class="fa fa-user photo-item" ></i>${persona.nombre}
                    </span>
                    <span class="text-right" id="${i}">${persona.tel}</span> 
                </li>`;
        }else{
            `<li>Aun no tienes contactos guardados</li>`
        }
        i++;
    }
    lista.innerHTML= aux;
}
function mostrarContacto(id){
    if(!isNaN(id)){
        
        let p = contactos[id];
        let foto = p.foto;
        if(foto=="")
            foto="statics/user.png"
        else{
            lector.readAsDataURL(foto);
        }

        console.log(p);
        document.getElementById("card-user").innerHTML=`<img src="${foto}" alt="" class="d-block img-fluid img-user" id="imgPreview">
        <h5 class="card-title ">${p.nombre}</h5>
        <h6 class="card-subtitle text-muted ">${p.grupo}</h6>
        <p class="card-text">${p.descripcion}</p>
        <a href="" class="btn btn-primary btn-lg"><i class="fa fa-phone"></i><strong>${p.tel}</strong></a>`
    }
}


document.getElementById("agregar-foto").addEventListener("change",(event)=>{
    
    const file = event.target.files[0];
    picture=file;
    console.log("file: ", file);

})




document.getElementById("crearContacto").addEventListener("click",()=>{
    let a =agregarPersona();
    if(a!=false){
        contactos.push(a);
        mostrar();
    }
})
document.getElementById("eliminar").addEventListener("click",()=>{console.log(contactos)})
document.getElementById("listaContactos").addEventListener("click",(e)=>mostrarContacto(e.target.id))