# Alchemy Bootstrap Template

## Making a plan

# Plan
* home page (root directory)
    * index.html
    * app.js
* results page (/results directory)
    * index.html
    * results.js
* storage-utils.js -- hold our localstorage functions
* item.js -- holds the data

## HTML Elements
* make home page with
    * two images as radio buttons
    * button with an id
* make empty results page

## Local Storage Functions
```javascript
const results = [
    { id: id, shown: number, picked: number },
]
* get Results -- return the results array or empty array
* showItem -- increment the shown key for an item
* pickItem -- increment the picked key for an item
```

## app.js logic
* make function called generateItem()
    * generate 2 random items
    * call showItem for each
    * render the item on the page

### ON PAGE LOAD
* set totalPlays to 0
* call generateItem
### ON BUTTON CLICK
* increment totalPlays
* call pickItem with chosen item
* if totalPlays >= 10
    * redirect to results
* else
    * call generateItem


(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass