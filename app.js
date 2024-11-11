// DOM
const iptTarea = document.getElementById("tarea");
const divLista = document.getElementById("lista-contenedor");
const btnTarea = document.getElementById("btnTarea");


// FUNCIONES
const guardarDatos = () => {
    localStorage.setItem("data", divLista.innerHTML);
}

const agregarTarea = () => {
    if(iptTarea.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = iptTarea.value;
        divLista.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    else{
        alert("Escriba una tarea por favor.");
    }

    iptTarea.value = '';
    guardarDatos();
};

const mostrarDatos = () => {
    divLista.innerHTML = localStorage.getItem("data");
}


// EVENTOS
btnTarea.addEventListener("click", agregarTarea);

divLista.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('chequeado');
        guardarDatos();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        guardarDatos();
    }
}, false);

mostrarDatos();