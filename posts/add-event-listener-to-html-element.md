---
title: Add event listener to HTML element
author: Sandeep Sihari
category: javascript
permalink: /add-event-listener-to-html-element/
tags: javascript programming
date: "2017-11-08"
---

## Method 1

HTML code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Javascript Demo</title>
  </head>
  <body>
    <button onclick="clickMe();">Click Me!</button>
  </body>
</html>
```

Javascript Code

```javascript
// function definition
function clickMe() {
  alert("Button is clicked!!");
}
```

## Method 2

HTML code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Javascript Demo</title>
  </head>
  <body>
    <button onclick="clickMe();">Click Me!</button>
  </body>
</html>
```

Javascript Code

```javascript
// get reference to HTML element i.e Button
let btn = document.querySelector("#myButton");

// add event listener to selected HTML element
btn.addEventListener("click", function (evt) {
  alert("Button clicked!!");
});
```
