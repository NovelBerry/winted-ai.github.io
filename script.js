document.getElementById('enviar').addEventListener('click', async () => {
    const pregunta = document.getElementById('pregunta').value;
    const respuestaDiv = document.getElementById('respuesta');
    respuestaDiv.innerHTML = 'Pensando...'; // Muestra un mensaje de carga

    // Aquí, en un proyecto real, harías una llamada a tu API
    // que se ejecuta en un servidor y tiene el modelo de IA
    const response = await fetch('/api/generar-respuesta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pregunta: pregunta })
    });
    const data = await response.json();
    respuestaDiv.innerHTML = data.respuesta;
});
