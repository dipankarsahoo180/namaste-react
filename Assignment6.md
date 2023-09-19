# Episode 06 - Exploring the world

## Theory

1. **What is a Microservice?**  
**Answer:** A microservice is a software architectural style that structures an application as a collection of small, independent services that communicate with each other through well-defined APIs. Each microservice is responsible for a specific business capability and can be developed, deployed, and scaled independently.

2. **What is Monolith architecture?**  
**Answer:** Monolith architecture is the traditional approach to building applications where all the components, modules, and functions are tightly integrated into a single codebase. In a monolith, the entire application is developed and deployed as a single unit.

3. **What is the difference between Monolith and Microservice?**  
**Answer:** The main differences between Monolith and Microservice architectures are:
   - Monolith is a single, tightly integrated codebase, while Microservices are smaller, independent services.
   - Monoliths are usually easier to develop initially, while Microservices offer better scalability and maintenance options.
   - Monoliths have a single database, whereas Microservices often have individual databases for each service.
   - Monoliths may have slower development cycles, while Microservices enable faster, independent development and deployment of services.

4. **Why do we need a useEffect Hook?**  
**Answer:** The `useEffect` Hook in React is used to manage side effects in functional components. It allows you to perform tasks like data fetching, DOM manipulation, or subscriptions after the component has rendered. It's essential for handling asynchronous operations and keeping the component's state and the DOM in sync.

5. **What is Optional Chaining?**  
**Answer:** Optional Chaining is a JavaScript feature that allows you to access properties of an object without the need to explicitly check if each level of nesting exists. It uses the `?.` syntax. For example: `const value = obj?.prop1?.prop2`.

6. **What is Shimmer UI?**  
**Answer:** Shimmer UI is a design pattern used to indicate to users that content or data is loading. It typically involves displaying animated placeholders or "shimmer" effects in place of content until the actual data is loaded.

7. **What is the difference between JS expression and JS statement?**  
**Answer:** In JavaScript, an expression is a piece of code that evaluates to a value. It can be as simple as a variable or a complex combination of operators and values. In contrast, a statement is a complete line of code that performs an action. For example, `x = 5;` is a statement that assigns the value `5` to the variable `x`.

8. **What is Conditional Rendering, explain with a code example?**  
**Answer:** Conditional rendering in React involves showing or hiding elements based on certain conditions. Here's an example using the `if` statement for conditional rendering:

   ```javascript
   import React from 'react';

   function ExampleComponent({ condition }) {
      if (condition) {
         return <div>This content is rendered conditionally.</div>;
      } else {
         return <div>Condition is not met.</div>;
      }
   }
   ```

9. **What is CORS?**  
**Answer:** CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control and restrict web page scripts from making requests to a different domain than the one that served the web page. It is designed to prevent potential security vulnerabilities, such as cross-site request forgery (CSRF) and data theft.

10. **What is async and await?**  
   **Answer:** `async` and `await` are JavaScript keywords used for asynchronous programming. `async` is used before a function declaration to indicate that the function will always return a promise. `await` is used inside an `async` function to pause the execution until a promise is resolved or rejected, allowing asynchronous code to be written in a more synchronous style.

11. **What is the use of `const json = await data.json();` in `getRestaurants()`?**  
   **Answer:** In the context of a web API call, `const json = await data.json();` is used to asynchronously parse the response data into a JSON format. `await data.json()` waits for the response to be fully received and then parses it into a JavaScript object. The `json` constant then holds the parsed JSON data, which can be used in the application.
