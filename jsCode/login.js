document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        alert("Invalid email or password!");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Welcome back, " + user.name + "!");
      window.location.href = "index.html";
    });
// eye
function ShowPassword() {
  const password = document.getElementById("password");
  const changeEye = document.getElementById('changeEye');
  if(password.type == "password") {
    password.type = "text";
    changeEye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
  else {
    password.type = "password";
    changeEye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
    
}