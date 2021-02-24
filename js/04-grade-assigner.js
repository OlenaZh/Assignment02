/*eslint-env browser*/
var grade = prompt ("Enter the student\`s grade. Choose number between 1 and 100");
if (grade >= 90) {
    document.write ("You received an A");
} else if (grade >= 80) {
    document.write ("You received a B");
} else if (grade >= 70) {
    document.write ("You received a C");
} else if (grade >= 60) {
    document.write ("You received a D");
}  else if (grade > 100 && grade < 1) {
    alert ("Only numbers between 1 and 100 are accepted");
} else  {
    document.write ("You received an F");
}



