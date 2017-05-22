var a = 3;
var b = 5;
var c;

// alert( "description of alerted_value: " + alerted_value );
alert("var a = 3;\nvar b = 5;\nvar c;\n_____________\n" +
	  "a + b = " + (a + b) + "\n" +
	  "a - b = " + (a - b) + "\n" +
	  "a * b = " + (a * b) + "\n" +
	  "a / b = " + (a / b) + "\n" +
	  "a % b = " + (a % b) + "\n" +
	  "a += b = " + (a += b) + "\n" +
	  "a -= b = " + (a -= b) + "\n" +
	  "a *= b = " + (a *= b) + "\n" +
	  "a /= b = " + (a /= b) + "\n" +
	  "a %= b = " + (a %= b) + "\n" +
	  "a == b = " + (a == b) + "\n" +
	  "a != b = " + (a != b) + "\n" +
	  "a > b = " + (a > b) + "\n" +
	  "a < b = " + (a < b) + "\n" +
	  "!a && !c = " + (!a && !c) + "\n" +
	  "!a || !c = " + (!a || !c) + "\n"
     );


//Declare the variable first_name and assign it with the value of your first name;
var first_name = "Ye";
//Declare the variable last_name and assign it with the value of your last name;
var first_name = "Yang";
//Declare the variable email and assign it with the value of your email;
var email = "yang0237@algonquinlive.com";
//Declare the variable output;
var output;
//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
output = " My name is " + first_name + " " + last_name + "." + " " + " You can contact me at " + email + "."; 

//Print output using alert();
alert(output);

//Print experiment using console.log()
console.log(output);
