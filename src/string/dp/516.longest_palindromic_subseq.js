/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {

    var cache = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        cache[i] = new Array(s.length);
    }

    var getLength = (i, j) => {

        if (i > j) {
            return 0;
        }

        if (i === j) {
            return 1;
        }

        if (typeof cache[i][j] !== "undefined") {
            return cache[i][j];
        }

        var answer;
        if (s[i] === s[j]) {
            answer = 2 + getLength(i + 1, j - 1);
        } else {
            answer = Math.max(getLength(i + 1, j), getLength(i, j - 1));
        }
        cache[i][j] = answer;
        return answer;
    }
    return getLength(0, s.length - 1)
};