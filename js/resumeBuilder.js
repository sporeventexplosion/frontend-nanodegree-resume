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
