const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarDoor = document.createElement("div");
const calendarDoorText = document.createElement("div");

const calendarDays = 24;

console.log("test1");

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    // console.log(createCalendar);

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);
    console.log("test2");

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);
    console.log("test3");
  }
};

// function myFunction() {
calendarButton.addEventlistener("click", createCalendar());
// console.log(createCalendar);
// }
// myFunction();
