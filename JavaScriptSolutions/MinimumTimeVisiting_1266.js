const minimumTimeVisiting = (points) => {
  let totalTime = 0;

  for (let i = 0; i < points.length - 1; i++) {
    // access point x,y coordinates
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    // calculate x,y distance
    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);

    //add the greater distance(min moves in seconds to reach next point) to totalTime
    //sum of each greater distance of min moves will result in the total time required
    let time = Math.max(dx, dy);
    totalTime += time;
  }

  return totalTime;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minimumTimeVisiting(points));
