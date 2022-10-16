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
  const banner = `${dayName}, ${d.getDate()}, ${monthName}, ${year}`;
  document.querySelector("#banner").textContent = banner;
