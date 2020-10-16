/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
*/


/* Dynamic programming approach - backtracking with memoization */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    var cache = new Array(nums.length);

    var getDistance = (i) => {
        if (i === nums.length-1) {
            return 0;
        }
        
        if (cache[i] !== undefined) {
            return cache[i];
        }
        
        var min = Number.MAX_SAFE_INTEGER, val;
        for (let j = Math.min(nums[i] + i, nums.length-1); j > i; j--){
            val = getDistance(j);
            if (val < min) {
                min = val;
            }
        }

        cache[i] = 1 + min;
        return cache[i];
    };
    
    return getDistance(0);
};

/* Greedy approach */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length < 2) {
      return 0;
  }

  let maxSteps = nums[0];
  let maxPos = nums[0];
  let jump = 1;
  for (let i = 1; i< nums.length;i++) {
      if (i > maxSteps) {
          jump++;
          maxSteps = maxPos;
      }
      
      maxPos = Math.max(maxPos, i + nums[i]);
      if (maxPos >= nums.length - 1) {
          if (maxSteps < nums.length - 1) {
              jump++;
          }
          break;
      } 
  } 
  return jump;
};
