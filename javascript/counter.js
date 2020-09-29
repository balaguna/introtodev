/**
 * I want to create a counter that
 * can be incremented by a function
 * or decremented by a function
 * or i can get the current value of the counter
 * or reset to zero
 * using a function
 * 
 * 
 * 1. if user engages the INCREMENT BUTTON, then counter should get incremented by 1
 * 2. 
 */
var count = 0;
var count = 0;
function incrementCount() {
    count++;
    alert(count);
}
function decrementCount() {
    count--;
    alert(count);
}
function resetCount() {
    count = 0;
    alert(count);
}
function getCount() {
    alert(count);
}
