const jsonFile = require("./jsonFile")
const schoolList = jsonFile.loadJson("./dummyData.js")
console.log(schoolList)

// All of the following problems will use the schoolList array from above

// 1a)
let arrayOfFullNames;
// I want you to create an array of strings based on the people in the array. The strings should look like:
// "John Smith"
// or "Jay Barrett"
// CODE STARTS HERE ////////////////////////////////////////

// CODE ENDS HERE ////////////////////////////////////////
console.log("1a)", "arrayOfFullNames", arrayOfFullNames)

// 1b)
let arrayOfFullNameAndRole;
// I want you to create an array of strings based on the people in the array. The strings should look like:
// "John Smith - Teacher"
// or "Jay Barrett - Student"
// CODE STARTS HERE ////////////////////////////////////////

// CODE ENDS HERE ////////////////////////////////////////
console.log("1b)", "arrayOfFullNameAndRole", arrayOfFullNameAndRole)

// 2a)
let arrayOfAges;
// I want an array of ages
// CODE STARTS HERE ////////////////////////////////////////

// CODE ENDS HERE ////////////////////////////////////////
console.log("2a)","arrayOfAges", arrayOfAges)

// 2b)
let orderedArrayOfAges;
// Now I want those ages to be sorted from lowest to highest
// CODE STARTS HERE ////////////////////////////////////////

// CODE ENDS HERE ////////////////////////////////////////
console.log("2b)","orderedArrayOfAges", orderedArrayOfAges)

// 3)
let editedSchoolList;
// I want a new schoolList based on the old one.
// The new list should have a field for teachers called "currentEmployee", which can be true or false
// The new list should have a field for students called "currentStudent", which can be true or false
// The new list should have a field for students called "expelled", which can be true or false
// I want any teacher younger than 65 to be "currentEmployee": true
// I want all students who are 17 or younger to be "currentStudent": true
// I want all students who are 18 or older to be "currentStudent": false
// I want all students who have had 4+ displinaryInfractions to be "expelled": true
// CODE STARTS HERE ////////////////////////////////////////

// CODE ENDS HERE ////////////////////////////////////////
console.log("4)","editedSchoolList", editedSchoolList)