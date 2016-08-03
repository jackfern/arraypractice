//function highestNumber()
//purpose: find the highest number in an array
//signature: [numbers] -> numbers
//examples: function highestNumber([1,4,2]) -> 4
//create a function that takes array as an argument
/*
function highestNumber(arr) {
  //set a default number to compare the elements
  var max = -50;
  //create a for each loop
  arr.forEach(function(element) {
    //compare the element to default number
    if (element > max) {
      //if element is greater than default, set default to element
      max = element;
    }

  });
  //return result
  return "The highest number in the array is " + max;
}
*/

//function lowestNumber()
//purpose: find the lowest number in an array
//signature: [numbers] -> numbers
//examples: function lowestNumber([1,4,2]) -> 1

//create a function that takes array as an argument
function lowestNumber(arr) {
  //set a default number to compare the elements
  var min = 50;
  //create a for each loop
  arr.forEach(function(element) {
    //compare the element to default number
    if (element < min) {
      //if element is les than default, set default to element
      min = element;
    }

  });
  //return result
  return "The lowest number in the array is " + min;
}
*/
//function smallestNumber()
//purpose: find the number closest to zero in an array
//signature: [numbers] -> numbers
//examples: function smallestNumber([1,4,2]) -> 1
//function smallestNumber([.1,.01,.001]) -> .001
//function smallestNumber([-1,-2,-4]) -> -1


//create a function that takes array as an argument
function smallestNumber(arr) {
  //set a default number to compare the elements
  var min = 5000000000000;
  //create a for each loop
  arr.forEach(function(element) {
    //compare the absolute value of the element to default number
    if (Math.abs(element) < Math.abs(min)) {
      //if element is les than default, set default to element
      min = element;
    }

  });
  //return result
  return "The smallest number in the array is " + min;
}

//function sum
//calculate the sum
//signature: [numbers] -> numbers
//examples: sum[1,2,3]->6

//create a function that takes array as an argument
function sum(array) {
  //set a default number to compare the elements
var result = 0;
    //create a for each loop
  array.forEach(function(element) {

    //have the result add itself
  console.log(result= element + result);
  });
  //return result
return result;
}

//create a function that takes array as an argument
function mean(array) {
  //set a default number to compare the elements
  var result = 0;
    //create a for each loop
  array.forEach(function(element) {
    //have the result add itself
  result = element + result;
  console.log(result);
  });
  //divide the result by the length of the array (only once)
  result = result/array.length;
  console.log(result);
  //return result
return result;
}

function indexHighestNumber(arr){
  var max = -50;
  //create a for each loop
  arr.forEach(function(element) {
    //compare the element to default number
    if (element > max) {
      //if element is greater than default, set default to element
      max = element;
    }

  });
  //return result
  return "The index of the highest number in the array is " + arr.lastIndexOf(max);
}

var siblings=['kabir','sarah','kelly','mary'];
siblings.sort();


var parents=['mom','dad','jack','jill'];
parents.sort().reverse();

}

siblings.concat(parents).sort();

siblings.concat(parents).sort().reverse();


//determine if name is there

function isTheNameThere (siblings){
  return siblings =
}


function evenElements (array) {
  array.forEach(function(element) {
    if(element%2==0){
      console.log(element);
    }
  });
  }

  function oddElements (array) {
    array.forEach(function(element) {
      if(element%2==1){
        console.log(element);
      }
    });
    }

    function mapArray (array, fun) {
      var newArray=[]
      array.forEach(function(element){
        if (element)
          console.log(newArray.push(element))
      });
    }
