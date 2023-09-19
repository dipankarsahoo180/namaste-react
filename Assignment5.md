# Episode 05 - Let's get Hooked!

## Theory

1. **What is the difference between Named Export, Default export and * as export?**  
**Answer:** Named Export: In ES6 modules, you can export specific variables, functions, or classes using `export`. These exports are then imported by their specific names in other modules.  
Default Export: You can export a single "default" value from a module using `export default`. When importing, you can choose any name for the default export.  
`*` as Export: You can use `* as` syntax to import all exports from a module into a single object.

2. **What is the importance of config.js file?**  
**Answer:** A `config.js` file is often used to store configuration settings for an application. It allows you to centralize configuration values, making it easier to manage and modify settings across your app. This can include API keys, environment-specific variables, or any other configuration data.

3. **What are React Hooks?**  
**Answer:** React Hooks are functions that allow functional components to manage state, side effects, and other React features that were previously only available in class components. Hooks like `useState` and `useEffect` enable you to add state and lifecycle behavior to functional components.

4. **Why do we need a useState Hook?**  
**Answer:** The `useState` Hook in React is used to introduce state management within functional components. It allows you to declare state variables and provides a way to update them, triggering re-renders. For example:

   ```javascript
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

