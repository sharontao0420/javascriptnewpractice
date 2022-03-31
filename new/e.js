document.getElementById("myTitle").innerHTML =
    "Let's Read a Story in the Spaceship!";

/* document.getElementById("content").innerHTML =
    "Bear claw icing carrot cake chocolate oat cake carrot cake. Candy canes brownie topping pastry pastry topping chocolate bar. Chocolate chupa chups bear claw bear claw cupcake apple pie tiramisu topping apple pie. Donut tiramisu dragée chocolate biscuit. Shortbread biscuit lollipop tiramisu tiramisu jelly-o shortbread pie. Halvah tart biscuit chocolate cake danish carrot cake donut chocolate bar. Dessert powder icing sugar plum donut cupcake jelly beans. Bonbon wafer halvah chupa chups chocolate cake dessert pastry. Croissant caramels lemon drops caramels carrot cake lollipop jelly-o. Bear claw sugar plum wafer jujubes apple pie gingerbread fruitcake. Dragée topping tart caramels macaroon gummi bears. Oat cake caramels bear claw toffee muffin marshmallow. Apple pie carrot cake pudding lollipop cookie.";
*/ 

var questionOne = prompt("What is your name?");
document.getElementById("blankOne").innerHTML = "Beauty Princess " + questionOne;
document.getElementById("blankSix").innerHTML = questionOne;


var questionTwo = prompt("What's the day today?");
document.getElementById("blankTwo").innerHTML =  questionTwo;

var questionThree = prompt("Please enter the secret phrase. I know... I know.. you have no idea... That's ok, just guess!");
 document.getElementById("blankThree").innerHTML = questionThree;

var questionFour = prompt("Seriously .. too much I know this is not fun anymore.  Sorry.. but if you could please just guess and enter the correct amount of explamation points.. we will end this madness. ");
document.getElementById("blankFour").innerHTML = questionFour ;

var questionFive = prompt("What's your favorite animal?");
document.getElementById("blankFive").innerHTML =  questionFive;



var myName = "SharonTao";
console.log(myName);

var theMonth = "March";
var theYear = 2022;

console.log(theMonth + theYear);
