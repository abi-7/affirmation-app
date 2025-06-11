import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const latitude = 49.89; // Winnipeg
  const longitude = -97.14;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
        );
        const data = await res.json();
        setWeather(data.current);
      } catch (err) {
        console.error("Error fetching weather:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherDescription = (code) => {
    const descriptions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      61: "Light rain",
      80: "Showers",
    };
    return descriptions[code] || "Unknown";
  };

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>Could not load weather.</div>;

  return (
    <div className="widget">
      <h2>⛅️ Current Weather</h2>
      <p>{weather.temperature_2m}°C</p>
      <p>{getWeatherDescription(weather.weather_code)}</p>
    </div>
  );
};

export default WeatherWidget;
