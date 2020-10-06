/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    var map = new Map();
    var len = arr.length;
    var bestLeft = Number.MAX_SAFE_INTEGER;
    var start = 0;
    var sum = 0;
    var answer = Number.MAX_SAFE_INTEGER;
    var best = [];
    for (let i=0;i<len;i++) {
        sum+=arr[i];
        while(sum > target) {
            sum -= arr[start];
            start++;
        }
        
        if (sum === target) {
            bestLeft = Math.min(bestLeft, i - start + 1);
            
            if (start > 0 && best[start-1] < Number.MAX_SAFE_INTEGER) {
                answer = Math.min(answer, best[start-1] + i - start+ 1);
            }
        }
        best[i] = bestLeft;
    }
    return answer != Number.MAX_SAFE_INTEGER ? answer : -1;
}
