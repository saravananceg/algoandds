/* https://www.geeksforgeeks.org/friends-pairing-problem/ */

/* 
Given n friends, each one can remain single or can be paired up with some other friend. Each friend can be paired only once. Find out the total number of ways in which friends can remain single or can be paired up.

Examples :

Input  : n = 3
Output : 4

Explanation
{1}, {2}, {3} : all single
{1}, {2, 3} : 2 and 3 paired but 1 is single.
{1, 2}, {3} : 1 and 2 are paired but 3 is single.
{1, 3}, {2} : 1 and 3 are paired but 2 is single.
Note that {1, 2} and {2, 1} are considered same.
*/

const pairFriends = (n) => {
    if (n <= 2) {
        return n;
    }
    return pairFriends(n - 1) + ((n - 1) * pairFriends(n - 2));
};

const pairFriends1 = (n) => {
    var cache = new Array(n);
    
    for (let i = 0; i <= n; i++) {
        if (i <= 2)
            cache[i] = i;
        else
            cache[i] = cache[i - 1] + (i - 1) * cache[i - 2];
    }
    return cache[n];
}


console.log(pairFriends(4));