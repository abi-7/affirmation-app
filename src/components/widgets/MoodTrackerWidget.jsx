const MoodTrackerWidget = ({ onMoodSelect }) => {
  const moods = ["Happy", "Sad", "Okay"];

  return (
    <div className="widget">
      <h2 className="text-xl font-semibold mb-4">
        {" "}
        🤩 How are you feeling today?
      </h2>
      <div className="flex justify-center gap-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            className="bg-green-200 hover:bg-green-300 text-green-900 font-medium py-2 px-4 rounded-full transition"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTrackerWidget;
