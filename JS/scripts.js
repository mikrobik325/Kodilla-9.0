var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];

//var allNames = femaleNames.concat(maleNames);
var allNames = maleNames.concat(femaleNames);

var newMaleNameStefan = allNames.push('Stefan');

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {
  var newMaleName = allNames.push(newName);
  console.log(allNames);
} else {
  console.log("false");
}
