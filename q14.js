// Explain Event bubbling and Event Capturing:

// Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// With capturing, the event is first captured by the outermost element and propagated to the inner elements.

// Example:

// <div>
//     <ul>
//         <li></li>
//     </ul>
// </div>

// In the structure above, assume that a click event occurred in the li element.

// In capturing model, the event will be handled by the div first (click event handlers in the div will fire first), then in the ul, then at the last in the target element, li.

// In the bubbling model, the opposite will happen: the event will be first handled by the li, then by the ul, and at last by the div element.