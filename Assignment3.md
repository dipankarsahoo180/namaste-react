# Assignment 03 - Laying the foundation

## Assignment

1. **What is JSX?**
Answer: JSX (JavaScript XML) is a syntax extension for JavaScript often used with React to describe what the UI should look like. It allows you to write HTML-like code in JavaScript.

2. **Superpowers of JSX**
Answer: JSX gives you the power to write component-based UIs, embed JavaScript expressions, and use React's virtual DOM to efficiently update the actual DOM.

3. **Role of `type` attribute in script tag? What options can I use there?**
Answer: The `type` attribute in a script tag specifies the scripting language used within that element. Common values include:
    - `"text/javascript"` for JavaScript (default).
    - `"text/babel"` for JSX when using Babel for transpilation.

4. **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
Answer: These are different ways to include a React component in JSX:
    - `{TitleComponent}`: Renders the component without self-closing tags.
    - `{<TitleComponent/>}`: Renders the component with self-closing tags.
    - `{<TitleComponent></TitleComponent>}`: Renders the component with explicit open and close tags.
