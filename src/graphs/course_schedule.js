/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 

Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
*/



/* BFS topological sort approach */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    var graph = new Map();
    var inDegree = new Array(numCourses);
    inDegree.fill(0);
    
    var queue = [];
    
    var curr;
    for (let i=0;i<prerequisites.length;i++) {
        curr = prerequisites[i];
        if (graph.has(curr[0])) {
            graph.get(curr[0]).push(curr[1]);
        } else {
            graph.set(curr[0], [curr[1]]);
        }
        inDegree[curr[1]]++;
    }
    
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    var count = 0;
    while(queue.length > 0) {
        count++;
        curr = queue.shift();
        var list = graph.get(curr);
        list && list.forEach((val) => {
            inDegree[val]--;
            if (inDegree[val] === 0) {
                queue.push(val);
            }
        });
    }  
    return count === numCourses;
};



/* DFS logic */

/**
 Time complexity:  O(|E| + |V|)
 
where |V| is the number of courses, and |E| is the number of dependencies.

it would take us |E| time complexity to build a graph in the first step.
Since we perform a postorder DFS traversal in the graph, we visit each vertex and each edge once and only once in the worst case, 
i.e. |E| + |V|∣E∣+∣V∣.

Space Complexity: O(|E| + |V|), with the same denotation as in the above time complexity.

We built a graph data structure in the algorithm, which would consume |E| + |V| space.
path and visited to keep track of the visited path and the status of check respectively, which consumes 2⋅∣V∣ space.
Finally, since we implement the function in recursion, which would incur additional memory consumption on call stack. 
In the worst case where all nodes chained up in a line, the recursion would pile up |V∣ times.
Hence the overall space complexity of the algorithm would be O(|E| + 4|V|)= O(|E| + |V|)
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
    
    var graph = new Map();
    var visited = new Array(numCourses);
    visited.fill(false);
    var path = new Array(numCourses);
    
    var isCyclic = (node) => {
        
        /* Tracks if the same node is traversed again in the current path */
        if (path[node]) {
            return true;
        }
        
        /* If the node is already visited and checked for cycle ignore it */
        if (visited[node]) {
            return false;
        }
        
        path[node] = true;
        var list = graph.get(node);
        var status = false;
        /* Traverse through all children and perform DFS */
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (isCyclic(list[i])) {
                    status = true;
                    break;
                }
            }
        }
        
        /* Set the flag to false again to make sure current path traversal is done for this node , 
        So that when any other node reaches this in node in anyother path, this shouldn't detect it as cycle*/
        path[node] = false;
        visited[node] = true;
        return staus;
    }
    
    var curr;
    /* Graph construction */
    for (let i=0;i<prerequisites.length;i++) {
        curr = prerequisites[i];
        if (graph.has(curr[0])) {
            graph.get(curr[0]).push(curr[1]);
        } else {
            graph.set(curr[0], [curr[1]]);
        }
    }
    
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] && isCyclic(i)) {
            return false;
        }
    }

    return true;
};