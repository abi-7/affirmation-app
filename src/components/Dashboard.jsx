import QuoteWidget from "./widgets/QuoteWidget";
import MoodTrackerWidget from "./widgets/MoodTrackerWidget";
import WeatherWidget from "./widgets/WeatherWidget";

export default function Dashboard({ user }) {
  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: 'url("src/assets/Cloudy.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="garden-header">
        <h1 className="garden-title">Welcome, {user.displayName}!</h1>
        <h2 className="garden-date">{new Date().toLocaleDateString()}</h2>
      </div>
      <div className="widgets-grid">
        <QuoteWidget />
        <MoodChartWidget />
        <WeatherWidget />
      </div>
      <div className="mood-grid">
        <MoodChartWidget />
      </div>
    </div>
  );
}
