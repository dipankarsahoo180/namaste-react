# namaste-react :rocket: 

## 01 Inception

<details>
  <summary>Summary</summary>
  
  ### Concepts Learned (01 Inception)

  1. Use React cdn
  1. How to write js inside html itself
  1. How to write js inside a new file and inject it in html
  1. How to Create a element using React
  1. How to render a component using RactDOM
  1. How does React.createElement and ReactDOM.createRoot works
  1. How to use CSS in react
  1. What is Element,Props,Child in React
  1. How to Create nested Child using React
  1. How to Add Sibling Components

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
  7. **What is -D in above command**
  Ans- There are two types of dependencies. dependencies are required for project and is required in production. devDependencies are required during development.
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