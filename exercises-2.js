// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if(x>y){
      return x
    } else {
      return y
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
  if(x>y && x>z){
    return x
  } else if(y>z && y>x){
    return y
  } else if(z>x && z>y) {
    return z
  } else {
    return "there's more than one 'largest' number"
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if(char === "a") {
    return true
  } else if(char === "e") {
    return true
  } else if(char === "i") {
    return true
  } else if(char === "o") {
    return true
  } else if(char === "u") {
    return true
  } else if(char === "y") {
    return true
  } else {
    return false
  }
}

/* The function that SHOULD work because it's so much fucking cooler...

          function isVowel(char){
            if(char === "a" || "e" || "i" || "o" || "u" || "y") {
              return true
            } else {
              return false
            }
          }

...But doesn't */



// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


/* what in the actual fffffffff - I spent too much time on arrays, 
didn't have time to figure this out.  As JD said - I think I know how to solve this 'in the real world'
but I can't figure out how to translate (irony) that to code */

function translate(x){
  trans = x.split("")
  trans.foreach()
  
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
    y = x.split("")
    console.log(y.reverse().join(""))
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------


function findLongestWord(array) {
  return array.reduce(function (long1, long2) {
    return long2.length > long1.length ? long2 : long1;
  }, '');
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------


function filterLongWords(array,i) {
  array.filter(function(words,i){
  return words.length > i
});  
}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------


//Real answer below, fake answer not provided:

function charFreq(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var letter = string.charAt(i);
        if (freq[letter]) {
           freq[letter]++;
        } else {
           freq[letter] = 1;
        }
    }

    return freq;
};