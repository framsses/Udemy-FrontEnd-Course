const personas = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara')
];

function mostrarPersonas(){
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.getElementById('forma');
    let nombre = forma['nombre'];
    let apellido = forma['apellido'];
    if (nombre.value !== '' && apellido.value !== ''){
        let persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        alert('No hay información que agregar')
    }
}