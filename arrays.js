// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var nums = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var largest = Number.MIN_VALUE;
for (i=0; i<=largest;i++){
    if (nums[i]>largest) {
        var largest=nums[i];
    }
  console.log(largest);
}



// ---------------------------
// 2. Find longest string
// ---------------------------

var words = ["kids","are","dumb","but","so","are","we"]

function findLongest(array){
 var lengths = []
 array.forEach(i){
   lengths.push(i.length);
 });
}
findLongest(words);

/* The way real people do it.  GRRRR */
// var longest = ""
// for (i=0; i<=longest.length;i++){
//     if (strings[i.length]>longest.length) {
//         var longest=strings[i];
//     }
//   console.log(longest);
// }


// ---------------------------
// 3. Find even numbers
// ---------------------------

var numbers = 
numbers.foreach(function(numbers){
  var evens = [];
  if(numbers % 2){
    evens.push()
  }
})

// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------