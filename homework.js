// exercise 1
let start = 0;
let end = 20;


for (let i=start; i<= end; i++) {
  if (i % 2 == 0){
    console.log (i);
  }
}

// exercise 2

const numbersToSum = [1, -5, 20, -34, 16, 29, 36];
function sumArray (arr) {
  
  //const arr = numbersToSum;
  let sum = 0;
  for (let i=0 ; i < numbersToSum.length; i += 1){
    sum += numbersToSum [i];
  }
  return sum;

}

console.log (sumArray(numbersToSum))

// exercise 3

const numbersToReverse = [1, -5, 20, -34, 16, 29, 36, 9];

function array (arr) {
  for (let i = numbersToReverse.length- 1;i >= 0 ; i -=1 ) {
   console.log ( i, numbersToReverse [i])
    

  }
}
console.log (array (numbersToReverse))

// exercise 4

const input = "string to test";


function getCount (str) {
  let vowelsCount = 0
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ]

  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount ++;
    }
  }
  return vowelsCount;


};

const result = getCount(input);

console.log (result)