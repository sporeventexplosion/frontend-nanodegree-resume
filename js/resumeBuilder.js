"use strict";

var bio = {
  "name": "Random Guy",
  "role": "Web Developer",
  "contacts": {
    "mobile": "+1 555-555-5555",
    "email": "random@example.com",
    "github": "randomperson2574",
    "twitter": "@random433",
    "location": "Qeqqata, Greenland"
  },
  "welcomeMessage": "*Insert welcome message here*",
  "skills": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],
  "biopic": "images/fry.jpg"
};


var education = {
  "schools": [
    {
      "name": "School No. 1",
      "location": "Kolsky District, Murmansk Oblast, Russia",
      "degree": "*Insert name of degree here*",
      "majors": [
        "Major 1",
        "Major 2",
        "Major 3"
      ],
      "dates": 12312001, // Dates now in mm/dd/yyyy format. Leading 0 will not be included due to problems using the octal format
      "url": "http://www.example.com/"
    },
    {
      "name": "School No. 2",
      "location": "Yukon-Koyukuk, AK, United States",
      "degree": "*Insert name of degree here*",
      "majors": [
        "Major 1",
        "Major 2",
        "Major 3"
      ],
      "dates": 12312004,
      "url": "http://www.example.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Course No. 1",
      "school": "The Random Online Course Corporation",
      "date": 12312007,
      "url": "http://www.example.com/"
    },
    {
      "title": "Course No. 2",
      "school": "The Random Online Course Corporation",
      "date": 12312008,
      "url": "http://www.example.com/"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Employer No. 1",
      "title": "Title No. 1",
      "location": "Deseado Dept, Santa Cruz Province, Argentina",
      "dates": "September 14, 2009 - May 22, 2011",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "employer": "Employer No. 2",
      "title": "Title No. 2",
      "location": "Banks Island, NT, Canada",
      "dates": "June 18, 2011 - Present",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Project No. 1",
      "dates": "August 2, 2013 - November 29, 2014",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Project No. 2",
      "dates": "June 5, 2014 - Present",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

//A quick function for formatting the template strings
var formatHTML = function (templateString, str) {
  return templateString.replace("%data%", str);
};

//A function for resolving the mm-dd-yyyy integer date to a string. Invalid input is not explicitly handled
var resolveDate = function ( date ) {

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var month = (date - date % 1000000) / 1000000;
  var day = (date % 1000000 - date % 10000) / 10000;
  var year = date % 10000;
  return months[month - 1] + " " + day + ", " + year; //The day and year will be automatically converted to a string. 1 is subtracted to make sure the index is correct.
};

bio.display = function () {
  var header = $("#header"); //Query all DOM elements first to avoid multiple queries.
  var contacts = $("#topContacts");
  header.prepend(formatHTML(HTMLheaderRole, this.role));//Prepend is required so the list of contacts stay at the bottom. Order also needs to be reversed.
  header.prepend(formatHTML(HTMLheaderName, this.name));

  contacts.append(formatHTML(HTMLmobile, this.contacts.mobile));
  contacts.append(formatHTML(HTMLemail, this.contacts.email));
  contacts.append(formatHTML(HTMLgithub, this.contacts.github));
  contacts.append(formatHTML(HTMLtwitter, this.contacts.twitter));
  contacts.append(formatHTML(HTMLlocation, this.contacts.location));

  header.append(formatHTML(HTMLwelcomeMsg, this.welcomeMessage));
  header.append(formatHTML(HTMLbioPic, this.biopic));

  header.append(HTMLskillsStart);

  var skills = $("#skills"); //This has to be queried later due to being only added by the previous line

  for (var i in this.skills) {
    skills.append(formatHTML(HTMLskills, this.skills[i]));
  }

};

education.display = function () {
  var educationDiv = $("#education");
  //First loop through all the schools
  for (var i in this.schools) {
    educationDiv.append(HTMLschoolStart);
    var lastSchoolEntry = $(".education-entry:last"); //Gets the school entry just added
    lastSchoolEntry.append(formatHTML(HTMLschoolName, this.schools[i].name) + formatHTML(HTMLschoolDegree, this.schools[i].degree)); //Again, concatenation has to be done HTMLschoolName and HTMLschoolDegree are not fully formed HTML elements
    lastSchoolEntry.append(formatHTML(HTMLschoolDates, resolveDate(this.schools[i].dates))); //Formats the date before displaying it
    lastSchoolEntry.append(formatHTML(HTMLschoolLocation, this.schools[i].location));
    //Display majors
    for (var j in this.schools[i].majors) {
      lastSchoolEntry.append(formatHTML(HTMLschoolMajor, this.schools[i].majors[j]));
    }
  }

  //Add the Online Classes title
  educationDiv.append(HTMLonlineClasses);

  for (var i in this.onlineCourses) {
    educationDiv.append(HTMLschoolStart);

    var lastCourseEntry = $(".education-entry:last");
    lastCourseEntry.append(formatHTML(HTMLonlineTitle, this.onlineCourses[i].title) + formatHTML(HTMLonlineSchool, this.onlineCourses[i].school));
    lastCourseEntry.append(formatHTML(HTMLonlineDates, resolveDate(this.onlineCourses[i].date)));
    lastCourseEntry.append(formatHTML(HTMLonlineURL, this.onlineCourses[i].url));
  }
};

work.display = function () {
  var jobs = $("#workExperience");

  for (var i in this.jobs) {
    jobs.append(HTMLworkStart);

    var lastWorkEntry = $(".work-entry:last"); //Get the last work entry i.e. the one just appended

    lastWorkEntry.append(formatHTML(HTMLworkEmployer, this.jobs[i].employer) + formatHTML(HTMLworkTitle, this.jobs[i].title)); //HTMLworkEmployer and HTMLworkTitle are actually two halves of the same <a> element so they have to be concatenated
    lastWorkEntry.append(formatHTML(HTMLworkLocation, this.jobs[i].location));
    lastWorkEntry.append(formatHTML(HTMLworkDates, this.jobs[i].dates));
    lastWorkEntry.append(formatHTML(HTMLworkDescription, this.jobs[i].description));
  }
};

projects.display = function () {
  var projectsDiv = $("#projects");

  for (var i in this.projects) {
    projectsDiv.append(HTMLprojectStart);

    var lastProjectEntry = $(".project-entry:last");

    lastProjectEntry.append(formatHTML(HTMLprojectTitle, this.projects[i].title));
    lastProjectEntry.append(formatHTML(HTMLprojectDates, this.projects[i].dates));
    lastProjectEntry.append(formatHTML(HTMLprojectDescription, this.projects[i].description));

    //Insert images
    for (var j in this.projects[i].images) {
      lastProjectEntry.append(formatHTML(HTMLprojectImage, this.projects[i].images[j]));
    }
  }
};
