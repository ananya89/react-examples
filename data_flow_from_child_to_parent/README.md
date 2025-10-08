# How to send data from child to parent?

In React, data primarily flows downwards from parent components to child components via props. To send data from a child component to its parent, you typically use a callback function

1. Define a Callback Function in the Parent Component:
Create a function in the parent component that will receive the data from the child. This function will usually update the parent's state or trigger other actions based on the received data.

2. Pass the Callback Function as a Prop to the Child Component:
In the parent component, pass the defined callback function as a prop to the child component.

3. Call the Callback Function in the Child Component:
In the child component, receive the callback function as a prop. When the child needs to send data to the parent (e.g., on a button click, input change, or other event), call this prop function and pass the data as an argument.