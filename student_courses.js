/*global module, console, require */

var Student = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseList = [];
};

Student.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

Student.prototype.courses = function () {
    return this.courseList;
};

Student.prototype.enroll = function (course) {
    if (this.courseList.indexOf(course) !== -1) {
        return;
    }
    
    if (this.hasConflict(course)) {
        console.log("error");
        throw new Error("Enrolled in course that conflicts with this one");
    }
    
    this.courseList.push(course);
    course.addStudent(this);
};

Student.prototype.hasConflict = function (course) {
    return this.courseList.some(function (enrolledCourse) {
        return enrolledCourse.conflictsWith(course);
    });
};

Student.prototype.courseLoad = function () {
    var departments = {};
    this.courseList.forEach(function (course) {
        departments[course.department] = departments[course.department] || 0;
        departments[course.department] += course.credits;
    });
    
    return departments;
};


var Course = function(name, department, credits, days, time) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.days = days;
    this.time = time;
    
    this.studentList = [];
};

Course.prototype.students = function () {
    return this.studentList;
};

Course.prototype.addStudent = function (student) {
    this.studentList.push(student);
};

Course.prototype.conflictsWith = function(course) {
    var time = this.time;
    
    return this.days.some(function (day) {
        if (course.days.indexOf(day) !== -1) {
            if (course.time === time) {
                return true;
            }
        }
    });
};

module.exports.Student = Student;
module.exports.Course = Course;

if (require.main === module) {
    var s1 = new Student("first", "last");
    var c1 = new Course("Psych 101", "Psychology", 3, ["Mon", "Wed", "Fri"] , 3);
    //var c2 = new Course("Psych 102", "Psychology", 4, ["Mon"] , 3);
    var c3 = new Course("CS 101", "Computer Science", 4, ["Tues", "Thurs"] , 3);
    
    s1.enroll(c1);
    s1.enroll(c3);
}