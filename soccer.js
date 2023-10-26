
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
const getTotalPoints = results => {
  const games = results.split("");
  let totalScore = 0;
  games.forEach(game => {
    totalScore = totalScore + getPointsFromResult(game);
  });
  return totalScore;
}



// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = (...teams) => {
  teams.forEach(team => {
    // add points to each team object
    team.points = getTotalPoints(team.results);
  });

  // sort the teams.
  teams.sort((a, b) => b.points - a.points);

  // print out the teams in order. Go Sounders!
  teams.forEach(team => {
    console.log(`${team.name}: ${team.points}`);
  })
}



// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4