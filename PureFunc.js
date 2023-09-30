// Pure and Impure functions
/**
Pure functions do not have side effects. Impure functions can cause side effects.

Pure functions return the same output if we use the same input parameters. However, 
impure functions give different outcomes when we pass the same arguments multiple times.

Pure functions always return some results. Impure functions can execute without producing anything.
Debugging pure functions is relatively easier than debugging impure functions.
Pure functions cannot execute AJAX calls or standard DOM manipulation.
Impure functions aren’t inherently wrong. They merely can cause some confusion in more 
extensive systems in the form of spaghetti code.
*/