// Список користувачів
const users = [
  { username: "admin", password: "adminpass" },
  { username: "Slavik2013", password: "11223344556677889900" }
];

// При вході
function login() {
  const userInput = document.getElementById("username").value.trim();
  const passInput = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  const user = users.find(
    u => u.username === userInput && u.password === passInput
  );

  if (user) {
    // Зберігаємо в LocalStorage
    localStorage.setItem("loggedUser", user.username);

    status.style.color = "green";
    status.innerText = `✅ Вітаю, ${user.username}! Ви увійшли.`;

    // Перехід на дашборд
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    status.style.color = "red";
    status.innerText = "❌ Невірний логін або пароль!";
  }
}
