

function sortAndFlip(words) {
  
        .map(word => word.split('').reverse().join('')) 
        .sort(); 
}


console.log(sortAndFlip(["Meron", "solyana", "babi"]));
// Output: ["anaylos", "ibab", "noreM"]

function checkNumbers(nums) {
    return nums.map(num => num > 0 ? "positive" : num < 0 ? "negative" : "zero");
}
console.log(checkNumbers([7,9,-1]))
//[ 'positive', 'positive', 'negative' ]
function sortByPay(employees) {
    return [...employees].sort((a, b) => a.salary - b.salary);
}

console.log(sortByPay([400,200,100,20]))
//[ 400, 200, 100, 20 ]
function doubleAndLog(nums) {
    nums.forEach(num => console.log(num * 2));
}

doubleAndLog([2,-5,7,9,0])
//4 -10 14 18 0

function transformNums(nums) {
    let result = nums.map((num, i) => i < 4 ? num * 8 : i >= nums.length - 2 ? num + 5 : num);
    console.log(result);
    return result;
}
transformNums([3,7,0,-4,-1,5]);
//[ 24, 56, 0, -32, 4, 10 ]



