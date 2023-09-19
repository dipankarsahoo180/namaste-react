# Episode 01 - Inception

## Theory

## 1. What is Emmet?
Emmet is a web development toolkit that allows for faster HTML and CSS coding. It provides shortcuts and abbreviations to help developers generate code more efficiently.
* **Emmet** is a web development tool that allows for the quick and efficient generation of HTML and CSS code using abbreviations. It's especially useful for speeding up the process of writing markup and styles in web development. Emmet works as a plugin or extension in various text editors and integrated development environments (IDEs).

    Here are some examples of how Emmet abbreviations work:

    1. **Basic HTML Structure:**
    - Typing `!` and then pressing the Tab key will generate a basic HTML structure:
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body></body>
        </html>
        ```

    2. **Element with Classes and IDs:**
    - Typing `div.container#main-content` and then pressing the Tab key will generate:
        ```html
        <div class="container" id="main-content"></div>
        ```

    3. **Nested Elements:**
    - Typing `ul>li*3` and then pressing the Tab key will generate an unordered list with three list items:
        ```html
        <ul>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        ```

    4. **Sibling Elements:**
    - Typing `div+p+bq` and then pressing the Tab key will generate a `div` element followed by a `p` element and a `blockquote` element:
        ```html
        <div></div>
        <p></p>
        <blockquote></blockquote>
        ```

    5. **Custom Attributes:**
    - You can use square brackets to define custom attributes. For example, `a[href="#"][title="Home"]` will generate an anchor element with `href` and `title` attributes:
        ```html
        <a href="#" title="Home"></a>
        ```

    6. **Numbering:**
    - Typing `ul>li.item$*5` and then pressing the Tab key will generate an unordered list with five list items, each having a class `item1`, `item2`, and so on:
        ```html
        <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
        </ul>
        ```

    7. **Lorem Ipsum Text:**
    - Typing `p>lorem5` and then pressing the Tab key will generate a paragraph with five words of Lorem Ipsum text.

    8. **CSS Properties:**
    - You can also use Emmet for generating CSS properties. For example, `m10` expands to `margin: 10px;` and `p-20` expands to `padding: 20px;`.

    Emmet is highly customizable and can significantly boost productivity for web developers by allowing them to write code faster with fewer keystrokes.


## 2. Difference between a Library and Framework?
- A library is a collection of pre-written code that developers can use for specific tasks or functions in their applications. Developers have more control over how and when to use a library.
- A framework, on the other hand, is a more comprehensive set of tools, guidelines, and conventions that dictate the structure and flow of an application. Developers work within the framework's constraints and follow its patterns.

## 3. What is CDN? Why do we use it?
CDN stands for Content Delivery Network. It is a network of distributed servers that store and deliver web content, such as images, stylesheets, scripts, and other resources, to users based on their geographic location. CDNs are used to improve the performance, scalability, and reliability of web applications by reducing latency and bandwidth usage.

```html
<!-- CDN links for react. using this link will inject react and react dom library into the browser -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## 4. Why is React known as React?
React is called "React" because it efficiently updates and re-renders the user interface in response to changes in data or user interactions. It reacts to changes and updates the UI accordingly, making it a highly dynamic and interactive library for building user interfaces.

## 5. What is cross-origin in the script tag?
Cross-origin refers to interactions between web pages that originate from different domains. Browsers have security restrictions that prevent scripts from making requests to a different domain than the one from which the script was served. Cross-origin requests can be allowed using techniques like Cross-Origin Resource Sharing (CORS).

```html
<!-- CDN links for react. using this link will inject react and react dom library into the browser -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## 6. What is the difference between React and ReactDOM?
React is a JavaScript library for building user interfaces. It provides the core functionality for defining and managing components, state, and props.
ReactDOM is a specific package used for rendering React components into the DOM (Document Object Model). It is typically used in web applications to render React components in a web browser.

## 7. What is the difference between react.development.js and react.production.js files via CDN?
`react.development.js` is a development version of the React library that includes additional warnings and debugging information. It is larger in size and is intended for use during development and debugging.
`react.production.js` is a production-ready version of the React library that is optimized for performance and does not include development warnings and debugging information. It is smaller in size and should be used in production environments to reduce the application's file size.

## 8. What are async and defer?
- `async` and `defer` are attributes used with the `<script>` tag in HTML.
- `async` indicates that the script should be downloaded and executed asynchronously, without blocking the rendering of the page. The script will execute as soon as it is downloaded, which may not preserve the order of execution.
- `defer` indicates that the script should be downloaded asynchronously but executed in order after the HTML document is fully parsed. It ensures that scripts are executed in the order they appear in the document.
* **`async` and `defer` Attributes:**

    1. **`async` Attribute:**
    - When you include a script with the `async` attribute, the script will be downloaded asynchronously while HTML parsing continues. When the script is finished downloading, it will be executed immediately, potentially before the HTML document has fully loaded.
    - This is useful for non-blocking scripts that don't depend on the DOM structure. However, it may result in scripts executing out of order.

    **Example with React's CDN using `async`**:
    ```html
    <html>
    <head>
        <!-- Load React asynchronously -->
        <script async src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script async src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    </head>
    <body>
        <!-- React components can be used in the body -->
        <div id="root"></div>
        <script>
        // React code here
        </script>
    </body>
    </html>
    ```
    2. **`defer` Attribute:**
    - When you include a script with the `defer` attribute, the script is downloaded asynchronously, but it will only be executed after the HTML document has been fully parsed and the DOM is ready.
    - This ensures that the script is executed in the order it appears in the HTML, making it suitable for scripts that rely on the DOM structure.

    **Example with React's CDN using `defer`**:
    ```html
    <html>
    <head>
        <!-- Load React with defer -->
        <script defer src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script defer src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    </head>
    <body>
        <!-- React components can be used in the body -->
        <div id="root"></div>
        <script>
        // React code here
        </script>
    </body>
    </html>
    ```
    In both examples, React is loaded from a CDN using either `async` or `defer`. The choice between `async` and `defer` depends on your script's requirements. Use `async` for scripts that don't depend on the DOM structure and can run as soon as possible. Use `defer` for scripts that rely on the DOM being fully parsed.

