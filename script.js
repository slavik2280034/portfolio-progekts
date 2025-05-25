// Тут ти вручну додаєш користувачів:
const users = [
  { username: "admin", password: "adminpass" },
  { usetname: "Slavik2013", password: "adminpass" }
];

function login() {
  const userInput = document.getElementById("username").value.trim();
  const passInput = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  const user = users.find(
    u => u.username === userInput && u.password === passInput
  );

  if (user) {
    status.style.color = "green";
    status.innerText = `✅ Вітаю, ${user.username}! Ви увійшли.`;
    // ТУТ МОЖНА ПЕРЕНАПРАВИТИ НА ІНШУ СТОРІНКУ:
    // window.location.href = "dashboard.html";
  } else {
    status.style.color = "red";
    status.innerText = "❌ Невірний логін або пароль!";
  }
}
