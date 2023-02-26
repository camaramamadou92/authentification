const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Code de vérification de l'authentification à ajouter ici

    // Si l'authentification est réussie, rediriger l'utilisateur vers la page de son choix
});
