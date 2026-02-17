/*Queryselectior the class hour, minute, and second to manipulate the clock hands.*/
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  /*Get the current date*/
  const now = new Date();

  /*Get the current second, minute, and hour from the date object.*/
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  /*Calculate the degree of rotation for each hand of the clock.
  The second hand rotates 360 degrees in 60 seconds, so we divide the current second by 60 and multiply by 360 to get the degree of rotation.
  The minute hand rotates 360 degrees in 60 minutes, so we divide the current minute by 60 and multiply by 360 to get the degree of rotation.
  The hour hand rotates 360 degrees in 12 hours, so we divide the current hour by 12 and multiply by 360 to get the degree of rotation.*/
  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;
  /*Apply the rotation to the clock hands using the
   transform property and the rotate function.*/
  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}
//Funtion setInterval is used to call the setDate 
// function every 1000 milliseconds (1 second) to update the clock hands.
setInterval(setDate, 1000);
