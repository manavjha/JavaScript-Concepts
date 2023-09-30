/**
Constructor()
getderivedStatefromProps()
Render()
conponentDidMount()
ShouldComponentUpdate() -> By default return truw, so every time it will excure to stop it either 
use component as pure component or use forceUpdate() to update.
ComponentDidUpdate()
ComponentWillUnmount()


UseCallback - memoise the refernce of function, should be used when callback function is passed  
as props to another child component and memoization is required to prevent unnecessary rending
of the component, if the props are not changed.
*/