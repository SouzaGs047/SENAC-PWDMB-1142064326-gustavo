document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.querySelector(".registration-form");

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (fullname === "") {
      alert("Por favor, insira o nome completo.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    const user = { fullname, email, password };

    localStorage.setItem("userData", JSON.stringify(user));

    alert("Cadastro realizado com sucesso!");

    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
