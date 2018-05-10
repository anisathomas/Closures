var wrapLog = function (callback, name) {

  return function(){

     //console.log(callback.apply(null, arguments)); //answer of area/volume
     var args = Array.prototype.slice.call(arguments); //parameters for callback aka parameters x,y for area and x,y,z for volume
     console.log(name + "(" + args + ") => " + callback.apply(null, arguments));


  }

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6



var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24



// Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that internally invokes (calls)
// callback during its execution and also logs the name, input parameters, and return value of the callback function.
// Following is a template with example usage.