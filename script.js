//creates student object
let student = {
    name: "Michael",
    age: 34,
    enrolled: true,
    courses: ["Math", "Science", "Geography"],
    display: function () {
        console.log("Student Information");
        console.log("--------------------");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Enrollment Staus: " + this.enrolled);
        console.log("Courses: " + this.courses);

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
let { name, courses } = student; //destructuting name and courses from student
let scores = [77, 91, 88, 56, 73];
let [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);
console.log("");

console.log("Part 4: The Spread Operator");
console.log("----------------------------");
let copiedStudent = { ...student, graduationYear: 2030 }; //copy original object and added grad year 2030
console.log(copiedStudent.graduationYear); //output grad year
let courses2 = ["History", "English", "Politics"];
let combinedArr = [...student.courses, ...courses2]; //combining courses
console.log(combinedArr); //log updated list
console.log("");

console.log("Part 5: Object Methods");
console.log("-----------------------");
student.addCourse = function () { //creates new method for the student object, aadds course
    this.courses.push("Advanced Statistics");
};
student.addCourse();
console.log("Output of student object with added course method:")
console.log(student.courses);
student.getTotalCourses = function () { //create function to return length
    return this.courses.length;
};
let total = student.getTotalCourses();
console.log("Total Courses: " + total); 

//passes the sores array to this function, reads through it and returns the average
console.log("*Bonus Task*");
console.log("------------");
function calculateAverage(arr) { 
    let sum = 0;
    for (let scores of arr) {
        sum += scores;

    }
    return sum / arr.length;
};
let average = calculateAverage(scores)
console.log("Grade Average is: " + average); //outputs average