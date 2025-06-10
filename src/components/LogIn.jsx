import React, { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./LogIn.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CodeRain from "./CodeRain";

const Login = ({ onLogin }) => {
  useEffect(() => {
    // Sign out user on mount so Firebase
    // doesn't remember previous session
    signOut(auth).catch(console.error);
  }, []);

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
    <div className="garden-container" style={{ position: "relative" }}>
      <CodeRain />
      <Card
        sx={{ maxWidth: 345 }}
        className="card"
        style={{ position: "relative", zIndex: 1 }}
      >
        <CardContent>
          <Typography component="div" className="garden-heading">
            Welcome to Your Garden 🌼
          </Typography>
        </CardContent>
        <CardActions>
          <button onClick={handleGoogleLogin} className="google-login-button">
            Login with Google
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
