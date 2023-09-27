# Episode 09 - Optimizing our App

## Theory

1. **When and why do we need `lazy()`?**
   **Answer:**
     - The `lazy()` function in React is used to perform code splitting, which means loading JavaScript code only when it's needed. You use `lazy()` to dynamically import a component, making it suitable for optimizing large apps with multiple routes. It's often used with React's `Suspense` component.

2. **What is `suspense`?**
   **Answer:**
     - `Suspense` is a React feature that allows components to "suspend" rendering while waiting for some asynchronous operation to complete, such as data fetching or code splitting. It enables a better user experience by showing fallback content while the data or code is loading.

3. **Why do we get this error: "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with `startTransition`"? How does `suspense` fix this error?**
   **Answer:**
     - This error occurs when a component suspends while handling a synchronous user input event. `startTransition` is used to indicate that a certain update is not crucial for the user experience and can be deferred. `suspense` helps fix this error by allowing components to display a fallback UI, like a loading indicator, while the suspended update is in progress. It improves the perceived performance of the app.

4. **Advantages and disadvantages of using this code splitting pattern?**
   **Answer:**
     - Advantages:
       - Improved initial loading times: Only necessary code is loaded initially.
       - Better performance: Reduced bundle size leads to faster page loads.
       - Code isolation: Components are loaded independently, reducing interference.
     - Disadvantages:
       - Increased complexity: Managing code splitting requires extra effort.
       - Potential waterfall loading: Over-splitting can lead to additional HTTP requests.
       - Requires tooling: React features like `lazy()` and `Suspense` are needed.

5. **When and why do we need `suspense`?**
   **Answer:**
     - `Suspense` is needed when you have asynchronous operations (like data fetching or code splitting) in your components that might take some time to complete. It's used to improve the user experience by displaying fallback content while waiting for these operations. You need `suspense` in scenarios where rendering would otherwise be blocked by these asynchronous tasks.

6. **Give an example of `lazy` and `suspense`**
   **Answer:**
     - You can use the `lazy()` function along with `Suspense` to perform code splitting in your app. Import components lazily to optimize loading times and wrap them with `Suspense` to handle loading gracefully.
     - Example:
        ```javascript
        import React, { lazy, Suspense } from 'react';

        const LazyComponent = lazy(() => import('./LazyComponent'));

        function App() {
          return (
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
              </Suspense>
            </div>
          );
        }
        ```

## References

- [Custom Hooks in React](https://reactjs.org/docs/hooks-custom.html)
- [React Lazy](https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting)
