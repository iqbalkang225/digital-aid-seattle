// Returns a greeting based on the time of the day.
export const timeOfTheDay = () => {
  const time = new Date().getHours();

  if (time < 12) return 'Good Morning!';
  else if (time >= 12 && time <= 17) return 'Good Afternoon!';
  else if (time >= 17 && time <= 24) return 'Good Evening!';
};
