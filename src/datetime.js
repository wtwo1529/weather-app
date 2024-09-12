export default function getDate(dateString) {
  let hours = dateString.substring(0, 2);
  let minutes = dateString.substring(3, 5);
  let seconds = dateString.substring(6, 8);
  let dateObject = new Date();
  dateObject.setHours(hours, minutes, seconds);

  return dateObject;
}
