document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const usuario = formData.get('usuario');
    const password = formData.get('password');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password })
      });

      const data = await response.json();
      if (response.ok) {
        // Redirigir al usuario a la página de inicio (home) después del inicio de sesión exitoso
        window.location.href = '/home'; // Reemplaza '/home' con la ruta de tu página de inicio
      } else {
        alert(data.message); // Mostrar mensaje de error en caso de fallo en el inicio de sesión
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });