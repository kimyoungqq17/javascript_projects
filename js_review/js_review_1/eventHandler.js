//on a specific element, register event handler 
//when a user clicks then the browser creates an object, event 
//we sent these event object into the call back function 
// element, Document, Text => Node => event Target
//so we can call event handler on all 
//we can call three methods: addEventListener, removeEventListener, dispatchEvent 


this.addEventListener('click', () => {console.log('clicked')});
this.dispatchEvent(new Event('click')); 

const listener = () => {console.log('clicked')};
this.addEventListener('click', listener);
this.removeEventListener('click', listener); 
