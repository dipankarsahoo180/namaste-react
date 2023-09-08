# namaste-react :rocket: 

## 01 Inception

<details>
  <summary>Summary</summary>
  
  ### Concepts Learned (01 Inception)

  1. How to use React cdn?
  1. How to write js inside html itself?
  1. How to write js inside a new file and inject it in html?
  1. How to Create a element using React
  1. How to render a component using RactDOM?
  1. How does React.createElement and ReactDOM.createRoot works?
  1. How to use CSS in react?
  1. What is Element,Props,Child in React?
  1. How to Create nested Child using React?
  1. How to Add Sibling Components?

  #### Answer of above ques with Example

  #### HTML

  ```html
  <body>
      <div id="root">
          <!-- It will be loaded for a very small fraction of time and then react will replace this root with its own content -->
          <h1>Dipankar</h1>
      </div>
      <!-- CDN links for react. using this link will inject react and react dom library into the browser -->
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <!-- Only writing above 2 tags would inject react into our project using CDN.
  In the console you can write React and ReactDOM and you can see the properties. -->
      <!-- Include your react js lines inside a new js file -->
      <script src="./App.js"></script>
  </body>
  ```

  react.development.js - base library for react.
  react-dom.development.js - for dom manipulation and interaction.
  Costliest operation in browsers is Dom manipulation.

  #### JS

  ```javascript
  //create an element-simillar to document.createElement
  /**
   * React.createElement(object) =>HTML (browser understands)
   * React.createElement creates and object
   * While it is rendering into DOM it converts the object into html
   * param 1 - type: element name
   * param 2 - props: attributes
   * param 3 - children inside props: text of the element
   */
  const h1 = React.createElement("h1",{xyz:'abc',id:'heading'},"hello World from React!");
  const h2 = React.createElement("h2",{xyz:'abc',id:'heading2'},"This is a h2 element");
  console.log(h1);
  // Create nested Child using React.

  //add multiple child inside the element using array (siblings)
  const child = React.createElement('div',{id:'child'},['child div',h1,h2]);
  const parent = React.createElement('div',{id:'parent'},child);

  //ReactDOM is for dom interaction, Make #root as the root element of react
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //render the element inside root
  root.render(parent);```

  ```

  console.log(h1) will give the entire h1 object.
  React.createElement gives an object which is later converted into HTML (browser understandable).

  #### CSS

  ```css
  #heading{
      color:red;
  }
  ```

</details>

## 02 Igniting our App

<details>
  <summary>Summary</summary>

  ### Concepts Learned (02 Igniting our App)

  1. **Can React build a production ready app without using any package/library**
  Ans- No, A lot of other Packages are required.
  2. **What is NPM**
  Ans- NPM is evrything but Node package Manager. It manages Packages and is a repository containing all the packages. It works as a package manager behind the scene but it's full form is not Node Package Manager.
  3. **How can you make your project use NPM**
  A- We can make our project use npm using `npm init`.
      <details>
        <summary>Example</summary>

        ```cmd
        PS C:\Users\dipan\Desktop\Javascript\React\namaste-react> npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.

        See `npm help init` for definitive documentation on these fields
        and exactly what they do.

        Use `npm install <pkg>` afterwards to install a package and
        save it as a dependency in the package.json file.

        Press ^C at any time to quit.
        package name: (namaste-react)
        version: (1.0.0)                                                                                                          
        description: This is the project done while learning namaste react course
        entry point: (App.js)                                                                                                     
        test command: jest                                                                                                        
        git repository: https://github.com/dipankarsahoo180/namaste-react.git
        keywords:
        author: Dipankar Sahoo                                                                                                    
        license: (ISC)                                                                                                            
        About to write to C:\Users\dipan\Desktop\Javascript\React\namaste-react\package.json:

        {
          "name": "namaste-react",
          "version": "1.0.0",
          "description": "This is the project done while learning namaste react course",
          "main": "App.js",
          "scripts": {
            "test": "jest"
          },
          "repository": {
            "type": "git",
            "url": "git+https://github.com/dipankarsahoo180/namaste-react.git"
          },
          "author": "Dipankar Sahoo",
          "license": "ISC",
          "bugs": {
            "url": "https://github.com/dipankarsahoo180/namaste-react/issues"
          },
          "homepage": "https://github.com/dipankarsahoo180/namaste-react#readme"
        }
        Is this OK? (yes)
      ```

      </details>

  4. **How to add a package /dependencies into your project**
  Ans- By using the command `npm install <package_name>`.
  For ex: `npm install -D Parcel`. Then it will create a node dependencies/devDepenedencies inside your Package.json.
  5. **What is a Bundler**
  Ans-A bundler is the most important package in our project while doing development. There are multiple bundlers like parcel,vite,webpack etc. Our whole needs to be bundled,minified,cleaned,compressed, packages 7 a lot fo other stuffs before it can be sent prod. Bundler does all these jobs.
  6. **What is Parcel**
  Ans- parcel is a bundler. it is easy to configure.
      * `npm install -D parcel`.
    It also does a lot of other functions like:
      * Creating a dev build
      * Building local Server
      * HMR Hot Module Replacement
      * Uses file watching algorithm (written in c++)
      * Caching for faster Builds
      * Image optimization
      * Minification
      * Bundling
      * Compress
      * Consistent Hashing
      * Code Splitting
      * Differential bundling to support older versions
      * Diagnostic
      * Error handling
      * HTTPS
      * Tree shaking - remove unused nodes
  7. **What is -D in `npm install -D Parcel`**
  Ans- That means we are installing parcel package/library as a dev dependency.There are two types of dependencies.
      * dependencies - required for project and is required in production.
      * devDependencies - required during development.
  8. **What is the package.json file**
  Ans- Package.json will be created right after npm init command and it keeps tracks of the dependencies installed.
  9. **What is tilde(`) and carret(^)**
  Ans- They represent auto upgradable to Major and Minor versions respectively.
  10. **What is the package-lock.json file that got created automatically**
  Ans- Package-lock.json has exact version of all the dependencies and their dependencies mentioned in detail. It keeps track of all the details of the dependencies and transitive dependencies used in the project.
  11. **Do we Need to Put node_modules folder into git**
  Ans- Don't put the files and folders that you can regenerate again into git. It is unnecessary.
  12. **How to Ignite your app**
  Ans- Since we have already installed parcel, we can ignite our app using the command `npx parcel index.html`.
      <details>
        <summary> Ignite your app</summary>
        
        ```cmd
        PS C:\Users\dipan\Desktop\Javascript\React\namaste-react> npm parcel index.html
        Unknown command: "parcel"

        To see a list of supported npm commands, run:
          npm help
        PS C:\Users\dipan\Desktop\Javascript\React\namaste-react> npx parcel index.html
        Server running at http://localhost:1234
        ✨ Built in 608ms
        ```

      </details>
  13. **How to get react and react-dom using npm instad of cdn**
  Ans- using CDN is not a good way and is a costliest operation as it makes a network call. we can install these dependensies as packages using `npm install <package_name>` command
  Ex: `npm install react and npm install react-dom`
  14. **Will it work if we remove the CDN?**
  Ans- It will give error as `Uncaught ReferenceError: React is not defined`. So we have to import both react and react-dom
      * ```js
          import React from "react";
          import ReactDOM from "react-dom/client";
        ```

  15. **Will it work afer that?**
  Ans- No It will give you error. `@parcel/transformer-js: Browser scripts cannot have imports or exports.`. Basically you have to Add the **type="module"** attribute to the `<script>` tag inside index.html. It is because by default it is treated as a normal javascript file and to use it as a module and import any other module to this Js file, we have to explicitly tell that this is a js file of module type. And then it would work.

</details>

## 03 Laying the foundation
<details>
  <summary>Summary</summary>

  ### Concepts Learned (03 Laying the foundation)

  1. **How to create a script to start project instead of writing `npx parcel index.html`**    
  Ans-  Go to the package.json and inside `"scripts"`, add the node `"start":"parcel index.html"`. Then go to your terminal and write `npm run start` or `npm start`.  
  Simillarly,  write `"build":"parcel build index.html"` to make a prod build. And to execute it write `npm run build` in terminal. `npm build` will not work here because is `run` is a reserved keyword by npm that works with `start`.

  2. **What is a react element**  
  It is an object but while rendering into DOM using react-dom library it will be rendered as an HTML. This is the syntax to create a react element.</br></br>  

        * ```javascript
          const h1 = React.createElement("h1",{xyz:'abc',id:'heading'},"hello World from React!");
          //ReactDOM is for dom interaction, Make #root as the root element of react
          const root = ReactDOM.createRoot(document.getElementById("root"));
          //render the element inside root
          root.render(h1);
          ```

  3. **Is it a good way to use React.createElement**  
  Ans- No, this is not a good way and make the code complex and is not suitable for creating production ready apps. So, we use **JSX** instead.
  4. **What is JSX?**  
  JSX is a HTML or XML like syntax used for creating react elements. Is is not a part of react,it is also not a pure Javascript. It is transpiled before it reaches javascript engine/converted into object equivalent of `react.createElement()` by **`babel`** library which is also a depenedency for `Parcel` so that browser can unserstand it.</br></br>  

      * ```javascript
        const h1JSX = <h1 id='heading'>Hello World from React with JSX!</h1>
        //ReactDOM is for dom interaction, Make #root as the root element of react
        const root = ReactDOM.createRoot(document.getElementById("root"));
        //render the element inside root
        root.render(h1JSX);
        ```

      * ```javascript
        const h1 = React.createElement("h1",{xyz:'abc',id:'heading1',key:'ist-h1',class="h1Class"},"Hello World from React!");
        const h1JSX = <h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX!</h1>
        //ReactDOM is for dom interaction, Make #root as the root element of react. 
        //Also notice the attributes are in camelCase but they will convert into normal attributes when they render as HTML.
        console.log(h1JSX); //It will log a same object what react.createElement gives
        const root = ReactDOM.createRoot(document.getElementById("root"));
        //render the element inside root
        root.render([h1,h1JSX]);
        ```

  5. **Give some examples of JSX code**  

      * ```Javascript
        const h1JSX = <h1 id='headingJSX' key='ist-h1Jsx'>Hello World from React with JSX!</h1>;
        const h1JSX1 = <h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX!</h1>;
        const h1JSX2 = (<h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX!</h1>);
        const h1JSX3 = (
        <div>
            <h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX!</h1>
            <h2 id='heading2' key='ist-h2Jsx' className="jsxClass">Hello World from React with JSX!</h2>
        </div>
        );
        const h1JSX4 = (
        <>
            <h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX!</h1>
            <h2 id='heading2' key='ist-h2Jsx' className="jsxClass">Hello World from React with JSX!</h2>
        </>);
        //ReactDOM is for dom interaction, Make #root as the root element of react
        const root = ReactDOM.createRoot(document.getElementById("root"));
        //render the element inside root
        root.render([h1,h1JSX,h1JSX1,h1JSX2,h1JSX3,h1JSX4]);
        ```

  6. **What are some of the extensions which you can use to boost your productivity**  

      * Prettier
      * Bracket pair Colorization Toggler.
      * Eslint
      * Better Comments

  7. **What is a React component**  
  It is a function/class and retunred object of which can be rendered as a html in browser.
  8. **What are the types of components in react**  
      * Class based component - old way of writing code
      * Functional component - Latest in tech - It's just a normal javascript function with **PascalCase**.  
      *    <details>
            <summary>Example of Functional component</summary>

            ```Javascript
            import React from "react";
            import ReactDOM from "react-dom/client";

            const Heading = ()=> {
                return (
                    <>
                        <h1 id='heading2' key='ist-h1Jsx' className="jsxClass">Hello World from React with JSX1!!</h1>
                        <h2 id='heading2' key='ist-h2Jsx' className="jsxClass">Hello World from React with JSX2!!</h2>
                    </>
                    )
            };


            //ReactDOM is for dom interaction, Make #root as the root element of react
            const root = ReactDOM.createRoot(document.getElementById("root"));
            //render the element inside root
            root.render(<Heading/>); // Use the functional component as a tag to render
            ```

            </details>
  
  9. **What is component composition**  
  Composing one/more components into another component
      *   <details>
            <summary>Example of component composition</summary>

            ```javascript
            import React from "react";
            import ReactDOM from "react-dom/client";


            const Title = ()=> {
                return (
                    <>
                        <h1 key='title' className="jsxClass">Title!!</h1>
                    </>
                    )
            };
            const Header = ()=> {
                return (
                    <>
                        <Title></Title>
                        <h1 key='header' className="jsxClass">JSX Heading!!</h1>
                        
                    </>
                    )
            };


            //ReactDOM is for dom interaction, Make #root as the root element of react
            const root = ReactDOM.createRoot(document.getElementById("root"));
            //render the element inside root
            root.render(<Header/>);
            ```

          </details>
  
  10. **How can you write javascript expression inside JSX**  
  By wrapping the code inside `{}`
        *   <details>
              <summary>Example</summary>

              ```Javascript
              import React from "react";
              import ReactDOM from "react-dom/client";

              const Elem = () =>(
                  <>
                      <h1>React Element!!</h1>
                  </>
              )
              const title =  (
                      <>
                          <h1 key='title' className="jsxClass">Title!!</h1>
                      </>
                      )
              const number = 1000;
              const Header = ()=> {
                  return (
                      <>
                          {title} 
                          {<Elem/>}
                          {number}
                          {console.log('Dipankar')}
                          <h1 key='header' className="jsxClass">JSX Heading!!</h1>
                      </>
                      )
              };


              //ReactDOM is for dom interaction, Make #root as the root element of react
              const root = ReactDOM.createRoot(document.getElementById("root"));
              //render the element inside root
              root.render(<Header/>);
              ```

            </details>

</details>