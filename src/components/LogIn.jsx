import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-green-900">
      <h2 className="text-3xl font-bold mb-4">Welcome to Your Garden 🌼</h2>
      <button
        onClick={handleGoogleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
