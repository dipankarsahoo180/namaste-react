# namaste-react

## 01 Inception

### Concepts Learned

1. Use React cdn</li>
1. How to write js inside html itself</li>
1. How to write js inside a new file and inject it in html</li>
1. How to Create a element using React</li>
1. How to render a component using RactDOM</li>
1. How does React.createElement and ReactDOM.createRoot works</li>
1. How to use CSS in react</li>
1. What is Element,Props,Child in React</li>
1. How to Create nested Child using React</li>
1. How to Add Sibling Components</li>

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
