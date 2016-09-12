var name = "Andrew James";
var role = "Full Stack Dev";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
  "name": "Andrew",
  "age": 35,
  "contact": {
    "email":"you@youremail.com",
    "mobile": "(555)555-5555",

  },
  "biopic": "images/me.jpg"
}


var email = HTMLemail.replace("%data%", bio.contact.email);
var phone = HTMLmobile.replace("%data%", bio.contact.mobile);
var biopic = HTMLbioPic.replace("%data%", bio.biopic);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#lets-connect').append(email);
$('#lets-connect').append(phone);
$('#main').append(biopic);
//
