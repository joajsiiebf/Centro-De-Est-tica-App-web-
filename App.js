// src/App.js
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Pacientes from "./components/Pacientes";
import Sesiones from "./components/Sesiones";
import Pagos from "./components/Pagos";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Detecta cambios de usuario (login/logout)
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Función para login
  const handleLogin = async () => {
    if (!email || !password) return alert("Ingresa correo y contraseña");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Error de login: " + error.message);
    }
  };

  // Función para logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  // Si no hay usuario logueado → mostrar login
  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    );
  }

  // Si hay usuario logueado → mostrar app administrativa
  return (
    <div style={{ padding: 20 }}>
      <h1>Centro de Estética - Administración</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <hr />
      <Pacientes />
      <Sesiones />
      <Pagos />
    </div>
  );
}

export default App;
