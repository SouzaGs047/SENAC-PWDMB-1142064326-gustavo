// telaDeCadastro.js

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector(".registration-form");
  
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const fullname = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = { fullname, email, password };
      localStorage.setItem("userData", JSON.stringify(user));
  
      alert("Cadastro realizado com sucesso!");
  
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    });
  });
  
