/**
Code:
for(var i=0; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

While readers may be expecting “0,1,2,3,4,5” to be output, 
instead the output is “6” repeated six times. This is because the “for loop” is a blocking statement
and setTimeout is non-blocking. Hence loop creates 6 setTimeout and moves it to the event loop and 
while those setTimeout are waiting in the event queue, the “for loop” cycles through 
the execution and the value of I is reset to 6.

Hence when setTimeout arrives at the call stack for execution, it fetches i=6 and outputs “6” six times. 
We can avoid this problem by using “let” instead of “var” in the “for loop," 
because “let” has a block scope and that's why each setTimeout remembers the correct value of i.

Solution:
for(let i=0; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

*/