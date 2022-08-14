// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverse(num) {
    num = num.toString();
    var result = " ";
    for (var i = num.length - 1; i >= 0; i--) {
        result = result.concat(num[i]);
    }
    result = parseInt(result);
    document.write(result);
}
reverse(32243);





// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

function palindrome(str) {
    var flag = true;
    var j = str.length -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[j]) {
            j--;
        }
        else{
            flag = false;
        }
    }
    if(!flag){
        document.write(str + " is not a palindrome");
    }
    else{
        document.write(str + " is a palindrome");
    }
}
palindrome("madam");




// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// function combination(str) {
//     var array = [];
//     for (var i = 0; i < str.length; i++) {
//         for (var z = 0; z < str.length+1; z++) {
//             array.push(str.slice(i, z));
//         }
//     }
//     for (var y = 0; y < array.length; y++) {
//         document.write(array[y] + "  ");
//     }
// }
// combination("dog");






// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function set(str) {
//     array = str.split("");
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i+1 ; j < array.length; j++) {
//             if (array[i].charCodeAt(0) > array[j].charCodeAt(0)) {
//                 var temp = array[j].charAt(0);
//                 array[j] = array[i].charAt(0);
//                 array[i] = temp;
//             }
//         }
//     }
//     array = array.join("");
//     array = array.toString();
//     document.write(array);  
// }
// set("webmaster");






// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// function upperCase(string) {
//     var arr = string.split(' ');
//     var str = "";
//     for(var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length);
//         str = str.concat(arr[i] + " ");
//     }
//     document.write(str);
// }
// upperCase("the quick brown fox");




// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function longest(string) {
//     var arr = string.split(' ');
//     var longest;
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr.length ; j++) {
//             if(arr[j].length > arr[i].length) {
//                 longest = arr[j];
//             }
//         }
//     }
//     document.write(longest);
// }
// longest("Web Development Tutorial");






// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

// function occurence(string) {
//     var count = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0; i < string.length ; i++) {
//         for(var j = 0; j < vowels.length; j++){
//             if(string[i].toLowerCase() === vowels[j].toLowerCase()) {
//                 count++;
//             }
//         }
//     }
//     document.write(count);
// }
// occurence("The quick brown fox");






// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function prime(num) {
//     if(num > 1) {
//         var isPrime = true;
//         for(var i = 2; i < num ; i++) {
//             if(num % i === 0) {
//                 isPrime = false;
//             }
//         }
//         if(isPrime) {
//             document.write(num + " is a prime number");
//         }
//         else{
//             document.write(num + " is not a prime number");
//         }
//     }
// }
// prime(5);





// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function parameter(argumentType) {
//     return typeof(argumentType);
// }
// var a = parameter(new Date());
// var a = parameter(1);
// var a = parameter("1");
// var a = parameter(true);
// var a = parameter();
// document.write(a);




// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// function sort(array) {
//     for(var i = 0; i < array.length; i++) {
//         for(var j = i+1; j < array.length; j++ ) {
//             if (array[i] > array[j]) {
//                 var temp = array[j];
//                 array[j] = array [i];
//                 array[i] = temp;
//             }
//         }
//     }
//     document.write(array[1] + "," + array[array.length-2]);
//     document.write(array);
// }
// sort([1,2,3,4,5]);