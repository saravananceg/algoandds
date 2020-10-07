/* Question:
https://leetcode.com/problems/linked-list-cycle-ii/
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    var intersect;
    /* Slow pointer will travel by distance of one, fast pointer will travel distance of two.
    Eventually both will meet at a point if there is a loop*/
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            intersect = slow;
            break;
        }
    }
           
    /* When they meet, slow pointer would have travelled K distance, while fast pointer would have travelled twice the distance 2K.
    So the distance to the intersect node from head is K (which is what slow pointer took). And fast pointer since it travelled 2K distance, it would have travelled
    K distance from intersect node again to meet at intersect node*/
    if (!intersect) {
        return null;
    }
           
    /* So assuming the above, from intersect node if we travel K distance we would reach again intersect node, from Head if we travel K distance we would reach
    intersect node. So start two pointers one from intersect, one from head. They should ideally meet somewhere in the middle before reaching interesect node which would
    be the start of the loop*/
    /* Consider players running in a circle, and a new person comes an joins the race. if they were to meet at the end in same time, then person entering the circle
    should join the player in the circle for both of them to finish at the same time */

    slow = head;
    while(intersect !== slow) {
        slow = slow.next;
        intersect = intersect.next;
    }

    return intersect;
};
