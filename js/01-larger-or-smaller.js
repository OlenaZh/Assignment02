/*eslint-env browser*/
var integer1 = window.prompt ("Enter the first integer");
var integer2 = window.prompt ("Enter the second integer");
if (parseInt(integer1, 10)  > parseInt(integer2, 10)) {
    document.write ("The larger of "+ integer1+ " and "+ integer2+ " is "+ integer1+ ".");
} else if (parseInt(integer2, 10) > parseInt(integer1, 10)) {

    document.write("The larger of "+ integer1+" and "+ integer2+ " is "+ integer2+ ".");
} else {
    document.write("The values "+ integer1+ " and "+integer2+ " are equal.");
}