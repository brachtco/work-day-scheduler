/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var titleEl = $("<h1>");
var paraEl = $("<p>");
var currentDayEl = $("#currentDay");
var hour9El = $("#hour-9");
var hour10El = $("#hour-10");
var hour11El = $("#hour-11");
var saveButtonEl = $(".saveBtn");

function displayCurrentDay() {
  var currDay = dayjs().format("MMMM D, YYYY");
  currentDayEl.text(currDay);
}
displayCurrentDay();

function getUserInputFromStorage(userInput, parentElement) {
  var todos = localStorage.getItem(userInput, parentElement);
}

function saveuserInputToStorage(userInput, parentElement) {
  localStorage.setItem(parentElement, userInput);
}

function renderRows() {
  var container = $("<div>");
  container.addClass("container-lg px-5");
  var rowEl = $("<div>");
  rowEl.addClass("row time-block");
  var time = $("<div>");
  time.addClass("col-2 col-md-1 hour text-center py-3");
  var textArea = $("textarea");
  textArea.addClass("col-8 col-md-10 description");
  saveButtonEl.addClass("btn saveBtn col-2 col-md-1");
  var icon = $("i");
  icon.addClass("fas fa-save");

  //container.appendChild(rowEl, textArea, saveButtonEl, icon);
}

renderRows();

for (i = 0; i < saveButtonEl.length; i++) {
  saveButtonEl[i].addEventListener("click", function (event) {
    var userInput = event.target.previousElementSibling.value;
    var parentElement = event.target.parentElement.getAttribute("id");
    console.log(event.target.parentElement.getAttribute("id"));
    event.target.parentElement.getAttribute("id");
    saveuserInputToStorage(userInput, parentElement);
    getUserInputFromStorage(userInput, parentElement);
  });
}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
