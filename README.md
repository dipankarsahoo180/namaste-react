# namaste-react :rocket: 


This is an project based learning where we will build a food ordering app having following components.

  * Header
    - Logo
    - Nav items
  * Body
    - Search bar and button
    - Card container (repeatable)
        - Img
        - Restaurant name, Star rating, cuisines, delivery time
  * Footer
    - Copyright
    - Links
    - Address
    - Contact us


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
    *   ```js
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

    *   ```javascript
        const h1JSX = <h1 id='heading'>Hello World from React with JSX!</h1>
        //ReactDOM is for dom interaction, Make #root as the root element of react
        const root = ReactDOM.createRoot(document.getElementById("root"));
        //render the element inside root
        root.render(h1JSX);
        ```

    *   ```javascript
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

    *   ```Javascript
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
        <details>
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
    <details>
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

## 04 Talk is cheap, show me the code

<details>
<summary>Summary</summary>

### Concepts Learned (04 Talk is cheap, show me the code)

1. **How can you write css in react?** 
    - By using attribute className instead of class.  
        <details>
        <summary>Example</summary>

        ```javascript
        const AppLayout = () =>{
            return (
                <div className="app">
                    <Header/>
                    <Body/>
                </div>
            )
        }
        ```

        ```css
        .app{
            display: flex;
            justify-content: space-between;
            border: 1px solid black;
        }
        ```
        
        </details> 

    - By using inline css.  
        <details>
        <summary>Example</summary>

        ```javascript
        const styleCard = {
            background: 'lightgrey',
            textAlign:'center'
        }

        const Restaurant = () => {
            return(
                <div className="res-card" style={styleCard}>
                    <h3>Meghna Foods</h3>
                </div>
            )
        }
        ```

        OR  

        ```javascript
        const styleCard = {
            background: 'lightgrey',
            textAlign:'center'
        }

        const Restaurant = () => {
            return(
                <div className="res-card" style={{ background: 'lightgrey', textAlign:'center' }}>
                    <h3>Meghna Foods</h3>
                </div>
            )
        }
        ```

        </details> 
        
2. **What is props in react?**  
Ans- By using props we can pass properties from parent comp/arguements to a function.  
    -   <details>
        <summary>Example(we are passing name,cuisine as props)</summary>
        
        ```javascript
        const Body = () => {
            return(
                <div className="body">
                    <div className="search">
                        Search            
                    </div>

                    <div className="res-container">
                        <Restaurant name="Jubilee Foods" cuisine="South Indian"/>
                        <Restaurant name="KFC" cuisine="American"/>
                        <Restaurant/>
                        <Restaurant/>
                    </div>
                </div>
            )
        }
        const styleCard = {
            background: 'lightgrey',
            textAlign:'center'
        }

        const Restaurant = ({name,cuisine}) => {
            return(
                <div className="res-card" style={styleCard}>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fq1uss75jajmt1oueyla"></img>
                    <h3>{name || 'Meghna Foods'}</h3>
                    <h4>{cuisine || 'North Indian'}</h4>
                    <h4>4.4</h4>
                    <h4>38 mins</h4>
                </div>
            )
        }
        ```
        </details>

3. **What is  config driven UI?**  
It means the UI is driven by a config. Which means based on configuration user will be shown/get personalized data
Ex: Swiggy API `https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3625249&lng=85.83262599999999&`

4. **How would you loop over an array and render multiple cards?**  
-   Ex:  
    ```javascript
    const Body = () => {
        return(
            <div className="body">
                <div className="search">
                    Search
                </div>

                <div className="res-container">
                {
                    card?.gridElements?.infoWithStyle?.restaurants?.map(el=>
                        <Restaurant key={el.info.id} resData={el}/>
                    )
                }
                </div>
            </div>
        )
    }
    ```
5. **Give an example how you can use fetch API**  
First Install this chrome extension from here `https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino`.  
and then run the following code to understand

    ```javascript
    const Body = () => {
        const [card,setCard] = useState([]);

        const  fetchData = async() => {
            try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3625249&lng=85.83262599999999');
            const data = await response.json();
            const card = data.data.cards.find(el => el.card.card.id === 'top_brands_for_you').card.card;
            setCard(card?.gridElements?.infoWithStyle?.restaurants);
            } catch (error) {
            console.error('Fetch error:', error);
            //throw error;
            }
        
        }

        useEffect(() => {
            fetchData();
        }, []);

        
        return(
            <div className="body">
                <div className="search">
                    Search
                </div>

                <div className="res-container">
                {
                    card?.map(el=>
                        <Restaurant key={el.info.id} resData={el}/>
                    )
                }
                </div>
            </div>
        )
    }
    ```
    
</details>

## 05 Lets get hooked

<details>
<summary>Summary</summary>

### Concepts Learned (05 Lets get hooked)

1. **What are the different types of import we use in Javascript?**  
Two types of Export/Import.  
    -   Default Export/Import
        ```javascript
        export default Component;  
        import Component from "path";
        ```

    -   Named Export/Import
        ```javascript
        export const Component;  
        import {Component} from "path";
        ```

1. **What are hooks in React?**  
Hooks are like normal js functions but provided by react.  
for ex: `useState()` and `useEffect()`

1. **What is useState() hook**  
useState is a React Hook that lets you add a state variable to your component.  

    ```javascript
    const [state, setState] = useState(initialState);
    ```
1. **What is reconciliation?**  
It is an alogorithm came in react 16 by react fiber, which uses an algorithm to selectively update some particular nodes/elements inside html instead of whole html by comapring the DOM nodes.  
Actual DOM: These are the real tags.  
Virtual DOM: representation of actual DOM. It is basically the object (reactElement). You can console log <Body/> and/or <Head/> and you can see an object is printed.
</details>

## 06 Exploring the World

<details>
<summary>Summary</summary>

### Concepts Learned (06 Exploring the World)

1. **What is monolithic and microservices architecture**  
A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services. <a href="https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith">refer here</a>

2. **How `useEffect()` is called**  
First the component will be rendered as HTML and  
then it will call `useEffect()` and  
then it will run the code inside the callback of useEffect

3. **Can we write multiple `useEffect()` inside a single component**  
Yes.
    ```Javascript
    useEffect(() => {
        console.warn('use effect 1');
    }, []);
    useEffect(() => {
        fetchData();
        console.warn('use effect 2');
    }, []);
    useEffect(() => {
        console.warn('use effect 3');
    }, []);
    ```
4. **What is Shimmer**  
We load a fake screen instead of blank untill we get the data from server/api in realtime to improve UX. We acheive this using conditional rendering.

    ```javascript
    const Body = () => {

        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
        const fetchData = async () => {
            try {
                const response = await fetch(SWIGGY_URL);
                const data = await response.json();
                const card = data.data.cards.find(el => el.card.card.id === 'top_brands_for_you').card.card;
                setListOfRestaurants(card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredCard(card?.gridElements?.infoWithStyle?.restaurants);
            } catch (error) {
                console.error('Fetch error:', error);
                //throw error;
            }

        }

        useEffect(() => {
            fetchData();
        }, []);
        //conditioinal rendering
        return (listOfRestaurants.length === 0) ?
        <Shimmer /> :

        (
            <div className="filter">
                <div className="search">
                    <input className='search-text' type="text" onChange={(e) => {
                        if(!e.target?.value) {
                            setFilteredRestaurants(listOfRestaurants);
                            return;
                        }else{
                            const filteredCard = listOfRestaurants.filter(el => (el.info.name.toUpperCase()).includes(e.target?.value?.toUpperCase()));
                            setFilteredRestaurants(filteredCard);
                        }
                    }}>

                    </input>
                </div>
                <button className='top-rated-btn' onClick={
                    () => {
                        const filteredCard = listOfRestaurants.filter(el => el.info.avgRating > 4);
                        setFilteredRestaurants(filteredCard);
                    }
                }> Filter Top Rated restaurants</button>

                <button className='reset-btn' onClick={
                    () => {
                        setFilteredRestaurants(listOfRestaurants);
                    }
                }> Reset </button>
            </div>
        )
    }
    ```
    
</details>




## 07 Finding the path
<details>
<summary>Summary</summary>

### Concepts Learned (07 Finding the path)

1. **How to use routing in react?**  
we can use react-router-dom package to create routes in react.  
    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header";
    import { Body } from "./components/Body";
    import { createBrowserRouter,RouterProvider } from "react-router-dom";
    import About from "./components/About";


    const AppLayout = () =>{
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }


    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element : <AppLayout/>,
            },
            {
                path:"/about",
                element : <About/>
            },
            
        ]
    );

    //ReactDOM is for dom interaction, Make #root as the root element of react
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //use RouterProvider for Routing
    root.render(<RouterProvider router={appRouter} />);
    ```

2. **How to routing but keeping Header and Footer constant in react?**
We can use `</Outlet>` and `children` property inside router object as a combination to do that
    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header";
    import { Body } from "./components/Body";
    import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
    import About from "./components/About";
    import ContactUs from "./components/ContactUs";
    import Cart from "./components/Cart";

    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
        )
    }


    const appRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <AppLayout />,
                children: [

                    {
                        path: "",
                        element: <Body />
                    }, 
                    {
                        path: "about",
                        element: <About />
                    }, 
                    {
                        path: "contact-us",
                        element: <ContactUs />
                    }, 
                    {
                        path: "cart",
                        element: <Cart />
                    }
                ]
            }

        ]
    );

    //ReactDOM is for dom interaction, Make #root as the root element of react
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //render the element inside root
    root.render(<RouterProvider router={appRouter} />);
    ```

2. **How can you build links so that user can click on them and redirected to certain routes in react?**  
We can use `<Link to=''>Label</Link>` from react-router-dom to acheive this.  
    ```javascript

    import { useState } from "react";
    import logo from "../assets/logo.png"
    import { Link } from "react-router-dom";

    const Header = () => {
        const [jsxButton,setJsxButton] = useState('Login')
        return (
            <>
                <div className="header">
                    <Link to='/'>
                        <div className="logo">
                        <img src={logo}></img>
                        </div>
                    </Link>
                    
                    <div className="nav-items">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='about'>About us</Link></li>
                            <li><Link to='contact-us'>Contact us</Link></li>
                            <li><Link to='cart'>Cart</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    export default Header;
    ```

3. **How can you create your own error page in react?**  
By adding `errorElement: <componentName/>` property inside the router object.
    ```javascript
    const appRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <AppLayout />,
                errorElement: <Error/>,
                children: [
                    {
                        path: "",
                        element: <Body />
                    }, 
                    {
                        path: "about",
                        element: <About />
                    }, 
                    {
                        path: "contact-us",
                        element: <ContactUs />
                    }, 
                    {
                        path: "cart",
                        element: <Cart />
                    }
                ]
            }

        ]
    );
    ```

4. **How can you get error details and show them in error page in react?**  
By using `useRouteError` from `react-router-dom`.  


    ```javascript
    import Header from "./Header"
    import {useRouteError} from 'react-router-dom'; 

    const Error = () => {
        const error = useRouteError()
        return (
            <>
                <Header></Header>
                <h1>Opps!! {error.status} {error.statusText}</h1>
                <h1>{error?.error?.message}</h1>
            </>
        )
    }
    export default Error;
    ```

4. **How can use dynamic routing in react?**  
    * Step 1: Create an element and use useParams() to get the dynaic parameter from url. `const {resId} = useParams();` .
    * Step 2: pass the queryparam as   resId from Link tag
        ```javascript
        <Link to={'restaurant/'+el.info.id}>
            <RestaurantCard resData={el} />
        </Link>
        ```
    * Step 3: Configure the dyanmic routing in router object as well  
        ```javascript
        {
            path: "restaurant/:resId",
            element: <RestaurantMenu />
        }
    
        ```

</details>


## 08 Let's get Classy
<details>
<summary>Summary</summary>

### Concepts Learned (08 Let's get Classy)

1. **What are class based components?**  
This is an older way of writing code in react. Ex:  

    ```javascript
    import React from "react";

    export default class UserClass extends React.Component {
    
    render() {
        return (
            <>
                <h1>Name: Dipankar</h1>
                <h1>Location: Bangalore</h1>
                <h1>Contact: +9098909890</h1>
            </>
            );
        }
    }
    ```

1. **How to access props in class based component?**  
By using `constructor(props)`. Ex: 
 
    ```javascript
    import React from "react";

    export default class UserClass extends React.Component {
        constructor(props) {
            super(props); // We always have to write this
            //console.log(props);
            this.name = props.name;
            //OR
            //this.name = this.props.name
        }
        /** This will also work
        render() {
            return (
                <>
                    <h1>Name: {this.name}</h1>
                    <h1>Location: {this.props.location}</h1>
                    <h1>Contact: +9098909890</h1>
                </>
            );
        }
        */
        render() {
        const {name,location} = this.props;
            return (
                <>
                    <h1>Name: {name}</h1>
                    <h1>Location: {location}</h1>
                    <h1>Contact: +9098909890</h1>
                </>
            );
        }
    }
    ```

    And pass the props from parent like below:

    ```javascript
    import React from "react";
    import UserClass from "./UserClass";

    const About = () => {
        return (
            <>
                <h1>About</h1>
                <div className="about-card">
                    <div>
                        <UserClass name="Dipankar (Class Based)" location="Bangalore(Class)" />
                    </div>
                </div>
            </>
        );
    };

    export default About;
    ```

1. **How to create and update state variable in class?**  
States were created whenever a new instance of class is created in class based components in react.
Constructor is a best place to create state variables unsing `this.state`.  
We can not update the state variables directly like `this.state.count =12;Instead we use 
    ```javascript
    this.setstate({
        stateName:'stateValue'
    })
    ```
    Example:

    ```javascript
    import React from "react";

    export default class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                result: "Pass",
            };
        }

        render() {
            const updateCount = () => {
                this.setState({
                    count: ++this.state.count,
                    result: "Failed",
                });
            };
            const { name, location } = this.props;
            return (
                <>
                    <h1>Name: {name}</h1>
                    <h1>Location: {location}</h1>
                    <h1>Contact: +9098909890</h1>
                    <h1>Count: {this.state.count}</h1>
                    <h1>Result: {this.state.result}</h1>
                    <button className="global-btn" onClick={() => updateCount()}>
                        Update State Variable
                    </button>
                </>
            );
        }
    }
    ```

1. **Explain lifecycle of react class based components**  
    Constuctor() ==> Render() ==>(Parent followe by child) 
    Child component didMoount ==>Parent Component didMount;

    Parent constructor
    About.js:18 Parent render start
    About.js:33 inside parend render

    UserClass.js:10 Child constructor
    UserClass.js:24 Child render Start
    UserClass.js:35 Inside child render

    ChildClassA.js:6 ChildClassA constructor
    ChildClassA.js:13 ChildClassA render Start
    ChildClassA.js:17 Inside ChildClassA render

    ChildClassB.js:6 ChildClassB constructor
    ChildClassB.js:13 ChildClassB render Start
    ChildClassB.js:17 Inside ChildClassB render

    UserClass.js:13 Child component Did Mount

    ChildClassA.js:9 ChildClassA component Did Mount

    ChildClassB.js:9 ChildClassB component Did Mount

    About.js:13 Parent component Did Mount<br/><br/>

    Example Parent Component:
    ```javascript
    import React from "react";
    import User from "./User";
    import UserClass from "./UserClass";
    import ChildClassA from "./ChildClassA";
    import ChildClassB from "./ChildClassB";
    class About extends React.Component {
        constructor(props) {
            super(props);
            console.log("Parent constructor");
        }

        componentDidMount() {
            console.log("Parent component Did Mount");
        }

        render() {
            console.log("Parent render start");
            return (
                <>
                    <h1>About</h1>
                    <div className="about-card">
                        <div>
                            <UserClass
                                name="Dipankar (Class Based)"
                                location="Bangalore(Class)"
                            />
                        </div>
                    </div>
                    {console.log("inside parend render")}
                    <ChildClassA />
                    <ChildClassB />
                </>
            );
        }
    }

    export default About;
    ```
    Child Component Example:
    ```javascript
    import React from "react";

    export default class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                result: "Pass",
            };
            console.log('Child constructor');
        }
        componentDidMount(){
            console.log('Child component Did Mount')
        }

        render() {
            const updateCount = () => {
                this.setState({
                    count: ++this.state.count,
                    result: "Failed",
                });
            };
            const { name, location } = this.props;
            console.log('Child render Start');
            return (
                <>
                    <h1>Name: {name}</h1>
                    <h1>Location: {location}</h1>
                    <h1>Contact: +9098909890</h1>
                    <h1>Count: {this.state.count}</h1>
                    <h1>Result: {this.state.result}</h1>
                    <button className="global-btn" onClick={() => updateCount()}>
                        Update State Variable
                    </button>
                    {console.log('Inside child render')}
                </>
            );
        }
    }
    ```

1. **What is the use of `componentDidMount()` lifecycle hook**  
componentDidMount method runs after the component is rendered in the browser and then if we want to make any heavy processings we can do inside this method. For example: making an api call.

1. **What is the use of `componentDidUpdate()` lifecycle hook** 
This is a lifecycle hook called after each re-render of the component. It does not called for the first render.

1. **What is the use of `componentWillUnmount()` lifecycle hook** 
This is a lifecycle hook called Just before unmounting of the component. First parent component will unmount and then child component
Example:
Parent component:

    ```javascript
    import React from "react";
    import User from "./User";
    import UserClass from "./UserClass";
    import ChildClassA from "./ChildClassA";
    import ChildClassB from "./ChildClassB";
    class About extends React.Component {
        constructor(props) {
            super(props);
            console.log("Parent constructor");
        }

        componentDidMount() {
            console.log("Parent component Did Mount");
        }

        componentDidUpdate() {
            console.log("Parent component Did Update");
        }

        componentWillUnmount() {
            console.log("Parent component Will Unmount");
        }

        render() {
            console.log("Parent render start");
            return (
                <>
                    <h1>About</h1>
                    <div className="about-card">
                            <UserClass
                                name="Dipankar (Class Based)"
                                location="Bangalore(Class)"
                            />
                            <UserClass
                                name="Lizu (Class Based)"
                                location="Bhubaneswar(Class)"
                            />
                    </div>
                    {console.log("inside parend render")}
                    <ChildClassA />
                    <ChildClassB />
                </>
            );
        }
    }

    export default About;
    ```
    
    Child Component:

    ```javascript
    import React from "react";

    export default class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                result: "Pass",
            };
            console.log(this.props.name + " Child constructor");
        }

        async componentDidMount() {
            console.log(this.props.name + " Child component Did Mount");
            const jsonData = await fetch(
                "https://api.github.com/users/dipankarsahoo180"
            ).then((data) => data.json());
            console.warn(jsonData);
            this.setState({
                name: jsonData.name,
                location: jsonData.location,
                avatar_url: jsonData.avatar_url,
            });
            // Create an interval that increments the count state every 1000 milliseconds (1 second)
            this.interval = setInterval(() => {
                console.log('set interval called')
                this.setState((prevState) => ({
                    count: prevState.count + 1,
                }));
            }, 5000);
        }

        componentDidUpdate() {
            console.log(this.props.name + " Child component Did Update");
        }

        componentWillUnmount() {
            clearInterval(this.interval);
            console.log(this.props.name + " Child component Will Unmount");
        }

        render() {
            const updateCount = () => {
                this.setState({
                    count: ++this.state.count,
                    result: "Failed",
                });
            };
            const { name, location, avatar_url, count, result } = this.state;
            console.log(this.props.name + " Child render Start");
            return (
                <div className="user-card">
                    <img
                        src={avatar_url}
                        alt="Image no available"
                        height="200px"
                        width="200px"
                    ></img>
                    <p>Name: {name}</p>
                    <p>Location: {location}</p>
                    <p>count: {count}</p>
                    <p>result: {result}</p>
                    <button className="global-btn" onClick={() => updateCount()}>
                        Update State Variable
                    </button>
                    {console.log(this.props.name + " Inside child render")}
                </div>
            );
        }
    }
    ```

1. **Explain how you can clear interval inside function based react component (inside useEffects).**
We can make use of the callback method returned by `useEffects()`
Example:

    ```javascript
    import React from "react";
    import { useEffect } from "react";

    const ContactUs = () => {
        useEffect(() => {
            const interval = setInterval(() => {
                console.log("set interval called");
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        });

        return <h1>ContactUs</h1>;
    };

    export default ContactUs;
    ```

</details>

## 09 Optimising our App
<details>
<summary>Summary</summary>


1. **Give an example of how you can create your own custom hook**  
According to the best practice we can just create a separate file with use as refix to its name and build our logic inside it.
    Example 1:

    ```javascript

    import { useEffect, useState } from "react";
    import { SWIGGY_REST_MENU } from "./Constants";

    const useRestrauntMenu =(resId) => {

        const[resInfo,setResInfo] = useState(null);

        useEffect(()=>{
            fetchData();
        },[])
        
        const fetchData = async ()=>{
            const response = await fetch(SWIGGY_REST_MENU + resId);
            const json = await response.json();
            console.log('custom Hook Json Data',json);
            setResInfo(json.data);
        }
        console.warn('custom Hook Reponse',resInfo)
        return resInfo;
    }

    export default useRestrauntMenu;
    ```
    Example 2:

    ```javascript
    import { useEffect, useState } from "react";

    const useOnlineStatus = () => {
        const [onlineStatus, setOnlineStatus] = useState(true);

        useEffect(() => {
            window.addEventListener("online", () => {
                setOnlineStatus(true);
            });
            window.addEventListener("offline", () => {
                setOnlineStatus(false);
            });
        }, []);

        return onlineStatus;
    };

    export default useOnlineStatus;

    ```

    And we can use it inside the component using following.

    ```javascript
    import { useParams } from "react-router-dom"
    import Shimmer from "./Shimmer";
    import RestaurantCard from "./RestaurantCard";
    import useRestrauntMenu from "../utils/useRestrauntMenu";
    import useOnlineStatus from "../utils/useOnlineStatus";

    export default function RestaurantMenu() {
        const { resId } = useParams();
        const restaurantDetails = useRestrauntMenu(resId); //Custom hook
        // Notice we are not storing the result into another variable by
        // using useState or useEffect hook because it is not required and
        // it will throw error if we do so.
        console.warn('resInfo',restaurantDetails);
        const isOnline = useOnlineStatus(); //Custom hook
        const itemList = 
        restaurantDetails?.cards? restaurantDetails?.cards[3]?.groupedCard? 
            restaurantDetails?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
                restaurantDetails.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
                restaurantDetails.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
            :
            restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
                restaurantDetails.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
                restaurantDetails.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
        :null;
        console.log('card',itemList);

        if (!restaurantDetails || !itemList || !isOnline) return <Shimmer />;

        return (
            <>
                <div className="body">
                    <h1>{restaurantDetails.cards[0]?.card?.card?.info?.name}</h1>
                    <h2>Rating: {restaurantDetails.cards[0]?.card?.card?.info?.avgRatingString}</h2>
                    <h3>Total items: {itemList?.length}</h3>
                    <div className="res-container">
                        {
                            itemList.map((el, idx) => {
                                const resData = {
                                    info: {
                                        name: el.card.info.name,
                                        cloudinaryImageId: el.card.info.imageId,
                                        cuisines: [el.card.info.itemAttribute.vegClassifier, el.card.info.description],
                                        avgRating: el.card.info.ratings.aggregatedRating.rating,
                                        price: el.card.info.price,
                                        showLogInOutBtn:true
                                    }
                                }

                                return (
                                    <div key={el.card.info.id + '_' + idx + 0}>
                                        <RestaurantCard key={el.card.info.id + '_' + idx + 1} resData={resData} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
    ```

2. **What is Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/Dynamic importing?**  
It is a way to break down the app into smaller logical chunks. We can acheive it using `lazy` and `Suspense`. 
Example: Here we are trying to lazy load `Grocery` and `About`.

    ```javascript
    import React, { lazy, Suspense } from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header";
    import { Body } from "./components/Body";
    import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
    import About from "./components/About";
    import ContactUs from "./components/ContactUs";
    import Cart from "./components/Cart";
    import Error from './components/ErrorPage'
    import RestaurantMenu from "./components/RestaurantCardMenu";
    // import Grocery from "./components/Grocery";

    const Grocery = lazy(()=>import("./components/Grocery"));

    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
        )
    }


    const appRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <AppLayout />,
                errorElement: <Error />,
                children: [
                    {
                        path: "",
                        element: <Body />
                    },
                    {
                        path: "about",
                        element: (
                            <Suspense fallback={<Shimmer />}>
                                <About />
                            </Suspense>
                        ),
                    },
                    {
                        path: "contact-us",
                        element: <ContactUs />
                    },
                    {
                        path: "cart",
                        element: <Cart />
                    },
                    {
                        path: "grocery",
                        element: <Suspense fallback={<h1>Nothing here yet</h1>}><Grocery /></Suspense>
                        //element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
                    },
                    {
                        path: "restaurant/:resId",
                        element: <RestaurantMenu />
                    }
                ]
            }

        ]
    );

    //ReactDOM is for dom interaction, Make #root as the root element of react
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //render the element inside root
    root.render(<RouterProvider router={appRouter} />);
    ```

</details>

## 10 Jo Dikhta hai, vo Bikta Hai

<details>
<summary>Summary</summary>

1. **Give an example of tailwind css class.**  
    ```javascript
    <div className="flex flex-wrap justify-around"> //tailwind classes
        {filteredRestaurants?.map((el) => (
            <Link
                className=""
                to={"restaurant/" + el.info.id}
                key={el.info.id}
            >
                <RestaurantCard resData={el} />
            </Link>
        ))}
    </div>
    ```
1. **Give an example of tailwind css class where you want to use your custom value**  
Here we have hardcoded the width to 250px
    ```javascript
    <img
        className="w-[250px] h-56 rounded-lg"
        src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`}
        alt="Image no available"
    ></img>
    ```
1. **Give an example of tailwind css class where you want to apply some pseudo classes**   
Example:
    ```javascript
    <div className="w-[250px] m-4 h-[420px] rounded-lg bg-slate-300 hover:bg-green-400">
        <p>Content goes here </p>
    </div>
    ```
</details>
