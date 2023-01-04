function average (numbers) {
    let sum=0;
    for (let number of numbers){
        sum+=number;
    }
    return sum/numbers.length;
}

const averag=42

let tomb = [1,2,3,4,5];
let avg = average (tomb);
console.log (avg);

let average2=average;

console.log (average2([1,2,3]))


function repeatStr (n, s) {
    let result="";
    for(let i=0; i<n; i++ ){
      result += n;
    }
    return result;
};