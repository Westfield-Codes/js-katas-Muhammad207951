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