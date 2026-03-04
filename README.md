1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById() -> Returns a single element by id.

getElementsByClassName() -> Returns multiple elements as a live HTMLCollection.

querySelector() -> Returns the first matching element using a CSS selector.

querySelectorAll() -> Returns all matching elements as a static NodeList.


2. How to create and insert a new element into the DOM?

Use document.createElement() to create an element.

Add content using innerText or innerHTML.

Insert it using append(), appendChild(), or prepend().


3. What is Event Bubbling?

Event Bubbling is the process where an event starts from the target element and propagates upward to its parent elements.


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where a parent element handles events for its child elements using a single event listener.
It is useful because it improves performance and works for dynamically added elements.


5. Difference between preventDefault() and stopPropagation()

preventDefault() -> Prevents the browser’s default behavior.

stopPropagation() -> Stops the event from bubbling to parent elements.
