var triangle1Area = getTriangleArea (10, 15);
var triangle2Area = getTriangleArea (4, 5);
var triangle3Area = getTriangleArea (-1, 12);

function getTriangleArea(a, h) {
  if ((a > 0) && (h > 0)) {
  } else {  
  console.log("Nieprawidłowe dane");
  }
  
  return ((a * h) / 2);
  
}

console.log(triangle1Area);