export const computeAverage = (prelim, midterm, final) =>
  (prelim + midterm + final) /3;

const isPassing = (average) => average >= 75;

export default isPassing;