// time = O(n) | space = 
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) left++;
    else if (currentSum > targetSum) right--;
  }
  return [];
}

// time = O(N) | space = nlog(N)
function twoNumberSum(array, targetSum) {
  let nums = {};
  for (let num of array) {
    let potentialMatch = targetSum - num;
    if (potentialMatch in nums) return [potentialMatch, num];
    else nums[num] = true;
  }
  return [];
}

let array = [-2, 4, 5, 7, -1, 3],
  target = 9;
console.log(twoNumberSum(array, target));