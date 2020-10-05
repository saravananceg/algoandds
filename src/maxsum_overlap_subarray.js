var maxSumTwoNoOverlap = function(A, L, M) {
    
    var len = A.length;
    
    var prefix = [];
    prefix[0] = A[0];
    
    /* Calculate the prefix sum, this would help to find sum from any two indexes. 
    Say prefix[i] - prefix[i-2] --> gives the sum of numbers from i-2 to i
    */
    for(let i = 1;i < len;i++) {
        prefix[i] = prefix[i-1] + A[i];
    }
    
    var LMax = prefix[L - 1];  // Consider the first L subarray to be the max subarray with length L
    var MMax = prefix[M - 1];  // Consider the first M subarray to be the max subarray with length M
    // given a length of L+M, this subarray will be the initial answer
    var result = prefix[L + M - 1];
  
    /* 
    For every iteration i will be the last index in the subarray calculation, say if i were the last index what is the maximum sum we could obtain.
    Please note that we have answer already for i = L + M - 1 as res above for the initial set
    */
 
    for (let i = L + M ; i < len; i++) {
      LMax = Math.max(LMax, (prefix[i-M] - prefix[i-(L + M)]));
      MMax = Math.max(MMax, (prefix[i-L] - prefix[i-(L + M)]));
      
      var currRes = Math.max(LMax + (prefix[i] - prefix[i-M]), MMax + (prefix[i] - prefix[i-L]));
      result = Math.max (result, currRes); 
    }
  
  return result;
      
};
