export const renderDate = (date) => {
  const dateObject = new Date(date.replace(/-/g, '/'));
  const day = dateObject.toLocaleString('en-US', { day: '2-digit' });
  const month = dateObject.toLocaleString('en-US', { month: 'short' });
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
};
