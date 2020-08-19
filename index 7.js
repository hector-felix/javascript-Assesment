// CHALLENGE 1 - ADD CODE BELOW
function select(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(callback(array[i]))
     result.push(array[i]);
  }
  return result;
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]



// CHALLENGE 2 - ADD CODE BELOW
function russianRoulette(n) {
  let called = 1;
  function clickBang() {
    if(called < n) {
      called++;
      return 'click';
    }
    else if (called === n){
      called++;
      return 'bang'
    }
    else {
      called++;
      return 'reload to play again';
    } 
  }
  return clickBang;
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘bang’
console.log(play()); // should log: ‘reload to play again’
console.log(play()); // should log: ‘reload to play again’



// CHALLENGE 3 - ADD CODE BELOW
function goldenSequence(n) {
  n++;
  let x = 0, y = 1, z, i;
  if(n === 0)
    return x;
  
  for(i = 2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return y;
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(goldenSequence(0)); // should log: 1
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 2
console.log(goldenSequence(3)); // should log: 3
console.log(goldenSequence(4)); // should log: 5
console.log(goldenSequence(12)); // should log: 233
