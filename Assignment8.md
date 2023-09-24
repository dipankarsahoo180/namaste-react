# Episode 08 - Let's get Classy

## Theory

1. **How do you create Nested Routes react-router-dom configuration?**
   **Answer:**
     - Nested routes in `react-router-dom` can be created by rendering a `<Route>` component within the component associated with another route. This allows you to define child routes within a parent route. For example:
     ```javascript
     <Route path="/parent" component={ParentComponent}>
       <Route path="/child" component={ChildComponent} />
     </Route>
     ```

2. **Read about `createHashRouter` and `createMemoryRouter` from React Router docs.**
   **Answer:**
     - `createHashRouter` and `createMemoryRouter` are different router components provided by `react-router-dom`. `createHashRouter` uses URL hashes for routing, while `createMemoryRouter` doesn't rely on the browser's URL and keeps routing in memory. They can be imported like this:
     ```javascript
     import { createHashRouter } from 'react-router-dom';
     import { createMemoryRouter } from 'react-router-dom';
     ```

3. **What is the order of life cycle method calls in Class Based Components?**
   **Answer:**
     - In a class-based component, the typical order of lifecycle method calls is as follows:
     1. `constructor`
     2. `static getDerivedStateFromProps`
     3. `render`
     4. `componentDidMount`
     5. `shouldComponentUpdate`
     6. `render`
     7. `componentDidUpdate`
     8. `componentWillUnmount`

4. **Why do we use `componentDidMount`?**
   **Answer:**
     - `componentDidMount` is used for performing side effects in a class-based component. It is called after the component has been added to the DOM. Common use cases include data fetching, setting up subscriptions, or manually changing the DOM. For example:
     ```javascript
     componentDidMount() {
       // Perform data fetching or other side effects here
     }
     ```

5. **Why do we use `componentWillUnmount`? Show with an example.**
   **Answer:**
     - `componentWillUnmount` is used for cleanup tasks before a component is removed from the DOM. For example, if you have set up event listeners or timers in `componentDidMount`, you should clean them up in `componentWillUnmount` to prevent memory leaks. Example:
     ```javascript
     componentDidMount() {
       this.timer = setInterval(() => {
         // Do something repeatedly
       }, 1000);
     }

     componentWillUnmount() {
       clearInterval(this.timer); // Clean up the timer
     }
     ```

6. **(Research) Why do we use `super(props)` in the constructor?**
   **Answer:**
     - In class-based components, when you extend a class (e.g., `React.Component`), you need to call `super(props)` in the constructor to invoke the constructor of the parent class. This is necessary to correctly initialize the component's state and props.

7. **(Research) Why can't we have the callback function of `useEffect` async?**
   **Answer:**
     - The callback function passed to `useEffect` cannot be `async` because `useEffect` doesn't expect a promise to be returned. It expects either nothing or a cleanup function. Using `async` in the callback can lead to unexpected behavior and errors.

## Coding

1. **Create a Class Based Component**
   **Answer:**
     - Create a class-based component by defining a class that extends `React.Component`.
     - Create two class-based child components.
     - Pass props from the parent component to the child components.
     - Create a constructor to initialize the component's state.
     - Use `this.setState` to update the state variables.
     - If there are multiple state variables, you can update them independently.
     - Use `console.log` to observe the order of execution of lifecycle methods.

2. **Create an interval inside `componentDidMount`?**
   **Answer:**
     - You can create an interval inside the `componentDidMount` method to perform actions at regular intervals. After evry interval it will call `render` method, followed by `componentDidUpdate` method.
     - Don't forget to clear the interval using `clearInterval` to avoid memory leaks.

## Reference

- React Life Cycle Method Diagram: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- Code Link: [https://bitbucket.org/namastedev/namaste-react-live/src/master/](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
