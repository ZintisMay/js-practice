const jsonFile = require("./jsonFile")

let namesMale = ["John", "Kyle", "Alex", "Robert", "Vincent", "Theodore", "Walter", "Peter", "Emerson", "Zachary"]
let namesFemale = ["Abby", "Brittany", "Christine", "Diane", "Elizabeth", "Felicity", "Gina", "Heather", "Isadora", "Julie"]
let lastNames = ["Buttersworth", "Lawson", "Thorne", "Constantine", "Smith", "Silvers", "Woolsworth", "Yadlowsky", "Fern", "Dostoyevsky", "Mooney", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Wilson" ]
let allNames = [...namesMale, ...namesFemale]
let classes = ["Math", "Biology", "Physics", "English", "Physical Education", "Health" ]

const STUDENT = "Student"
const TEACHER = "Teacher"
const MALE = "Male"
const FEMALE = "Female"

function rand(hi){
  return Math.floor(Math.random() * hi)
}
function randBetween(lo, hi){
  let diff = hi - lo
  return lo + Math.floor(Math.random() * diff)
}

function randomGPA(){
  return (rand(41) / 10)
}

let dummyPeople = []

for(let x = 0; x < 100; x++){

  let randomFirstName = allNames[rand(allNames.length)]
  let randomLastName = lastNames[rand(lastNames.length)]
  let gender = namesMale.includes(randomFirstName) ? MALE: FEMALE
  let role = rand(10) ? STUDENT: TEACHER
  let age;
  let disciplinaryInfractions;
  let gpa;



  let person = {
    name:{
      first:randomFirstName,
      last:randomLastName
    },
    gender,
    role,
    age: role == STUDENT ? randBetween(14,19) : randBetween(24, 70),
  }
  if(role ==STUDENT ){
    disciplinaryInfractions = rand(5)
    gpa = randomGPA()
    person.disciplinaryInfractions = disciplinaryInfractions
    person.gpa = gpa
  }
  dummyPeople.push(person)
}

// console.log(dummyPeople)

let teacherCount = 0;
let studentCount = 0;
let maleCount = 0;
let femaleCount = 0;

dummyPeople.forEach(p => {
  if(p.role == TEACHER) teacherCount++
  if(p.role == STUDENT) studentCount++
  if(p.gender == MALE)maleCount++
  if(p.gender == FEMALE)femaleCount++
})

// console.log("teacherCount", teacherCount)
// console.log("studentCount", studentCount)
// console.log("maleCount", maleCount)
// console.log("femaleCount", femaleCount)

jsonFile.saveJson("dummyData.js", dummyPeople)