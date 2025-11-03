document.getElementById("signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some(u => u.email === email)) {
        alert("This email is already registered!");
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      window.location.href = "login.html";
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