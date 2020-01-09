/*Set the spicy grade for pasta*/
var spice = {
  name: "Spice",
  type: "Chilli"
};

var hot = spice.name + " " + spice.type;

document.getElementById("demo1").innerHTML = hot;

var grade = ["How spicy? "];
var star = ["*"];
var chilly = grade.concat(star);
document.getElementById("demo").innerHTML = chilly;

function myFunction1() {
  chilly.push("*");
  document.getElementById("demo").innerHTML = chilly;
}

function myFunction2() {
  chilly.pop();
  document.getElementById("demo").innerHTML = chilly;
}

// Script to open and close sidebar
function menu_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function menu_close() {
  document.getElementById("mySidebar").style.display = "none";
}