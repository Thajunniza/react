# ReactJS State
In React, the state refers to an object that holds information about a component’s current situation. This information can change over time, typically as a result of user actions or data fetching, and when state changes, React re-renders the component to reflect the updated UI.

Whenever state changes, React re-renders the component to reflect the updated data. This enables you to build dynamic UIs that respond to user interactions.

## Syntax
```javascript
const [state, setState] = useState(initialState);
```
In this syntax

- **state**: The current state value.
- **setState**: A function that is used to update the state.
- **initialState**: The initial value that the state will hold when the component is first rendered.

- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the useState Hook.
- Hooks are special functions that start with use. They let you “hook into” React features like state.
- Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
- The useState Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.

## Example 1 - Basic usage of State

 - Create a new file called Counter.jsx.
 - Inside this file, create a functional component called Counter.
 - Use useState to manage a simple counter state.
 - Initialize the state with a value of 0.
 - Create a button to increment the counter by 1 when clicked.
 - Display the current value of the counter.

## Example 2 - useState with an Array of Data
 - Create a new file called TodoList.jsx.
 - Inside this file, create a functional component called TodoList.
 - Use useState to manage an array of todo items.
 - Initialize the state with an empty array.
 - Create a form to add new todo items to the list.
 - Display the list of todo items.


 ##Example 2 - Create a Gallery which shows info on clicking next
 - Create a sepearate file data.js to hold the array of data
 - Create a new file called Gallery.jsx
 - Add Gallery twice you can see the diff that changing one index doesnt affect the other

 ##Example 3 - Update State

 What is an Updater Function?
An updater function is a special way to update state in React when the new state depends on the previous state. Instead of passing a direct value to the state setter function, you pass a function that receives the previous state as an argument and returns the new state.

Basic Syntax
```javascript
// Direct state update (not using updater function)
setState(newValue);

// Using updater function
setState(prevState => {
  // Calculate new state based on prevState
  return newState;
});
```
### Best Practices
Always use updater functions when the new state depends on the previous state
Keep updater functions pure - they should calculate the new state based only on the previous state and any arguments passed to them
Don't call setState inside the updater function - this can lead to infinite loops
Remember to return the new state from the updater function

##Example 4 - Objects in state
State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

-  In this example I have used Ramda function to copy the object and pass the parameter as an property which needs to changed.

##Example 5 - Arrays in state
Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

In JavaScript, arrays are just another kind of object. Like with objects, you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like arr[0] = 'bird', and you also shouldn’t use methods that mutate the array, such as push() and pop().

Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.

 
 