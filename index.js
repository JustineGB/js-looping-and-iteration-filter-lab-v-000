// Code your solution in this file

function findMatching(drivers, name) {
  var name = new RegExp(drivers, 'gi');
  return array.filter(function(name) { return name.match(string); });
};

// function fuzzyMatch(array, string) {
//   var stringRegEx = new RegExp(string, 'g');
//   return array.filter(function(name) {
//     var newName = name.slice(0, string.length);
//     return newName.match(stringRegEx);
//   });
// };

// function matchName(array, string) {
//   return array.filter(function(driver) { return driver.name === string; });
// };