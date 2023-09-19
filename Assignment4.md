# Episode 04 - Talk is cheap, show me the code!

## Theory

1. **Is JSX mandatory for React?**
Answer: JSX (JavaScript XML) is not mandatory for React, but it is a recommended and widely used syntax for describing UI components in a more readable way.

2. **Is ES6 mandatory for React?**
Answer: ES6 (ECMAScript 2015) features are not mandatory for React, but they are highly beneficial for writing cleaner and more maintainable code. React codebases commonly use ES6 features.

3. **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
Answer: These are different ways to include a React component in JSX:
   - `{TitleComponent}`: Renders the component without self-closing tags.
   - `{<TitleComponent/>}`: Renders the component with self-closing tags.
   - `{<TitleComponent></TitleComponent>}`: Renders the component with explicit open and close tags.

4. **How can I write comments in JSX?**
Answer: You can write comments in JSX using curly braces and the `/* */` syntax. For example: `{/* This is a JSX comment */}`.

5. **What is `<React.Fragment></React.Fragment>` and `<> </>`?**
Answer: `<React.Fragment></React.Fragment>` and `<> </>` are both used to create fragments in JSX. Fragments allow you to group multiple children without adding extra nodes to the DOM. `<> </>` is a shorthand for `<React.Fragment></React.Fragment>`.

6. **What is Virtual DOM?**
Answer: The Virtual DOM is a concept in React that represents a lightweight copy of the actual DOM. React uses the Virtual DOM to efficiently update only the parts of the actual DOM that have changed, optimizing performance.

7. **What is Reconciliation in React?**
Answer: Reconciliation is the process in React where it compares the Virtual DOM with the previous Virtual DOM snapshot to determine the minimum number of DOM updates needed to keep the UI in sync with the application state.

8. **What is React Fiber?**
Answer: React Fiber is an internal reimplementation of the React core algorithm. It is designed to improve the performance and responsiveness of React applications by enabling asynchronous rendering and better handling of component priorities.

9. **Why do we need keys in React? When do we need keys in React?**
Answer: Keys in React are used to uniquely identify elements in lists. They help React efficiently update and reorder components. Keys are needed whenever you render multiple components in an array or list.

10. **Can we use index as keys in React?**
Answer: While you can use the index of an element as a key in React, it is generally not recommended, especially if the list can change. Using index as keys can lead to issues with component reordering and should be avoided when possible.

11. **What is props in React?**
Answer: Props (short for properties) in React are a way to pass data from a parent component to a child component. They are read-only and help make components reusable and configurable.

12. **What is a Config Driven UI?**
Answer: A Config Driven UI is an approach where the user interface of an application is defined and configured through external configuration files or data rather than hardcoding UI elements. It allows for more dynamic and flexible UIs.

## References

- Code Link: [https://bitbucket.org/namastedev/namaste-react-live/src/master/](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- React without JSX: [https://reactjs.org/docs/react-without-jsx.html](https://reactjs.org/docs/react-without-jsx.html)
- Virtual DOM: [https://reactjs.org/docs/faq-internals.html](https://reactjs.org/docs/faq-internals.html)
- Reconciliation: [https://reactjs.org/docs/reconciliation.html](https://reactjs.org/docs/reconciliation.html)
- React Fiber Architecture: [https://github.com/acdlite/react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)
- React Without ES6: [https://reactjs.org/docs/react-without-es6.html](https://reactjs.org/docs/react-without-es6.html)
- Index Keys as Anti-Pattern: [https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
