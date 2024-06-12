//Array containing events
const companyEvents = [
  {
    title: "Tech Summit Nairobi",
    date: new Date(2024, 5, 14), // Month is zero-based, so 5 is June
    location: "KICC, Nairobi, Kenya",
    attendees: new Set(["Alice", "Kate", "Charles"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  },

  {
    title: "Startup Pitch Competition Mombasa",
    date: new Date(2024, 5, 17),
    location: "Mombasa Beach Hotel, Mombasa, Kenya",
    attendees: new Set(["David", "Jason", "Phoebe","Brandon","Sheila"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  },

  {
    title: "Blockchain Conference Kisumu",
    date: new Date(2024, 5, 13),
    location: "Acacia Premier Hotel, Kisumu, Kenya",
    attendees: new Set(["Viola", "Henry", "Nicole","Sydney","Trizah","Mark"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  },

  {
  title: "AI Workshop",
    date: new Date(2024, 6, 12),
    location: "iHub, Nairobi, Kenya",
    attendees: new Set(["John", "Kate", "Michael","Rita"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  },

  {
    title: "Data Science Symposium",
    date: new Date(2024, 6, 15),
    location: "Strathmore University, Nairobi, Kenya",
    attendees: new Set(["Lucy", "Oliver", "Patricia"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  },

  {
    title: "Tech Career Fair",
    date: new Date(2024, 6, 21),
    location: "Safaricom Stadium, Nairobi, Kenya",
    attendees: new Set(["Sam", "Tina", "Victor", "Christine"]),
    toJSON: function() {
      return {
          title: this.title,
          date: this.date,
          location: this.location,
          attendees: [...this.attendees],
          formattedDate: this.date.toLocaleDateString("en-US")
      };
    }
  }
];

//Use of .forEach()to console title and date of each event
companyEvents.forEach(event=>{
  console.log(`Title: ${event.title}, Date:${event.date.toLocaleDateString('en-US')}`)
});

//Use of Object.entries()to get property and values of first event
function displayFirstEventDetails() {
  const firstEvent = companyEvents[0];
  const tableBody = document.querySelector("#events-table tbody");
  tableBody.innerHTML = ""; 
  const row = document.createElement("tr");
  const entries = Object.entries(firstEvent);
  const headerMap = {
      "title": "Title",
      "date": "Date",
      "location": "Location",
      "attendees": "Attendees"
  };
  const values = {
      "Title": "",
      "Date": "",
      "Location": "",
      "Attendees": ""
  };

  // Populate the values object
  entries.forEach(([key, value]) => {
      if (key === "attendees") {
          value = [...value].join(", ");
      } else if (value instanceof Date) {
          value = value.toLocaleDateString("en-US");
      }
      if (headerMap[key]) {
          values[headerMap[key]] = value;
      }
  });

  // Populate the row with property values
  for (let key in values) {
      const cell = document.createElement("td");
      cell.textContent = values[key];
      row.appendChild(cell);
  }
  tableBody.appendChild(row);
}
  document.addEventListener("DOMContentLoaded", () => {
  displayFirstEventDetails();
});

  

//Array that display events happening in the next 7 days
function filterUpcomingEvents(event) {
  const currentDate = new Date();
  const sevenDaysFromNow = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  return event.date >= currentDate && event.date <= sevenDaysFromNow;
}
// Function to filter events and update the table
function filterEvents() {
  const upcomingEvents = companyEvents.filter(filterUpcomingEvents);
  displayEvents(upcomingEvents);
}

//Function to display all events in the table
function displayAllEvents() {
  console.log("Displaying all events...");
  const tableBody = document.querySelector("#events-table tbody");
  console.log("Table body:", tableBody);
  tableBody.innerHTML = ""; 

  companyEvents.forEach(event => {
      console.log("Processing event:", event);
      const row = document.createElement("tr");

  Object.entries(event).forEach(([key, value]) => {
    if (typeof value !== 'function') {
     console.log("Processing property:", key, value);
     const cell = document.createElement("td");
  
     if (key === "date" && value instanceof Date) {
        value = value.toLocaleDateString("en-US");
      }
   
      if (key === "attendees" && value instanceof Set) {
          value = [...value].join(", ");
      }
      cell.textContent = value;
      row.appendChild(cell);
      }
      });

      tableBody.appendChild(row);
  });
}


//Create a WeakMap to store event organizers
const eventOrganizer = new WeakMap();
const eventOne = {title: 'Tech Summit Nairobi'};
const eventTwo = {title: 'Startup Pitch Competition Mombasa'};
const eventThree = {title: 'Blockchain Conference Kisumu'};
const eventFour = {title: 'AI Workshop'};
const eventFive = {title: 'Data Science Symposium'};
const eventSix = {title: 'Tech Career Fair'};

eventOrganizer.set(eventOne, 'Steven Gacheru');
eventOrganizer.set(eventTwo, 'Kingsley Otieno');
eventOrganizer.set(eventThree, 'Valerie Gesicho');
eventOrganizer.set(eventFour, 'Anita Waithera');
eventOrganizer.set(eventFive, 'Flaviour Masitsa');
eventOrganizer.set(eventSix, 'Jewel Amani');

function organizerEvent (event){
  const organizer = eventOrganizer.get(event);
  if (organizer) {
    console.log(`The organizer for ${event.title} is ${organizer}`);
  }
  else{
    console.log('The organizer is found for this event ');
  }
}
organizerEvent(eventOne);
organizerEvent(eventTwo);
organizerEvent(eventThree);
organizerEvent(eventFour);
organizerEvent(eventFive);
organizerEvent(eventSix);

//extraction of title,date and location properties
function displayEvents(events) {
  const tableBody = document.querySelector("#events-table tbody");
  tableBody.innerHTML = ""; 
  events.forEach(event => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${event.title}</td>
          <td>${event.date.toLocaleDateString()}</td>
          <td>${event.location}</td>
          <td>${[...event.attendees].join(", ")}</td>
      `;
      tableBody.appendChild(row);
      console.log(JSON.stringify(events, null, 2));
  });
}

//function to add attendee to an event
function addAttendeeToEvent(eventTitle, attendeeName) {
  for (let i = 0; i < companyEvents.length; i++) {
      if (companyEvents[i].title === eventTitle) {
          companyEvents[i].attendees.add(attendeeName);
          console.log(`Added ${attendeeName} to ${eventTitle}`);
          displayEvents(companyEvents); 
      }
          else{
            console.log(`Event title not found.`);
          }
      }
  }
  
// Function to prompt user for event title and attendee name
function addAttendee() {
  const eventTitle = prompt("Enter the event title:");
  const attendeeName = prompt("Enter the attendee name:");
  if (eventTitle && attendeeName) {
      addAttendeeToEvent(eventTitle, attendeeName);
  } else {
      alert("Event title and attendee name are required.");
  }
}

//Using reduce to find most attendees
function mostAttendees(events) {
  return events.reduce(function(maxEvent, currentEvent) {
    if (currentEvent.attendees.size > maxEvent.attendees.size) {
      return currentEvent;
    } else {
      return maxEvent;
    }
  });
}
const eventMostAttendees = mostAttendees(companyEvents);
console.log(`Event with the most attendees:
  Title:${eventMostAttendees.title};
  Date: ${eventMostAttendees.date.toLocaleDateString("en-US")};
  Location: ${eventMostAttendees.location};
  Attendees:${[...eventMostAttendees.attendees].join(',')}`);

  //Using splice to delete events
  function deleteEvent() {
    const title = prompt('Enter the title of the event you want to delete:');
    if (title) {
    const index = companyEvents.findIndex(event => event.title === title);
    if (index !== -1) {
    companyEvents.splice(index, 1);
    console.log('Event deleted successfully.');
    displayEvents(companyEvents);
        } else {
            console.log('Event not found.');
        }
    } else {
        console.log('No event title provided.');
    }
}

//Undoing deletion
let deletedEvent = null; 

function deleteEvent() {
  const title = prompt('Enter the title of the event you want to delete:');
    
  if (title) {
  const index = companyEvents.findIndex(event => event.title === title);
        
  if (index !== -1) {
  deletedEvent = companyEvents.splice(index, 1)[0];
  console.log('Event deleted successfully.');
  displayEvents(companyEvents);
    } else {
            console.log('Event not found.');
        }
    } else {
        console.log('No event title provided.');
    }
}

function undo() {
  if (deletedEvent) {
    companyEvents.push(deletedEvent);
    console.log('Event has been restored.');
    displayEvents(companyEvents);
    deletedEvent = null; 
    } else {
        console.log('No event to restore.');
    }
}
  