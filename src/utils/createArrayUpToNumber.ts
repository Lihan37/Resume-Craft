const createArrayUpToNumber = (n: number): number[] =>
  Array.from({ length: n }, (_, index) => index + 1);

export default createArrayUpToNumber;
