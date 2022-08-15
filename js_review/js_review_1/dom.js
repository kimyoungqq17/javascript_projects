//HTML Tag => Javascript Node
// EventTarget's object => Node
// Node's Object = Document, Element, Text 
//Thus document, element(html elements, images, and shit), text can have events
// Element's object = HTMLElement, SVGElement, etc 
//HTMLElement's object = HTMLInputElement, HTMLDivElement 

//Browser reads the HTML file 
//reads it line by line and transform it to the DOM tree
//Document Object Model tree so the browser can understand 
// DOM Tree:
// maps to the corresponding objects 
// HTMLHtmlElement
// -HTMLHeadElement                                                        -HTMLBodyElement
// -HTMLMetaElement -HTMLMetaElement -HTMLMetaElement -HTMLMetaElement     -HTMLSectionElement -HTMLSpanElement


//So when the web reads
//it sees window 
//and it has DOM, BOM, Javascript 
//DOM has diff nodes like a tree




//EventTarget <- Node 
//EventTarget has the method addEventListener()

//CSSOM
//CSS Object Model
//DOM + CSS = CSSOM 

//HTML + CSS(external, embedded, inline, user-agent stylesheet) = CSS Object Model Tree 
// CSSOM:
// html <-
// body <-
// section, span 
//when font is set as a 14px for html then body, section, span font are set as 14px also 


//DOM + CSSOM = Render Tree 
//Render Tree are what the user sees so if the css is set as display none then it wont be on render tree 
//but if its opacity: 0 or visibility: hidden then still there 

//HTML -> requests/responses -> loading -> scripting -> rendering -> layout -> painting -> display
//DOM -> CSSOM -> RenderTree      (Construction)       |  layout -> paint -> composition (operation)

//if i go to chrome dev tool and see layout, 
//I can see the different layous 
//if I set some property to will change, ex) opacity: will-change
//I can see the layout being changed 


//top, bottom use layout, painting, composite everytime it gets changed
//we can improve it by replacing top,bottom properties with something else
