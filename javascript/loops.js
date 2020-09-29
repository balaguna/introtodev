/**
 * Loops
 * 1. For Loop
 *      assignment / expression to assign an initial value
 *      match a condition, if TRUE, keep executing the statement
 *      change a value from initial to a new one
  */

  /** Print 1 - 10 on console */
  function testForLoop () {
for (counter=1; counter<=10; counter ++) {
        console.log(counter);
}
  }

    /** while a condition is TRUE, keep executing INCREMENT inside the scope of WHILE LOOP */
    function testWhileLoop() {
        var counter = 0;
        while (counter <= 10) {
            console.log(counter);
            counter++;
        }
    }
    