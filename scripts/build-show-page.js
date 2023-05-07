
// const showData = [
//   {
//     date: "Mon Sept 06 2021",
//     place: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     place: "Pier 3 East",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     place: "View Lounge",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     place: "Hyatt Agency",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     date: "Fri Nov 26 2021",
//     place: "Moscow Center",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     place: "Press Club",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
// ];
// const showList = document.getElementById("schedule__list");

// function createEntry(show) {
//   const showItem = document.createElement("li");
//   showItem.classList.add("schedule__item");

//   const showBox = document.createElement("div");
//   showBox.classList.add("schedule__info");

//   const showDate = document.createElement("p");
//   showDate.innerText = "Date";
//   showDate.classList.add("schedule__main");

//   const showDay = document.createElement("p");
//   showDay.innerText = show.date;
//   const dateObj = new Date(show.date);

//   showDay.innerText = dateObj.toDateString();
//   showDay.classList.add("schedule__secondary");
//   showDay.classList.add("schedule__secondary--bold");

//   const showVenue = document.createElement("p");
//   showVenue.innerText = "Venue";
//   showVenue.classList.add("schedule__main");

//   const showPlace = document.createElement("p");
//   showPlace.innerText = show.place;
//   showPlace.classList.add("schedule__secondary");

//   const showLocation = document.createElement("p");
//   showLocation.innerText = "Location";
//   showLocation.classList.add("schedule__main");

//   const showCity = document.createElement("p");
//   showCity.innerText = show.location;
//   showCity.classList.add("schedule__secondary");

//   const showButton = document.createElement("button");
//   showButton.innerText = "buy tickets";
//   showButton.classList.add("schedule__btn");

//   showBox.appendChild(showDate);
//   showBox.appendChild(showDay);
//   showBox.appendChild(showVenue);
//   showBox.appendChild(showPlace);
//   showBox.appendChild(showLocation);
//   showBox.appendChild(showCity);
//   showBox.appendChild(showButton);

//   showItem.appendChild(showBox);
//   showList.appendChild(showItem);
// }

// function displayEntries() {
//   showList.innerText = "";
//   for (let i = 0; i < showData.length; i++) {
//     createEntry(showData[i]);
//   }
// }
// displayEntries();

// function paragraphClick(event) {
//   const paragraphs = document.querySelectorAll(".schedule__item");

//   paragraphs.forEach((paragraph) => {
//     paragraph.classList.remove("selected");
//   });

//   event.currentTarget.classList.add("selected");
// }

// const paragraphs = document.querySelectorAll(".schedule__item");
// paragraphs.forEach((paragraph) => {
//   paragraph.addEventListener("click", paragraphClick);
// });




const showList = document.getElementById("schedule__list");
const showData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
];

function createEntry(show) {
  const showItem = document.createElement("li");
  showItem.classList.add("schedule__item");

  const showBox = document.createElement("div");
  showBox.classList.add("schedule__info");

  const showDate = document.createElement("p");
  showDate.innerText = "Date";
  showDate.classList.add("schedule__main");

  const showDay = document.createElement("p");
  showDay.innerText = show.date;
  const dateObj = new Date(show.date);

  showDay.innerText = dateObj.toDateString();
  showDay.classList.add("schedule__secondary");
  showDay.classList.add("schedule__secondary--bold");

  const showVenue = document.createElement("p");
  showVenue.innerText = "Venue";
  showVenue.classList.add("schedule__main");

  const showPlace = document.createElement("p");

  showPlace.innerText = show.venue;
  showPlace.classList.add("schedule__secondary");

  const showLocation = document.createElement("p");
  showLocation.innerText = "Location";
  showLocation.classList.add("schedule__main");

  const showCity = document.createElement("p");
  showCity.innerText = show.location;
  showCity.classList.add("schedule__secondary");

  const showButton = document.createElement("button");
  showButton.innerText = "buy tickets";
  showButton.classList.add("schedule__btn");

  showBox.appendChild(showDate);
  showBox.appendChild(showDay);
  showBox.appendChild(showVenue);
  showBox.appendChild(showPlace);
  showBox.appendChild(showLocation);
  showBox.appendChild(showCity);
  showBox.appendChild(showButton);

  showItem.appendChild(showBox);
  showList.appendChild(showItem);
}

function displayEntries() {
  showList.innerText = "";
  for (let i = 0; i < showData.length; i++) {
    createEntry(showData[i]);
  }
}

displayEntries();

function paragraphClick(event) {
  const paragraphs = document.querySelectorAll(".schedule__item");

  paragraphs.forEach((paragraph) =>
  paragraph.addEventListener("click", paragraphClick)
   )};