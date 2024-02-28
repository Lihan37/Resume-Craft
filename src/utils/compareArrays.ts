const compareArrays = <T extends Record<string, any>>(
  array1: T[],
  array2: T[]
) => {
  // Compare array lengths
  if (array1.length !== array2.length) return false;

  // Compare each element
  return array1.every((item, index) => {
    const keys1 = Object.keys(item) as (keyof T)[];
    const keys2 = Object.keys(array2[index]) as (keyof T)[];

    if (!keys1.every((key) => keys2.includes(key))) return false;

    return keys1.every((key) => item[key] === array2[index][key]);
  });
};

export default compareArrays;
