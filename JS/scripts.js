var add = document.getElementById("addElem");
var list = document.getElementById("list");

add.addEventListener("click", function() {
  var liItemsCount = document.getElementsByTagName("li").length;
  var element = document.createElement("li");
  element.innerHTML = "item " + liItemsCount;

  list.appendChild(element);
  console.log(liItemsCount + 1);
});
