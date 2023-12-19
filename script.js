//1.JSON iteration with for, for in, for of, for each loops
var json = [{
    "name" : "Jack", 
    "age"   : "27",
    "city" : "Chennai",
},
{
    "name" : "Bruce", 
    "age"   : "28",
    "city" : "Salem",
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var data = json[i];

    console.log(data);
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);

}

//for In
for (var key in json) {
  console.log(json[key]);
  console.log(json[key].name);
  console.log(json[key].age);
  console.log(json[key].city);

}
//for Of

for (let data of json) {
    console.log(data); 
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);
}

//for Each
json.forEach(function(data) { 
    console.log(data); 
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);

});

//2.Creating resume data in JSON Format
var myResume={
    "basics": {
      "name": "VINOTH.K",
      "email": "vinoth.d.victor@gmail.com",
      "phone": 8122411940,
      "degree": "BE",
      "location": {
        "address": "92-A, JJ Nagar, Pechiyamman Temple St, Erumapalayam Ittery Road",
        "pincode": 636015,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
    
    },
    "work": [
      {
        "company": "First American of India Pvt Ltd",
        "position": "Senior Process Associate",    
        "summary": "I have been working has Senior Process Assosciate since Dec, 2019",
      },
    ],
    "education": [
      {
        "institution": "Gananmani College of Technology",
        "department": "Computer Science and Engineering",
        "academy year" : "2012-2016"
      }
    ],
    "skills": [
      {
        "name": "HTML, CSS, Javascript",
        "level": "beginner",
      }
    ],
    "languages": [
      {
        "language": "Tamil, English, Telugu, Kannada",
      }
    ],
    
  }
  console.log(myResume);

