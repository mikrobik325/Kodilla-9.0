var text =
  "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var dinoUpperCased = dinosaur.toUpperCase();

var oneDinoInsteadAnotherDino = text.replace("Velociraptor", dinoUpperCased);

//console.log(oneDinoInsteadAnotherDino.length/2);

var partOfDinoReplacement = oneDinoInsteadAnotherDino.slice(0, 72);

console.log(partOfDinoReplacement);