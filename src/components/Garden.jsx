const Garden = ({ mood }) => {
  if (!mood)
    return (
      <p className="text-gray-600 italic">
        Choose a mood to grow your garden 🌼
      </p>
    );

  const moodMessages = {
    Happy: "🌸 A beautiful flower blooms in your joy!",
    Sad: "🌱 A gentle sprout appears, bringing you comfort.",
    Okay: "🌼 A calm flower grows slowly and steadily.",
  };

  return (
    <div className="mt-6 text-lg font-medium">
      <p>{moodMessages[mood]}</p>
    </div>
  );
};

export default Garden;
