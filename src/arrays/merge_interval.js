/* https://leetcode.com/problems/merge-intervals/ */
/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

    Input: intervals = [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ]
Output: [
    [1, 6],
    [8, 10],
    [15, 18]
]
Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
Example 2:

    Input: intervals = [
        [1, 4],
        [4, 5]
    ]
Output: [
    [1, 5]
]
Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.
*/

/* The idea is pretty simple. If we can get the next immediate meeting's time and see if that can be merged with
current if the end time is greater than the next start time*/

/* Time complexity : O(nLogn) because of the sort
Space complexity: O(1)
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    var results = [];
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });


    var start, end;
    var index = 0;
    if (intervals.length > 0) {
        [start, end] = intervals[0];
        results.push([start, end]);
        index = 1;
    }
    for (let i = 1; i < intervals.length; i++) {
        var [currStart, currEnd] = intervals[i];
        if (currStart <= end) {
            end = Math.max(currEnd, end);
            results[index - 1][1] = end;
        } else {
            start = currStart;
            end = currEnd;
            index++;
            results.push([start, end]);
        }

    }

    return results;
};