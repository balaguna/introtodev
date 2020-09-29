

//Global scope variable
// var name = 'Vaibhav';

// var fullName = (function() {
//     var name = 'Vai';
//     return function() {
//         name = name + ' ' + 'Vashishtha'; 
//         console.log(name);
//     };
// })();

// alert(fullName());



/**
 * To create a process to update a counter
 *              GLOBAL SCOPE !!!
 */

var counter = 0;

/**
 * Based on the option increment / decrement a counter
 * @param {*} option 
 */
function updateCounter(option) {
  //           LOCAL SCOPE !!!
  var counter = 0;
    if (option == 'increment') {
        counter++;
    } else if (option == 'decrement') {
        counter--;
    }
}

// CLOSURE
// create a variable that is defined as an anonymous function

var updateCounter = function (){
    return 5;
}
alert(updateCounter());

// /*FUNCTION inside VARIABLE to be able to be used everywhere in this script*/

// var randomCounter = function randomlyUpdatingCounter(){
//     counter = 100;

// }

function getCounterValue() {
    return counter;
}



