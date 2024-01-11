### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- Completing Login Component
- Storing **token** to `localstorage`.

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- Reusable Components
- Props

## Files / Folders Provided in this Lesson
This project is meant to build upon **Part 1** lecture. Building out a new project will require the previous code in order to function correctly. Creating a new application will also require the install of `reactstrap` and `bootstrap`. 
- `npm install reactstrap react react-dom`
- `npm install --save bootstrap`
  - review [index.js](./src/index.js) and `import 'bootstrap/dist/css/bootstrap.min.css';`

- movies
  - assets
    - `passing token to app.png`
  - src
    - components
      - auth
        - [Auth.jsx](./src/components/auth/Auth.jsx)
        - signup
          - Signup.jsx
        - login
          - [Login.jsx](./src/components/auth/login/Login.jsx)
    - `App.jsx`
      - *boilerplate code removed*
    - [App.css](./src/App.css) (provided code)

- `notes.md`: details the various notes taught throughout this lesson.
- **assets folder**: additional notes
  - screenshot of where to update server
  - component tree example

## Resources
- [Reactstrap Docs](https://reactstrap.github.io/?path=/docs/components-forms--input#hidden-labels)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [w3Schools useRef](https://www.w3schools.com/react/react_useref.asp)
- [Hook API Reference React](https://reactjs.org/docs/hooks-reference.html#useref)
- [NPM Cors Package](https://www.npmjs.com/package/cors)

# Challenge
**Update Token in Signup**
- Using the same concepts that was used to set the Login component, provide access to the Signup component so that it can update the token when a user creates a new account.

The Solution can be found in [Signup.jsx](./src/components/auth/signup/Signup.jsx)