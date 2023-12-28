# JSON Tree Viewer

Quick and easy tool to view your JSON text in a DOM tree. 

## Features

- Validate your JSON by entering or pasting JSON text. 
- Prettify your JSON.
- Transform/Preview your JSON text into collapsible/expandable DOM tree.
- Right panel to list selected/clicked object's property and values.

## Live Website

See the hosted website in action [here](https://jsontreeview.org).

## Build Steps

The code of JSON Tree Viewer is located in folder `./src`:

- Install Dependencies
  ```
  npm install
  ```

- Run app in development mode with live reload on source code change
  ```
  npm start
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- Build JSON Tree Viewer
  ```
  npm build
  ```
  This will generate the compiled `js` and `css` files.  

## Test

Run unit tests:
```
npm test
```
