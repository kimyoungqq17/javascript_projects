Element.getBoundingClientRect();
//Here element is on dom
//everything on dom is an element (image, video, div, etc)
//so every element has getBoundlingClientRect()


//client x,y vs page x,y
//say a user has scrolled down and 
//when a user clicks some spot on window, then the event object is sent to listener 
//because its been scrolled down, the coordinates are different 