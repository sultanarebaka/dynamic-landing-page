const timeRef = document.getElementById("time");
const greetingRef = document.getElementById("greeting");
const nameRef = document.getElementById("name");
const focusRef = document.getElementById("focus");

// Options
const showAmPm = true;

// Show Time
function showTime() {
  //   let today = new Date(2021, 06, 10, 20, 33, 30),
  let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  // hour = hour % 12 || 12;

  // Output Time
  timeRef.innerHTML = `${hour}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  // let today = new Date(2021, 06, 10, 20, 33, 30),
  let today = new Date(),
    hour = today.getHours();
  document.body.style.color = "white";
  if (hour < 3) {
    // Night
    document.body.style.backgroundImage = "url('./images/night.jpg')";
    greetingRef.textContent = "Good Night, ";
  } else if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greetingRef.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    greetingRef.textContent = "Good Afternoon, ";
  } else if (hour < 22) {
    // Evening
    document.body.style.backgroundImage = "url('./images/evening.jpg')";
    greetingRef.textContent = "Good Evening, ";
  } else {
    // Night
    document.body.style.backgroundImage = "url('./images/night.jpg')";
    greetingRef.textContent = "Good Night, ";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    nameRef.textContent = "[Enter Name]";
  } else {
    nameRef.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      nameRef.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focusRef.textContent = "[Enter Focus]";
  } else {
    focusRef.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focusRef.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

nameRef.addEventListener("keypress", setName);
nameRef.addEventListener("blur", setName);
focusRef.addEventListener("keypress", setFocus);
focusRef.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();