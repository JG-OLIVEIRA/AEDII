class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function calculateDistance(pointOne, pointTwo) {
  var powOne = Math.pow(pointOne.x - pointTwo.x, 2);
  var powTwo = Math.pow(pointOne.y - pointTwo.y, 2);

  return Math.floor(Math.sqrt(powOne + powTwo));
}

function minorDistance(vector, n) {
  var d = 999999999999999;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (calculateDistance(vector[i], vector[j]) < d) {
        d = calculateDistance(vector[i], vector[j]);
      }
    }
  }
  return d;
}

var p1 = new point(1, 1);
var p2 = new point(5, 5);
var p3 = new point(12, 12);

var example = [p1, p2, p3];

var result = minorDistance(example, 3);
console.log(result);
