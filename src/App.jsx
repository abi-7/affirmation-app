import { useState } from "react";
import Login from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div
        className="min-h-screen flex items-center 
      justify-center text-green-800"
      >
        <Login
          onLogin={(user) => {
            console.log("Logged in user:", user);
            setUser(user);
          }}
        />
      </div>
    );
  }

  return <Dashboard user={user} />;
}

export default App;
