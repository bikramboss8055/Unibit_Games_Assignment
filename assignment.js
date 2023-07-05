{/*1 . Given an array of integers and a target value, you must determine which two integers' sum
equals the target and return a 2D array. Then merge the array into a single array with sorting (
ascending ) order, in the next step double the target value and find again the combination of
digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
array. */}
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,

const findPairsWithSumWithTwoPointer = (arr, target) => {
  // This function finds all the pairs of elements in the array that add up to the given target.
  // TC: O(n^2)
  // SC: O(1)
  const results = [];
  let N = arr.length;
  let i = 0; let j = i + 1;

  while (i < N - 1 && j < N) {
    // TC: O(1)
    // SC: O(1)
    if (arr[i] + arr[j] === target) {
      results.push([arr[i], arr[j]]);
      i++, j++
    } else {
      // TC: O(1)
      // SC: O(1)
      if (j == N - 1) {
        i++
        j = i + 1
      } else {
        j++
      }
    }
  }
  return results
};

const findPairsWithSumWithObject = (arr, target) => {
  // This function finds all the pairs of elements in the array that add up to the given target.
  // TC: O(n)
  // SC: O(n)
  const seen = {};
  const results = [];

  for (const elem of arr) {
    if (seen[target - elem]) {
      results.push([target - elem,elem]);
    } else {
      seen[elem] = true;
    }
  }
  
  return results;
};

const sortArray = (arr) => {
  // This function sorts the array in ascending order.
  // TC: O(n log n)
  // SC: O(n)
  let res = []

  arr.map((ele) => {
    // TC: O(1)
    // SC: O(1)
    res.push(...ele)
  })
  res = res.sort((a, b) => a - b);
  return res;
};

const getAllSubsetsOfArray = (arr) => {
  // This function generates all the subsets of the array.
  // TC: O(2^n)
  // SC: O(n)
  let subsets = [[]];

  for (const value of arr) {
    // TC: O(n)
    // SC: O(n)
    const newSubsets = subsets.map((set) => [...set, value]);
    subsets = [...subsets, ...newSubsets];
  }
  return subsets;
};

const findSubsetsWithSum = (arr, target) => {
  // This function finds all the subsets of the array that have the given sum.
  // TC: O(2^n)
  // SC: O(n)
  const subsets = [];

  for (const subset of getAllSubsetsOfArray(arr)) {
    // TC: O(1)
    // SC: O(1)
    const sum = subset.reduce((a, b) => a + b, 0);
    if (sum === target) {
      subsets.push(subset);
    }
  }
  return subsets;
};

const main = () => {
  const arr = [1, 3, 2, 2, -4, -6, -2, 8];
  const target = 4;
  {/*const pairs = findPairsWithSumWithTwoPointer(arr, target);*/}
  
  {/*I am calling the findPairsWithSumWithObject function instead of the findPairsWithSumWithTwoPointer function because it has a lower time complexity.*/}
  const pairs = findPairsWithSumWithObject(arr, target);
  const sortedPairs = sortArray(pairs);
  const subsets = findSubsetsWithSum(sortedPairs, target * 2);
  console.log('First Combination For “4” :', pairs);
  console.log('Merge Into a single Array :', sortedPairs);
  console.log('Second Combination For “8” :', subsets);
};

main();
