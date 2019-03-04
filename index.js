// Code your solution in this file


function findMatching(drivers, name) {
  var lcdrivers = drivers.toLowerCase();
  var lcname = name.toLowerCase();
  const result = drivers.filter(lcdriver => lcdriver == lcname)
  return result;
}