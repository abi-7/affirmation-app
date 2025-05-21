import { useState } from "react";
import Login from "./components/LogIn";

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
    <div className="min-h-screen bg-green-50 text-green-800 p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">🌱 My Affirmation Garden</h1>
      <p className="mb-4 text-lg">Hello, {user.displayName}!</p>
    </div>
  );
}

export default App;
