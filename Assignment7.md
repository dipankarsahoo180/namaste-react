# Episode 07 - Finding the Path

## Theory

1. **What are various ways to add images into our App? Explain with code examples**
   **Answer:** There are several ways to add images to a web app:
   - Using the `img` HTML element: You can use the `<img>` tag to display images by specifying the `src` attribute.
      ```javascript
      import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";

      const styleCard = {
         background: 'lightgrey',
         textAlign:'center'
      }

      const RestaurantCard = (props) => {
         const {name,cloudinaryImageId,cuisines,avgRating,price} = props.resData.info;
         return(
            <div className="res-card" style={styleCard}>
                  <img src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`} alt="Image no available"></img>
                  <h3>{name || ''}</h3>
                  <p>{cuisines.join(', ').length <=30? cuisines.join(', '):cuisines.join(', ').slice(0,30)+"..."}</p>
                  <p>Rating: {avgRating || ''}</p>
                  {price?<p>Price: {price/100}</p>:""}
            </div>
         )
      }

      export default RestaurantCard;
      ```

   - Importing images in JavaScript: Modern build tools allow you to import images directly into your JavaScript code, making them part of your build process.

2. **What would happen if we do `console.log(useState())`?**
   **Answer:** If you use `console.log(useState())`, you will see the initial state value and the updater function returned by the `useState` Hook in the console.  
   
   `Error: Rendered more hooks than during the previous render.`

3. **How will useEffect behave if we don't add a dependency array?**
   **Answer:** If you don't provide a dependency array in the `useEffect` Hook (i.e., leave it empty), the effect will run after every render of the component.

4. **What is SPA?**
   **Answer:** SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.

5. **What is the difference between Client Side Routing and Server Side Routing?**
   **Answer:** 
   - Client Side Routing: In client-side routing, navigation between different pages or views is handled by JavaScript running in the user's browser. It provides a smoother and more responsive user experience as it doesn't require full page reloads.
   - Server Side Routing: In server-side routing, navigation involves requesting new pages from the server, which responds with entirely new HTML pages. This can be slower and less interactive compared to client-side routing.

## Resources

- React Router DOM: [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- Client Side Routing: [https://reactrouter.com/en/main/start/overview](https://reactrouter.com/en/main/start/overview)
- Formik: [https://formik.org/](https://formik.org/)
