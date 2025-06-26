const colors = {
  primary: "#3498db",
  secondary: "#2ecc71"
};

console.log(colors["primary"])
for (const key in colors) { // اللوب الخارجي (يغير اللون)
  for (let i = 1; i <= 3; i++) { // اللوب الداخلي (يغير الرقم)
    console.log(colors[key]);
  }
}
