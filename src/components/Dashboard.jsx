import QuoteWidget from "./widgets/QuoteWidget";
import MoodTrackerWidget from "./widgets/MoodTrackerWidget";

export default function Dashboard({ user }) {
  return (
    <div
      className="garden-container"
      style={{
        backgroundImage: 'url("src/assets/Cloudy.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="garden-title">Welcome, {user.displayName}!</h1>
      <div>
        <QuoteWidget />
        <MoodTrackerWidget />
      </div>
    </div>
  );
}
