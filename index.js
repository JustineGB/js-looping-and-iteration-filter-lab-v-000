// Code your solution in this file


function findMatching(drivers, name) {
  const name1 = name.toLowerCase(name)
  const drivers1 = drivers.toLowerCase(drivers)
  const result = drivers1.filter(driver => driver == name1)
  return result;
}