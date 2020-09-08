    /* Question #1 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get the three numbers from the user.
    // compare each numbers.
    // display the largest number from the three numbers.
 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
 
    function maXOfThree(a, b, c){
        let max;
        if(a > b && a >c){
            max = a;
        }
        else if(b > a && b > c){
            max = b;
        }
        else{
            max = c;
        }
        return max;

    }

    console.log(maXOfThree(6, 9, 9));
    /* Question #2 */
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get an aray of numbers.
    // assign 0 to sum.
    // add each element and assign to the sum.
    // display the total sum.
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    function sum(arr){
        let sumOf = 0;
        for(let i = 0; i < arr.length; i++){
            sumOf += arr[i];
        }
        return sumOf;
    }

    console.log(sum([1, 2, 3, 4]));
    
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get an array of numbers.
    // assign 1 to the product.
    // multiply each element continously and assign to the product
    // display the product.

    function multiply(arr){
        let mul = 1;
        for(let i = 0; i < arr.length; i++){
            mul *= arr[i];
        }
        return mul;
    }
    console.log(multiply([1, 2, 3, 4]));
    /* Queation #3 */
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get an array of strings.
    // compare each array index element length.
    // assign that length to the max.
    // display max length.
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    function findLongestWord(arr){
        let max = -Infinity;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length > max){
                max = arr[i].length;
            }
        }

        return max;
    }
    console.log(findLongestWord(["hello", "hey", "good bye"]));
    /* Question #4 */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get array of strings.
    // create temporary array.
    // push each element from end to start.
    // put it in the temporary array.
    // display the temporary array.
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    function reverse(arr){
        let reverseArray = [];
        for(let i = arr.length - 1; i >= 0; i--){
            reverseArray.push(arr[i]);
        }
        return reverseArray;
    }
    console.log(reverse(["hello", "hey", "good bye"]));

    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    // get array of numbers.
    // create temporary array.
    // push each element from end to start.
    // put it in the temporary array.
    // display the temporary array.
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    function reverseArrayInPlace(arr){
        let reversed = [];
        for(let i = arr.length-1; i >= 0; i--){
            reversed.push(arr[i]);
        }
        return reversed;
    }
    console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));


    //++++++++++++++++++++++++++++++++++++++++++++++++//

   /* (no implementation needed, just an answer) */

   // 1. No they are the same.
   /* Rewrite the function using '?' or '||’ */
   function checkAge(age){
       return (age>18) ? true: confirm('Did parents allow you?');
   }

   function checkAge(age){
       return (age>18) || confirm('Did parents allow you?');
   }

   console.log(checkAge(20));

   /* Function min(a, b) */

   function min(a, b){
       let minOfThe2;
       if(a > b){
           minOfThe2 = b;
       }
       else{
           minOfThe2 = a;
       }return minOfThe2;
      /* let minOfTheTwo = Math.min(a, b);
       return minOfTheTwo;
       */
   }

   function min(a,b){
       return (a < b) ? a : b;
   }
   
   console.log(min(9, 9));

   /* Function pow(x,n) */

   function pow(x, n){
       /*let powerOf = Math.pow(x, n);
       return powerOf;
       */
       let powerOf = x**n;
       return powerOf;
   }

   console.log(pow(5, 3));
    
   const prompt = require('prompt-sync')();

   function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }


  /* Rewrite with arrow functions */

  function ask(question, yes, no) {
  
    if ((question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
  );
  /* Data types > Arrays */
    /* Is array copied? */
  

  
  
  //yes it copied and the answer is 4.

/* Calling in an array context */

  //the result is a, b, function(){alert(this);}
  //because it pushes the object method at index 2.



/* Sum input numbers */


  function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log(sumInput());


/* A maximal subarray */

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }

  console.log(getMaxSubSum([1, 2, 3]));

  /* Array operations. */

let styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
console.log(styles);
styles[1] = 'classic';
console.log(styles);
styles.shift(styles[Math.floor(styles.length/2)]);
console.log(styles);
styles.unshift('rap', 'raggae');
console.log(styles);


function sayHi() { console.log("Hi");}
console.log(sayHi);
console.log(sayHi());
func1 = sayHi;

func2 = sayHi();

//console.log(func1);
console.log(func1());
/*
console.log(func2);
myArray = [func1, func1()];
console.log(myArray[0]);
console.log(myArray[0]());
console.log(myArray[1]);
console.log(myArray[1]());
console.log(func2());
*/


