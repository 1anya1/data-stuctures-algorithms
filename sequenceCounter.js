/*
    Write a function called same, which accepts two arrays. Yhe function should return true if every value
    in the array has it's corresponding value squared in the second array. The frequency must be the same


    example: 
    same([1,2,3], [4,1,9]) //true
    samw([1,2,3], [1,4]) //false
    same([1,2,1], [1,9,4]) //false must be the smae frequency

*/


function same(arr1, arr2){
    //check if both arrays are the same length
   if(arr1.length !== arr2.length){
       return false;
   }
    //set up object to record values 
    const obj = {}
    //set arr1 value to the object key value pairs
    for(let item of arr1){
        //and its frequency 
        obj[item] > 0 ? obj[item]++ : obj[item] = 1;
    }
//     console.log(obj)

    //iterate through arr2 
    for(let item of arr2){
         // each element square root it using Math.sqrt()
        item = Math.sqrt(item)
        //check if that value is in the object
        //if in the object minus 1 from the value pairs
        //if not return false 
        obj[item] > 0 ?  obj[item]-- : false
    }
     //return true only if all the key value pairs equal to 0
     let arr = Object.values(obj).reduce((total, val)=> total+val)
     return arr > 0 ? false : true
}
console.log(same([1,2,3,1], [1,4,1,9]))
//true
console.log(same([1,2,2], [1,4,2]))
//false
console.log(same([1,2,3,1], [1,4,1]))
//false