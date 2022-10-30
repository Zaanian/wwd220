const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthnames = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = monthnames[d.getMonth()];
const year = d.getFullYear();
const fullfooter = `${year} - Stephen Stauffer | ${dayName}, ${d.getDate()}, ${monthName}, ${year} | WA`;
document.querySelector("#date").textContent = fullfooter;

// message
const message = "";
const newDay = dayName

if (newDay === "Monday") {
  let message =
    "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  document.querySelector("#message").textContent = message;
} else if (newDay === "Tuesday"){
  let message =
    "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  document.querySelector("#message").textContent = message;
} else {
  let message = "Happy Day";
  document.querySelector("#message").textContent = message;
}

//