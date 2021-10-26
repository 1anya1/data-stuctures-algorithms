/** countUniqueValues
 * Implement a function called countUniqueValues, which accpets a sorted array, and counts the uni
 * que values in the array. There can be negative nums in the arr, but it will be sorted
 * 
 * 
 * 
 * //count unique elements in an array 
 * 
 * //inputs: sorted array of nums, can be neg, empty arrays, nested arrays?, floating nums?
 * 
 * output is the total of unique values, num
 * 
 * variables: arr, total, pointer1, pointer2, difference 
 * 
 * 
 */

function countUniqueValues(arr){
    if(arr.length<2){
        arr.length<1 ? 0 : 1
    };
    let pointer1; let pointer2; let total=0;
    for(let i=0; i<arr.length; i++){
        pointer1 = arr[i]
        pointer2 = arr[i+1]
        let difference = pointer1-pointer2
        difference === 0 ? null : total++
    };
    return total 
}

console.log(countUniqueValues([]));
//0
console.log(countUniqueValues([1,1,1,1,1,2]));
//2
console.log(countUniqueValues([-2,-1,0, 1]));
//4
console.log(countUniqueValues([1,2,3,4,4,4,7,7,7,12,12,13]));
//7


//example if we can change out the value in the array 

//in this example were modifying the existing array by updating the values on i pointer
//its a lagging pointer that updates the new indexie with the value of arr[j] if the values are
//not the same. We take the index vlaue of i and add one to it to get the values of unique 
// variables 

function unique(arr){
    if(arr.length<1){
        return 0
    }
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
    return arr[i+1]

}

console.log(unique([1,2,3,4,4,4,7,7,7,12,12,13]));
//7
