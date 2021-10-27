/*
Max Subarray Sum

Write a function called maxSubarraySum which accepts an array of integers ana anumber called n.
The function should calculate the maximum sum of n consequtive elements in an array.



*/

// Time Complexity O(N^2)
function maxSubArraySum(arr, n){
    if( n >arr.length){
        return  null;
    } 
    var max = -Infinity;
    for(let i=0; i<arr.length - n +1; i++){
        let temp=0;
        for(let j=0; j<n; j++){
            temp+=arr[i+j]
        }
        if(temp > max) {
            max=temp
        }
    }
    return max;

}

console.log(maxSubArraySum([1,2,4,2,8,1,5],2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubArraySum([4,2,1,6],1))//6
console.log(maxSubArraySum([4,2,1,6,2], 4)) //13
console.log(maxSubArraySum([],4 ))//null


// Time complexity Object(N)

function slidingWindow(arr, num){
    let maxSum=0;
    let tempSum=0;
    if(arr.length <num) {return null};
    //set the initial value of three variables here 
    for(let i=0; i<num; i++){
        maxSum+=arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        //here what were doing is subtracting the first value from subarray and adding the next
        //value to the sub array 
        tempSum = tempSum-arr[i-num]+arr[i];
        // maxSum = Math.max(maxSum, tempSum);
        //if the value is larger for temp sum then assign it to maxSuum 
        if(tempSum > maxSum) {
            maxSum=tempSum
        }
    }
    return maxSum;
}
console.log(slidingWindow([4,2,1,6,2], 3)) //9