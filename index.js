function findMatching (drivers, name) {
  return drivers.filter(function (nameMatch) {
    return nameMatch.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0, string.length) === string)
}

function matchName (drivers, name) {
  return drivers.filter(driver => driver.name === name)
}