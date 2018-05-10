



var countdownGenerator = function (x) {
  var i = x;
  return function(){
    if (i > 0){
      console.log("T-minus" + i + "...");
    } else if(i === 0){
      console.log("Blast Off!");
    } else{
      console.log("Rockets already gone, bub!");
    }
    return i--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!