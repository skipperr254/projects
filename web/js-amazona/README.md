# JS AMAZONA

1. Create the folder strucure

   1. create the root folder as js-amazona
   2. add frontend and backend folder
   3. create src folder in the frontend folder
   4. create index.html in the src folder with a heading of JS Amazona
   5. run npm init in the frontend folder
   6. npm install live-server as a dev dependency
   7. add start command as live-server src --verbose
   8. run npm start

2. Design the website (create the skeleton)

   1. create styles.css
   2. link styles.css to the index.html
   3. create the main container div
   4. create the header, main and the footer
   5. style the html and the body
   6. style the main container, header, main and the footer

3. Build the static home page

   1. an un-ordered list for the products
   2. li and div for each product
   3. create and add the product image, name, price and brand
   4. style the prducts and the product
   5. add more products (ctrl-c ctrl-v)

4. Dynamic home page
   1. create a data.js file
   2. export an array of 6 products
   3. create js file to handle dynamic products rendering
   4. create screens/HomeScreen.js
   5. export HomeScreen as an object with a render method
   6. implement render() and return products mapped to appropriate html
   7. create app.js
   8. link to index.html as module
   9. set main id to main container
   10. create router() function
   11. set main container innerHTML to HomeScreen.render()
   12. set load event of window to router()

## URL Routing

1. create routes as route: screen object
2. create utils.js

## Create a Node.JS server

1. run npm init in the root folder
2. npm install express
3. create server.js
4. add start command as node backend/server.js
5. require express
6. move data.js from frontend to backend
7. create router for api/products
8. return products in data.js
9. run npm start

## Load products from backend

1. edit HomeScreen.js for products loading
2. make render async
3. fetch products from 'api/products' in render
4. make router() async and call await HomeScreen.render()
5. use cors on backend

## Add webpack

1. cd frontend
2. npm install -D webpack webpack-cli webpack-dev-server
3. npm uninstall live-server
4. "start": "webpack-dev-server --mode development --watch-content-base --open"
5. move index.html, styles.css and images to frontend folder
6. rename app.js to index.js
7. update index.html
8. add <script src="index.html"></script> before <body>
9. npm start
   [special] if not serving, move files to the public folder for it to work
10. npm install axios
11. change fetch to axios in HomeScreen

## Babel for ES6 in backend

1. npm install -D @babel/core @babel/cli @babel/node @babel/preset-env
2. create .babelrc and set presets to @babel/preset-env
3. npm install -D nodemon
4. set start: nodemon --watch backend --exec babel-node backend/server.js
5. convert require to import in server.js
6. npm start

## Enable code linting(eslint)

1. npm install -D eslint
2. install VSCode eslint extension
3. create .eslintrc and set module.exports for env to node
4. set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
5. check result for linting error
6. npm install eslint-config-airbnb-base and eslint-plugin-import
7. set extends to airbnb base
8. set parserOptions to ecmaVersion 11 and sourceType to module
9. set rules for no-console to 0 ignore linting error

## VSCode extensions

1. JavaScript es6 extensions
2. ES7 React/Redux/GraphQL/React-Native snippets
3. Prettier - code formatter
4. HTML & LESS grammar injections
5. CSS Peek

## Create a rating component

1. create components/Rating.js
2. create div.rating
3. link to fontawesome.css in index.html
4. define Rating object with render
5. if !props.value return empty div
6. else us fa fa-star, fa-star-half-o fa-star-o
7. last span for props.text || ''
8. style div.rating, last span and span
9. edit HomeSreen
10. add div.product-rating and use Rating component
