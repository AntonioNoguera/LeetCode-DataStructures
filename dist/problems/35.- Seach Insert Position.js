"use strict";
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
function searchInsert(nums, target) {
    let k = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            k = i;
            break;
        }
    }
    return k;
}
;
let dataset = [1, 3, 5, 6];
let target = 7;
console.log(searchInsert(dataset, target));
