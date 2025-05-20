import { useState } from "react";
import MoodPicker from "./components/MoodPicker";
import Garden from "./components/Garden";

function App() {
  const [mood, setMood] = useState(null);

  return (
    <div className="min-h-screen bg-green-50 text-green-800 p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">🌱 My Affirmation Garden</h1>
      <MoodPicker onMoodSelect={setMood} />
      <Garden mood={mood} />
    </div>
  );
}

export default App;
