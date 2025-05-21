import { useState } from "react";
import Login from "./components/LogIn";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100 text-green-800">
        <Login
          onLogin={(user) => {
            console.log("Logged in user:", user);
            setUser(user);
          }}
        />
      </div>
    );
  }

  return (
    <div className="garden-container">
      <h1 className="garden-title">🌱 My Affirmation Garden</h1>
      <p className="garden-welcome">Hello, {user.displayName}!</p>
    </div>
  );
}

export default App;
