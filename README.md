### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- React-Router-DOM
  - Install and use
- useEffect()

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- Reusable Components
- Props
- useState & useRef
- localstorage

## Files / Folders Provided in this Lesson
This project is meant to build upon **Part 1** lecture. Building out a new project will require the previous code in order to function correctly. Creating a new application will also require the install of `reactstrap` and `bootstrap`. 
- `npm install reactstrap react react-dom`
- `npm install --save bootstrap`
  - review [index.js](./src/index.js) and `import 'bootstrap/dist/css/bootstrap.min.css';`

**Running:**
- You will need to start up **MongoDB** and your **Movie Server**. Navigate to your server project within the terminal and run `nodemon` or `npm start` and have your server going while building the Movie application.

- movies
  - assets
    - `token_route_path.png`
  - src
    - components
      - auth
        - Auth.jsx
        - signup
          - Signup.jsx
        - login
          - Login.jsx
    - `App.jsx`
    - [App.css](./src/App.css) (provided code)

## Resources
- [Reactstrap Docs](https://reactstrap.github.io/?path=/docs/components-forms--input#hidden-labels)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [w3Schools useRef](https://www.w3schools.com/react/react_useref.asp)
- [Hook API Reference React](https://reactjs.org/docs/hooks-reference.html#useref)
- [NPM Cors Package](https://www.npmjs.com/package/cors)
- [setItem()](https://www.w3schools.com/jsref/met_storage_setitem.asp)
- [React Router Docs](https://reactrouter.com/en/main)
- [Browser-Router](https://reactrouter.com/en/main/router-components/browser-router)
- [Route](https://reactrouter.com/en/main/route/route)
- [Navigate](https://reactrouter.com/en/main/components/navigate)
- [w3Schools useEffect](https://www.w3schools.com/react/react_useeffect.asp)
- [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Explanation of useEffect](https://dmitripavlutin.com/react-useeffect-explanation/)

### useEffect() Notes
- Allows us to perform side effects in functional components.
- Accepts two arguments
  - function
  - dependency
    - optional
    - Can denote a specific event to to trigger

```js
useEffect(() => {
  // Runs on every render
});

useEffect(() => {
  // Runs only on the first render
}, []);

useEffect(() => {
  // Runs on first render
  // Runs any time any dependency changes
}, [state]);
```

# Challenge
```js
/*
    - Set the Signup component to store our session token
    - After the user signs up, have the route navigate to the /movie endpoint to display our placeholder page.
*/
```