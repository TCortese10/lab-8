//creates student object
let student = {
    name: "Michael",
    age: 34,
    enrolled: true,
    courses: ["Math", "Science", "Geography"],
    display: function() {
        console.log("Student Information");
        console.log("--------------------");
        console.log("Name: " +  this.name);
        console.log("Age: " +  this.age);
        console.log("Enrollment Staus: " +  this.enrolled);
        console.log("Courses: " +  this.courses);

    }
};

//displays information to the console
console.log("Part 1: Understanding and Creating Objects");
console.log("------------------------------------------");
console.log(student.name);
console.log(student.age);
student.display();
console.log("");

//converting into JSON
console.log("Part 2: Working With JSON");
console.log("---------------------------");
let jsonString = JSON.stringify(student);
console.log("Converted into JSON: " + jsonString);
console.log("");

//converting into object
let objConvert = jsonString;
let javaObject = JSON.parse(objConvert);
console.log("Converted back to an Object:")
console.log(javaObject);
console.log("");

console.log("Part 3: Using Destructuring Assignment");
console.log("--------------------------------------");
let { name, courses } = student;
let scores = [77, 91, 88, 56, 73];
let [firstScore, secondScore] = scores;

console.log(firstScore); 
console.log(secondScore);  