# Episode 10 - Jo dikhta hai vo bikta hai

## Theory:

1. **Explore all the ways of writing CSS.**
   **Answer:**

    CSS (Cascading Style Sheets) can be written in various ways to style HTML elements. Here are some common methods, along with examples:

    1. **Inline CSS:**
       Inline CSS involves applying styles directly to individual HTML elements using the `style` attribute.
       Example:

        ```html
        <p style="color: blue; font-size: 16px;">
            This is a blue text with a font size of 16 pixels.
        </p>
        ```

    2. **Internal CSS:**
       Internal CSS is placed within the HTML document's `<style>` element in the document's `<head>` section.
       Example:

        ```html
        <head>
            <style>
                p {
                    color: red;
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <p>This is a red text with a font size of 18 pixels.</p>
        </body>
        ```

    3. **External CSS:**
       External CSS involves storing CSS styles in separate .css files and linking them to HTML documents using `<link>` tags.
       CSS File (styles.css):

        ```css
        /* styles.css */
        p {
            color: green;
            font-size: 20px;
        }
        ```

        HTML File:

        ```html
        <head>
            <link rel="stylesheet" type="text/css" href="styles.css" />
        </head>
        <body>
            <p>This is a green text with a font size of 20 pixels.</p>
        </body>
        ```

    4. **CSS Preprocessors:**
       CSS preprocessors like Sass and Less allow you to write CSS with additional features and then compile it to regular CSS.
       Example (Sass):

        ```sass
        // styles.scss
        $primary-color: blue;
        p {
          color: $primary-color;
          font-size: 22px;
        }
        ```

        After compilation to CSS:

        ```css
        /* styles.css */
        p {
            color: blue;
            font-size: 22px;
        }
        ```

    5. **CSS-in-JS:**
       With CSS-in-JS libraries like styled-components in React, you can write CSS styles as JavaScript objects.
       Example (styled-components):

        ```javascript
        import styled from "styled-components";

        const StyledParagraph = styled.p`
            color: purple;
            font-size: 24px;
        `;

        // Usage in React component
        function MyComponent() {
            return (
                <StyledParagraph>
                    This is a purple text with a font size of 24 pixels.
                </StyledParagraph>
            );
        }
        ```

    These are some of the common ways to write CSS for styling web pages, each with its own use cases and advantages. The choice of method depends on your project requirements and coding preferences.

2. [**How do we configure Tailwind?**](https://tailwindcss.com/docs/guides/parcel)
   **Answer:** To configure Tailwind CSS in your project, follow these steps:
    - Install Tailwind CSS using npm or yarn:
        ```shell
        npm install -D tailwindcss postcss
        ```
    - Create a configuration file for Tailwind CSS:
        ```shell
        npx tailwindcss init
        ```
        This command will create a `tailwind.config.js` file in your project's root directory.
    - In the `tailwind.config.js` file, you can customize your project's design system, colors, fonts, and more by editing the configuration object.
    - Include Tailwind CSS in your project's styles by importing it in your CSS or JavaScript files.
    - Start using Tailwind CSS classes in your HTML or JSX to style your components and elements.
3. **In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?**
   **Answer:** In the `tailwind.config.js` file, several keys are used to configure and extend Tailwind CSS:
    - `content`: This key is used to specify the content-related configurations for Tailwind CSS. You can define the source files for your project's HTML and JavaScript files so that Tailwind CSS can scan them for class usage. Example:
        ```javascript
        content: ["./src/**/*.{html,js}"];
        ```
    - `theme`: The `theme` key allows you to customize the design system of your project. You can define colors, fonts, spacing, and other styles within the `theme` object. Example:
        ```javascript
        theme: {
          extend: {
            colors: {
              primary: '#3490dc',
            },
            fontFamily: {
              sans: ['Roboto', 'sans'],
            },
          },
        }
        ```
    - `extend`: The `extend` key is used to extend or override the default Tailwind CSS configuration. You can add new utility classes, modify existing ones, or extend the design system. Example:
        ```javascript
        extend: {
          spacing: {
            '72': '18rem',
            '84': '21rem',
          },
        }
        ```
    - `plugins`: The `plugins` key allows you to enable and configure Tailwind CSS plugins. You can add third-party plugins or custom plugins to enhance Tailwind's functionality. Example:
        ```javascript
        plugins: [require("@tailwindcss/forms")];
        ```
4. **Why do we have a .postcssrc file?**
   **Answer:** The `.postcssrc` file is used to configure PostCSS, which is a tool for transforming and optimizing your CSS. This file allows you to define PostCSS plugins and their options. PostCSS is often used in conjunction with Tailwind CSS to apply additional transformations to the generated CSS, such as autoprefixing for browser compatibility and minification. Example:
    ```json
    {
      "plugins": {
          "autoprefixer": {},
          "cssnano": {}
      }
    }
    ```
## References:

- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Material UI](https://mui.com/)
