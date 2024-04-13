function inscribirAlumno(event) {
    event.preventDefault(); 

   
    var curso = document.getElementById("curso").value;
    var apellido = document.getElementById("apellido").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;

  
    var alumno = {
        curso: curso,
        apellido: apellido,
        nombre: nombre,
        correo: correo
    };

    fetch('/api/alumnos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumno)
    })
    .then(response => response.json())
    .then(data => {
       
        console.log('Respuesta del servidor:', data);

        
        window.parent.postMessage('nuevoAlumnoInscrito', '*');
    })
    .catch(error => {
        console.error('Error al enviar los datos al servidor:', error);
    });

  
    document.getElementById("formularioInscripcion").reset();
}

