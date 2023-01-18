const frames = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const frames2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
const frames3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function trackScore(frames) {
  let score = 0;
  let temp = frames.length == 20 ? 2 : 3;

  for (let i = 0; i < frames.length - temp; i += 2) {
    let frame = [];

    frame.push(frames[i]);
    frame.push(frames[i + 1]);
    let sum = 0;
    for (let j = 0; j < 2; j++) sum += frame[j];

    // open frame case
    if (sum < 10) {
      score += sum;
    }

    // spare case
    else if (sum == 10 && frames[i] != 10) {
      score += sum + frames[i + 2];
    }

    // strike case
    else if (score == 10 && frames[i + 1] == 0) {
      if (frames[i + 2] != 10) score += (10 + frames[i + 2]);
      else {
        if (i < frames.length - 4) score += 10 + 10 + frames[i + 4];
      }
    }
  }

  // calculating for last frame
  if (frames.length == 20) score = score + frames[18] + frames[19];
  else score = score + frames[18] + frames[19] + frames[20];

  return score;
}

console.log(trackScore(frames));
console.log(trackScore(frames2));
console.log(trackScore(frames3));

module.exports = { trackScore }; 