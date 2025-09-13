let users = [];

// 🔐 Inscription
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  users.push({ name, email, password });
  alert("Inscription réussie !");
  this.reset();
});

// 🔓 Connexion
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    document.getElementById('display-name').textContent = "Nom : " + user.name;
    document.getElementById('display-email').textContent = "Email : " + user.email;
    document.getElementById('user-info').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.add('hidden');
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});

// 🔁 Déconnexion
document.getElementById('logout-btn').addEventListener('click', function() {
  document.getElementById('user-info').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('login-form').classList.remove('hidden');
});

// 🧠 Données fictives pour les utilisateurs
const utilisateurs = {
  "adnan": {
    manchesGagnees: 5,
    documents: ["score.pdf", "profil.jpg", "historique.txt"]
  },
  "abdellah": {
    manchesGagnees: 0,
    documents: ["resultats.docx", "avatar.png"]
  },
    "tahasari": {
    manchesGagnees: 0,
    documents: ["groupe.pdf", "profil.jpg", "historique.txt"]
  }
};

// 🔍 Connexion par nom d'utilisateur
function connecterUtilisateur(nom) {
  nom = nom.toLowerCase();
  const user = utilisateurs[nom];

  if (user) {
    document.getElementById("message").innerHTML = `
      <h3>Bienvenue ${nom} !</h3>
      <p>Manches gagnées : <strong>${user.manchesGagnees}</strong></p>
      <p>Documents :</p>
      <ul>
        ${user.documents.map(doc => `<li>${doc}</li>`).join("")}
      </ul>
    `;
  } else {
    document.getElementById("message").innerHTML = `<p style="color:red;">Utilisateur inconnu.</p>`;
  }
}