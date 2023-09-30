# Episode 12 - Let's build our Store

## Theory

1. **useContext vs Redux**
   **Answer:** `useContext` and Redux are both state management solutions in React, but they serve different purposes.

    - `useContext`: It is a hook in React used for accessing the context directly within a functional component. It's typically used for simpler state management needs where global state is needed without the complexity of Redux.
      Example:

        ```jsx
        const MyContext = React.createContext();

        function MyComponent() {
            const value = useContext(MyContext);
            return <div>{value}</div>;
        }
        ```

    - `Redux`: Redux is a state management library that provides a predictable and centralized way to manage application state. It's suitable for complex applications with a lot of state or when you need features like time-travel debugging or middleware support.

2. **Advantages of using Redux Toolkit over Redux**
   **Answer:** Redux Toolkit is a set of tools and recommended best practices for writing Redux code. It simplifies many aspects of working with Redux and offers several advantages over using plain Redux, including:

    - Reducing boilerplate code.
    - Providing a `configureStore` function for setting up the store with default middleware and dev tools.
    - Encouraging the use of `createSlice` for defining reducers.
    - Built-in support for immutability and serializability checks.
    - Improved performance in production builds.

3. **Explain Dispatcher**
   **Answer:** In the context of Redux, a dispatcher is a function provided by the Redux store that is used to send an action to the store. The action describes what should happen and includes any data necessary for the update.
   Example:

    ```javascript
    import { useDispatch } from "react-redux"; //import dispatcher
    import { addItem } from "../utils/cartSlice"; //import the action from the slice

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action with item as payload
        dispatch(addItem(item));
    };

    //call it from any button
    <button
        className="p-2 mx-16 rounded-lg bg-white text-green-600 font-bold shadow-lg"
        onClick={() => handleAddItem(item)}
    >
        ADD +
    </button>;
    ```

4. **Explain Reducer**
   **Answer:** A reducer in Redux is a pure function that takes the current state and an action and returns a new state. It specifies how the application's state changes in response to actions sent to the store. Ex: `addItem` is a reducer function
   Example:

    ```javascript
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            //mutating the state here
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItem: (state, action) => {
                state.items.pop(action.payload);
            },
            clearCart: (state, action) => {
                state.items.length = 0;
            },
        },
    });
    ```

5. **Explain slice**
   **Answer:** In Redux Toolkit, a slice is a function that generates a set of Redux-related code for a specific "slice" of the state. It includes a reducer, action creators, and selectors. Slices make it easier to manage parts of the Redux store.
   Example:

    ```javascript
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            //mutating the state here
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItem: (state, action) => {
                state.items.pop(action.payload);
            },
            clearCart: (state, action) => {
                state.items.length = 0;
            },
        },
    });

    export const { addItem, removeItem, clearCart } = cartSlice.actions;

    export default cartSlice.reducer;
    ```

6. **Explain selector**
   **Answer:** A selector in Redux is a function that retrieves specific pieces of data from the Redux store. It allows you to extract and compute derived data from the state without directly accessing the store's state object.
   Example:

    ```javascript
    import { useSelector } from "react-redux";

    //Subscribing to the store using a selector(appStore)
    //cart is the name of one of the reducer in the appStore
    const cartItems = useSelector((store)=>store?.cart?.items)

    //And access cartItems in JSX like below
    <li><Link className="p-2 text-lg font-bold" to='cart'>Cart({cartItems.length})</Link></li>
    ```

7. **Explain createSlice and the configuration it takes**
   **Answer:** `createSlice` is a function provided by Redux Toolkit for defining a slice of the Redux store. It takes an object as its configuration with the following properties:

    - `name`: A string that defines the name of the slice.
    - `initialState`: The initial state value for the slice.
    - `reducers`: An object with reducer functions that specify how the state should be updated in response to actions.
      Example:

    ```javascript
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            //mutating the state here
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItem: (state, action) => {
                state.items.pop(action.payload);
            },
            clearCart: (state, action) => {
                state.items.length = 0;
            },
        },
    });

    export const { addItem, removeItem, clearCart } = cartSlice.actions;

    export default cartSlice.reducer;
    ```
