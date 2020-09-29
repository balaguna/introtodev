/** Types of Control Structures
*1. IF
*2. IF...ELSE  ..
*3. IF ... ELSE IF .. 
*4. SWITCH 
  */

  /**
   * IF FUNCTION IS TRUE, EXECUTE A STATEMENT:
   */ 
/** 
  *function ifControl(inputNumber) { 
   *   if (inputNumber > 10) {
    *      alert ("Yes, the number is greater than 10. You shall pass.")
     * }

  }
*/


function controlStructure(inputNumber) {
    console.log('inside function');
   switch(inputNumber) {
       case 1: {
           console.log('inside switch case 1')
           alert("Hi!");
           break;
       }
       case 2: {
           console.log('inside switch case 2')
           alert("bye!");
           break;
       }
       case 3: {
           console.log('inside switch case 3')
           alert("hola!");
           break;
       }
       default: {
           console.log('inside switch case default');
           break;
       }
   }
}