/*
https://www.geeksforgeeks.org/find-the-nearest-smaller-numbers-on-left-side-in-an-array/#:~:text=A%20Simple%20Solution%20is%20to,it%20finds%20a%20smaller%20element

https://www.interviewbit.com/problems/nearest-smaller-element/#
*/

/* At any point of time you need to track the sequence of largest numbers */

module.exports = {
    //param A : array of integers
    //return a array of integers
    prevSmaller: function (A) {
        var result = [];
        var len = A.length;
        if (len === 0) {
            return result;
        }
        var map = new Map();;
        result[0] = [-1];
        map.set(A[0], -1);
        for (let i = 1; i < A.length; i++) {
            if (A[i - 1] < A[i]) {
                result[i] = A[i - 1];
                map.set(A[i], result[i]);
            } else {
                var curr = map.get(A[i - 1]);
                while (curr !== -1 && curr >= A[i]) {
                    curr = map.get(curr);
                }

                result[i] = curr;

                map.set(A[i], curr);
            }
        }
        return result;
    }
};



module.exports = {
    //param A : array of integers
    //return a array of integers
    prevSmaller: function (A) {
        var result = [];
        var len = A.length;
        if (len === 0) {
            return result;
        }
        var stack = [];
        result[0] = -1;
        stack.push(A[0]);
        for (let i = 1; i < A.length; i++) {
            while (stack[stack.length-1] >= A[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                result[i] = -1;
            } else {
                result[i] = stack[stack.length - 1];
            }
            stack.push(A[i]);
        }
        return result;
    }
};
