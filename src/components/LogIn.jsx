import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import "./LogIn.css";

const Login = ({ onLogin }) => {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Login Success:", user);
        onLogin(user);
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <div className="garden-container">
      <h2 className="garden-heading">Welcome to Your Garden 🌼</h2>
      <button onClick={handleGoogleLogin} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
