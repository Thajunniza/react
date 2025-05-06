Complete React Series

React is a free and open source Javascript library specifically designed for building user interfaces (UIs)

React is used to build React mobile,Desktop


## Basic React project created by below comments
npm create vite@latest
then selected react and javascript


##Clean up the project structure
1. Delete the public folder
2. Delete assests folder
3. Delete App.css
4. Delete index.css
5. Clear main.jsx and App.jsx files


####Create a Component

In App.js create a simple component like Hello!
It is function which returns the html tag

const App = () =>{
  return <section>Hello!</section>;
};

### Run the app by
npm run dev

###
 you may end up with error because we need export the component
 export default App;