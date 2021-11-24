/*
Anagram

Given two strings write a function to determine if the
second string is an anagram of the first. An anagram is a 
word, phrase, or name formed by rearranging the 
letters of another, such as cinema, formed from 
iceman

validAnagram('','')true
validAnagram('aaz', 'zza')//false
validAnagram('anagram', 'nagaram')//true

Assumption: no capital letter, single word string inputs, no numerical values
*/

function anagram(str1, str2){
    //first check if both string are the same length if not return false 
    if(str1.length !== str2.length){
        return false
    }
    //create an object that will store one of the strings key value pairs 
    const lookup = {};
    //loop to check if  key exists and assigning value if not present assign key value pair 

    for(let item of str1){
        lookup[item] > 0 ? lookup[item]++ : lookup[item]= 1
    }
    console.log(lookup)
    //loop through the second string to seee if the key is in lookup table, if the value is greater than o then its a truth
    for(let item of str2){
        //if the lookup[item] value is a 0 this conditional will become a falsy therefor making it a truthy statement 
        if(!lookup[item]){
            return false
        } else{
            lookup[item] --;
        }
    }
    console.log(lookup)
    return true
}

console.log(anagram('iceman', 'icman'))
//false

console.log(anagram('cinema', 'iceman'))