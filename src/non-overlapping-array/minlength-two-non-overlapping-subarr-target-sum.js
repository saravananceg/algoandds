/*
This problem has two solutions.
**O(n) time, O(n) space**
1. First compute prefix sum of array, store it in a map. Since these contains only positive numbers at any point in the prefix array, sum - target will be present in the left hand side of the array. sum+target will be present in the right hand side array

2. Initialize LMax as Number.MAX_SAFE_INTEGER. for any index i, this will hold the sub array which has least length matching the target sum. 

3. Now Traverse through the array and compute sum.

4.For each index, check if there is a match for sum-target, if so compare it with lmax, if less then this will be the lmax here on.  So since we are done with left, now check if there is lMax (so there is a left subarray from this position), then check target+sum is present in map, if so add lmax+map(sum-target)-i and check with prev answers.

5. If there is no match in the rightside, just keep moving to find for next indexes
*/


/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    var map = new Map();
    var len = arr.length;
    var s = 0;
    var lMax = Number.MAX_SAFE_INTEGER;
    var curr;
    for (let i = 0; i<len;i++) {
        s+= arr[i];
        map.set(s, i);
        
        
        
    }
    var ans = Number.MAX_SAFE_INTEGER;
    s = 0;
    for (let i=0;i<len;i++) {
        s+=arr[i];
        curr = s - target;
        if (curr === 0 || map.has(curr)) {
            if (curr === 0) {
                curr = i + 1;   
            } else {
                curr = i - map.get(curr);
            }
            lMax = Math.min(lMax, curr);
        }
        
        if (lMax < Number.MAX_SAFE_INTEGER && map.has(s+target)) {
            ans = Math.min(ans, lMax + map.get(s+target) - i);
        }
    }
    return ans !== Number.MAX_SAFE_INTEGER ? ans : -1;
}
