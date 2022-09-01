let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Pyhton, C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = " İrem " ;
value += "Oğulluk"; // value = value + "Oğulluk"  

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Caz" ); // firstName + " " + ...

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length-1]; 

// Index Of 

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l");

// Char At 

value = firstName.charAt(0);
value = firstName.charAt(firstName.length -1);

// Split 

value = langs.split(",");

// Replace 

value = langs.replace("Pyhton, CSS");

// Includes

value = langs.includes("C++");


console.log(value);