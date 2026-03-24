import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let auth;

// Get Firebase config from backend
async function initFirebase() {
  const res = await fetch("/config");
  const config = await res.json();

  const app = initializeApp(config);
  auth = getAuth(app);
}

await initFirebase();

// Signup function
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
  } catch (err) {
    alert(err.message);
  }
};