function removeDuplicates(nums) {
  const obj = {};
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      arr.push(nums[i]);
      obj[nums[i]] = "taken";
    }
  }
  // return arr
  return arr;
}

console.log(removeDuplicates([1, 1, 2]));
