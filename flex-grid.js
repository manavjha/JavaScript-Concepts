// flex-grow is opposite of flex-shrink

// flex-grow : 1 mean take the available space, 
//by default flex-grow is 0

// default value of flex-shrink is 1
/* 
flex-shrink:
The flex-shrink CSS property sets the flex shrink factor of a flex item. 
If the size of all flex items is larger than the flex container, 
items shrink to fit according to flex-shrink.
In use, flex-shrink is used alongside the other flex properties flex-grow and flex-basis, 
and normally defined using the flex shorthand.

flex-grow:
The flex-grow CSS property sets the flex grow factor, which specifies how much of the 
flex container's remaining space should be assigned to the flex item's main size.
When the flex-container's main size is larger than the combined main size's of the flex items, 
the extra space is distributed among the flex items, with each item growth being their 
growth factor value as a proportion of the sum total of all the container's items' flex grow factors.

flex-basis:
The flex-basis CSS property sets the initial main size of a flex item. 
It sets the size of the content box unless otherwise set with box-sizing.

// flex: 1 1 0%  or 1 1 0 ( grow, shrink, basis )


//flex-basis: 33% ( basically its width)
/**
 * Formal syntax
flex = none                                                |
  [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]  
 */