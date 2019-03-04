// Code your solution in this file


function findMatching(drivers, name) {
  const result = drivers.filter(driver => driver == name)
  return result;
}