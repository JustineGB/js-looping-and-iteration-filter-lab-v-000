// Code your solution in this file

function findMatching(drivers, name) {
  var drivers = drivers.toLowerCase();
  var name = name.toLowerCase();
  const result = drivers.filter(driver => driver == name)
  return result;
}