'use strict';

var bio = {
  'name': 'Hanwen Liu',
  'role': 'Professional Student',
  'contacts': {
    'mobile': 'N/A',
    'email': 'fouzzerjunk@gmail.com',
    'github': 'sporeventexplosion',
    'twitter': '@fouzzerjunk',
    'location': 'İzmir, Turkey'
  },
  'welcomeMessage': 'Pure, condensed awesomeness!',
  'skills': [
    'PHP',
    'JavaScript',
    '3D Modeling',
    'HTML/CSS',
    'Creativity'
  ],
  'biopic': 'images/icon.png'
};


var education = {
  'schools': [
    {
      'name': 'Chinese elementary school',
      'location': 'Beijing, China',
      'degree': 'No degree received (Not in a university ... yet)',
      'majors': [
        'N/A'
      ],
      'dates': 4312010, // Dates now in mm/dd/yyyy format. Leading 0 will not be included due to problems using the octal format
      'url': '' //Not applicable
    },
    {
      'name': 'Canadian elementary school "gifted" program',
      'location': 'Ottawa, ON, Canada',
      'degree': 'N/A',
      'majors': [
        'N/A',
      ],
      'dates': 4242014,
      'url': 'http://www.ocdsb.ca/'
    },
    {
      'name': 'A certain Turkish international school',
      'location': 'İzmir, Turkey',
      'degree': 'N/A',
      'majors': [
        'N/A'
      ],
      'dates': 3042015,
      'url': 'http://www.ocdsb.ca/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'How to use Git and Github',
      'school': 'Udacity',
      'date': 12312007,
      'url': 'http://www.udacity.com/'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'date': 5312015,
      'url': 'http://www.udacity.com/'
    }
  ]
};

var work = {
  'jobs': [
    {
      'employer': 'Me',
      'title': 'President',
      'location': 'My body',
      'dates': 'Date of birth - now',
      'description': 'Running a dictatorship'
    },
  ]
};

var projects = {
  'projects': [
    {
      'title': 'Oversized Cruise Ship (Fouzzship)',
      'dates': 'August 2014',
      'description': 'With a capacity of over 200,000, this is my largest cruise ship design (yet).',
      'images': [
        'images/fouzzship_1_md.png',
        'images/fouzzship_2_md.png'
      ]
    },
    {
      'title': 'Rittybox Website',
      'dates': 'October 2014 - Present',
      'description': 'A website for a "small company". Made to look similar to Apple\'s',
      'images': [
        'images/rittybox_1_md.png',
        'images/rittybox_2_md.png'
      ]
    }
  ]
};

//A quick function for formatting the template strings
var formatHTML = function (templateString, str) {
  return templateString.replace('%data%', str);
};

//A function for resolving the mm-dd-yyyy integer date to a string. Invalid input is not explicitly handled
var resolveDate = function ( date ) {

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var month = (date - date % 1000000) / 1000000;
  var day = (date % 1000000 - date % 10000) / 10000;
  var year = date % 10000;
  return months[month - 1] + ' ' + day + ', ' + year; //The day and year will be automatically converted to a string. 1 is subtracted to make sure the index is correct.
};

bio.display = function () {
  var header = $('#header'); //Query all DOM elements first to avoid multiple queries.
  var contacts = $('#topContacts, #footerContacts');

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

  var skills = $('#skills'); //This has to be queried later due to being only added by the previous line

  for (var i = 0; i < this.skills.length; i++) {
    skills.append(formatHTML(HTMLskills, this.skills[i]));
  }

};

education.display = function () {
  var educationDiv = $('#education');
  //First loop through all the schools
  for (var i = 0; i < this.schools.length; i++) {
    educationDiv.append(HTMLschoolStart);
    var lastSchoolEntry = $('.education-entry:last'); //Gets the school entry just added
    lastSchoolEntry.append(formatHTML(HTMLschoolName, this.schools[i].name) + formatHTML(HTMLschoolDegree, this.schools[i].degree)); //Again, concatenation has to be done HTMLschoolName and HTMLschoolDegree are not fully formed HTML elements
    lastSchoolEntry.append(formatHTML(HTMLschoolDates, resolveDate(this.schools[i].dates))); //Formats the date before displaying it
    lastSchoolEntry.append(formatHTML(HTMLschoolLocation, this.schools[i].location));
    //Display majors
    for (var j = 0; j < this.schools[i].majors.length; j++) {
      lastSchoolEntry.append(formatHTML(HTMLschoolMajor, this.schools[i].majors[j]));
    }
  }

  //Add the Online Classes title
  educationDiv.append(HTMLonlineClasses);

  for (var i = 0; i < this.onlineCourses.length; i++) {
    educationDiv.append(HTMLschoolStart);

    var lastCourseEntry = $('.education-entry:last');
    lastCourseEntry.append(formatHTML(HTMLonlineTitle, this.onlineCourses[i].title) + formatHTML(HTMLonlineSchool, this.onlineCourses[i].school));
    lastCourseEntry.append(formatHTML(HTMLonlineDates, resolveDate(this.onlineCourses[i].date)));
    lastCourseEntry.append(formatHTML(HTMLonlineURL, this.onlineCourses[i].url));
  }
};

work.display = function () {
  var jobs = $('#workExperience');

  for (var i = 0; i < this.jobs.length; i++) {
    jobs.append(HTMLworkStart);

    var lastWorkEntry = $('.work-entry:last'); //Get the last work entry i.e. the one just appended

    lastWorkEntry.append(formatHTML(HTMLworkEmployer, this.jobs[i].employer) + formatHTML(HTMLworkTitle, this.jobs[i].title)); //HTMLworkEmployer and HTMLworkTitle are actually two halves of the same <a> element so they have to be concatenated
    lastWorkEntry.append(formatHTML(HTMLworkLocation, this.jobs[i].location));
    lastWorkEntry.append(formatHTML(HTMLworkDates, this.jobs[i].dates));
    lastWorkEntry.append(formatHTML(HTMLworkDescription, this.jobs[i].description));
  }
};

projects.display = function () {
  var projectsDiv = $('#projects');

  for (var i = 0; i < this.projects.length; i++) {
    projectsDiv.append(HTMLprojectStart);

    var lastProjectEntry = $('.project-entry:last');

    lastProjectEntry.append(formatHTML(HTMLprojectTitle, this.projects[i].title));
    lastProjectEntry.append(formatHTML(HTMLprojectDates, this.projects[i].dates));
    lastProjectEntry.append(formatHTML(HTMLprojectDescription, this.projects[i].description));

    //Insert images
    for (var j = 0; j < this.projects[i].images.length; j++) {
      //Put the image in a wrapper so it can be sized
      $('<div>').addClass('project-image-wrapper').append(formatHTML(HTMLprojectImage, this.projects[i].images[j])).appendTo(lastProjectEntry);
    }
  }
};

//Display the map in #mapdiv
$('#mapDiv').append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
