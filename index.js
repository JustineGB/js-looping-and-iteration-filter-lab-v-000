// Code your solution in this file


function findMatching(drivers, name) {
  const name1 = name.toLowerCase(name)
  const result = drivers.filter(driver => driver == name)
  return result;
}