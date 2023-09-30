# Assignment 11 - Data is the new Oil

## Theory

1. **What is prop drilling?**
   **Answer:** Prop drilling refers to the process of passing data from a higher-level component to a lower-level component by passing it through intermediary components that do not need the data. It can make your component tree harder to maintain and lead to performance issues.

     Example:
     ```jsx
     // ParentComponent.js
     import React from 'react';
     import ChildComponent from './ChildComponent';

     function ParentComponent() {
       const data = 'Some data';

       return (
         <div>
           <ChildComponent data={data} />
         </div>
       );
     }

     // ChildComponent.js
     import React from 'react';

     function ChildComponent(props) {
       return <GrandChildComponent data={props.data} />;
     }

     // GrandChildComponent.js
     import React from 'react';

     function GrandChildComponent(props) {
       // Access data here
       return <div>{props.data}</div>;
     }
     ```

2. **What is lifting the state up?**
   **Answer:** Lifting the state up is a React pattern where you move the state from a lower-level component to a higher-level component in the component hierarchy. This is done to share and manage state across multiple components that need access to the same data.

     Example:
     ```jsx
     // ParentComponent.js
     import React, { useState } from 'react';
     import ChildComponent from './ChildComponent';

     function ParentComponent() {
       const [count, setCount] = useState(0);

       const incrementCount = () => {
         setCount(count + 1);
       };

       return (
         <div>
           <ChildComponent count={count} incrementCount={incrementCount} />
         </div>
       );
     }

     // ChildComponent.js
     import React from 'react';

     function ChildComponent(props) {
       return (
         <div>
           <p>Count: {props.count}</p>
           <button onClick={props.incrementCount}>Increment</button>
         </div>
       );
     }
     ```

3. **What are Context Provider and Context Consumer?**
   **Answer:** Context Provider and Context Consumer are components provided by React's Context API. The Provider component allows you to pass data down the component tree to be consumed by components that are Consumers of that context.

     Example:
     ```jsx
     // MyContext.js
     import React, { createContext, useContext } from 'react';

     const MyContext = createContext();

     export function MyProvider({ children }) {
       const data = 'Some data';

       return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
     }

     export function useMyContext() {
       return useContext(MyContext);
     }
     ```

4. **If you don’t pass a value to the provider does it take the default value?**
   **Answer:** Yes, if you don't pass a value to the Provider, it takes the default value, which is specified when creating the context using `createContext`. However, if you provide a value explicitly when using the Provider, it will override the default value.

## References

- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React Context](https://reactjs.org/docs/context.html)
