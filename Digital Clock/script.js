function time() {
  let time = document.getElementById("time");
  let dayDisplay = document.getElementById("dayDisplay");
  let dateDisplay = document.getElementById("dateDisplay");

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const dayEl = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const monthEl = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  let dayName = dayEl[now.getDay()];
  let date = now.getDate();
  let month = monthEl[now.getMonth()];
  let year = now.getFullYear();

  time.innerText = `${hours} : ${minutes} : ${seconds} ${amPm}`;
  dayDisplay.innerText = `${dayName}`;
  dateDisplay.innerText = `${month} ${date}, ${year}`;
}

setInterval(time, 1000);
time();

const toggleMode = document.getElementById("toggleMode");
const modeIcon = document.getElementById("modeIcon");

toggleMode.addEventListener("click", () => {
  const currentBg = getComputedStyle(document.body).backgroundColor;

  if (currentBg === "rgb(255, 255, 255)") {
    document.body.style.backgroundColor = "rgb(34, 33, 33)";
    modeIcon.src =
      "https://img.icons8.com/?size=100&id=11378&format=png&color=FFFFFF";
  } else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    modeIcon.src =
      "https://img.icons8.com/?size=100&id=9313&format=png&color=FFFFFF";
    toggleMode.style.backgroundColor = "rgb(34, 33, 33)";
  }
});
