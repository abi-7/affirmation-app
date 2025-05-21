import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import "./LogIn.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia />
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
