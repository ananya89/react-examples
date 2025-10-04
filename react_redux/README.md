# Why React Redux?

In React, state is often local to a component. Sharing state across many components can get messy.

Redux centralizes state in a single store.

React Redux provides tools to connect React components to the Redux store efficiently.

# The core principles of Redux (Actions, Reducers, Store)

1. Create the redux slice - Create slice to manage the counter's state and actions
   ```createSlice``` function is used to create redux slice.
   ```createSlice``` accepts an a "slice name", initial state, an object of reducer functions, and automatically generates action creators and action types that correspond to the reducers and state.

2. Create the redux store
 Store - The store is the single source of truth in a Redux application.
 The store is the “brain” of Redux—it keeps the state and ensures everyone gets updated when it changes.
 ```configureStore``` function is used to create redux store.

3. Provide the Redux Store to React:
Wrap the root React component with the Provider in ```src/main.tsx```

4. Use Redux State and Actions in a React Component:
  ```src/features/counter/Counter.tsx``` to display and interact with the counter.
  Use ```useSelector``` to read state and ```useDispatch``` to call actions.