/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
/* Var Alert */
// make a string variable named color, set it equal to your favorite color.
var color = "red";
// alert the message" "My favorite color is " plus the variable name, outside the quotes.
alert ("My favorite color is " + color);

/* Prompt */
/* Var Alert Prompt */
// make a string variable for color, but prompt the user for their favorite color.
var color = prompt ("What is your favorite color?");
// alert color plus " is a nice color!" - note the space in the quotes.
alert ("Your favorite color is " + color);
/* Prompt with Conditional */


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt ("What is you favorite icecream?" );
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt ( "How many scoops?" );
// alert "You want " scoops "scoops of " flavor
alert ("You want " + scoops + " scoops of " + flavor);

/* Prompt with Conditional */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What is you favorite icecream?" );
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt( "How many scoops?" );
if (scoops > 3) alert ( "You don't get none." )
// alert "You want " scoops "scoops of " flavor
else alert ("You want " + scoops + " scoops of " + flavor);

/* PET */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a variable for a pet type, prompt user for it 
var type = prompt(" What is your pet type? " )
// make a variable for a pet name, prompt user for it
var name1 = prompt (" What is your pet name?" )
// alert "You have a pet type named pet name 
alert ( "Your pet type is " + type + " and it name is " +  name1 ) 


/* Prompt with Conditional */
/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var type = prompt(" What is your pet type? Cat or Dog?")
// make a variable for pet name, prompt user for it
var name1 = prompt (" What is your pet name?" )
// alert "You have a pet type named pet name 
alert ( "Your pet type is " + type + " and its name is " +  name1 ) 
// if pet is a dog, say "I like dogs, too!"
if (type == "Dog" ) alert ("I like dogs, too!" )
// if it is a cat, say "I'm allergic to cats"
else if (type == "Cat") alert (" I'm allergic to cats ")
// If it is not a dog or a cat, say "what an interesting pet!"
else alert (" what an interesting pet! ")
