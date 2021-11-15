function minSubArrayLen(arr, num){

    let starting = arr[0]
    let count = 1;
    let total=0;
  for(let i=1; i<arr.length; i++){
    count++;
    starting=starting+arr[i]
    
    if(starting >= num){
        console.log(`${starting} ${num}`)
        if(total===0){
            total = count
        } else if (count > total){
            total = count
        }
        starting = starting - arr[i-count+1]
        console.log('starting'+starting)
        count = 1;
        
    }
}
return total
}

console.log(minSubArrayLen([2,3,1,2,4,3],7))