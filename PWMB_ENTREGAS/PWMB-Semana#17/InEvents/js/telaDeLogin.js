// telaDeLogin.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const storedUser = JSON.parse(localStorage.getItem("userData"));
  
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login bem-sucedido!");
        // Futuramente implementar tela após Login.
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    });
  });
  