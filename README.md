# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Alt text](Screenshot%202023-04-21%20114612.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript

### What I learned

- Fetch APi
- Import modules
- JSON data
- CSS nth-child

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
li:nth-child(2) {
  background: hsla(39, 100%, 56%, 0.3);
  color: hsl(39, 100%, 56%);
  margin: 20px 50px 20px 0px;
  border-radius: 5px;
  padding: 15px 15px 15px 15px;
}
```
```js
 function createMenuStructure(menuStructure) {
    let html = '<ul>';
    for (let i = 0; i < menuStructure.length; i++) {
      let item = menuStructure[i];
      html += '<li>' + '<object data="' + item.icon + '" width="15" height="15"> </object>' + " " + item.category + "   " + item.score + " " + '/100';
      
      html += '</li>';
    }
    html += '</ul>';
    return html;
  }
```
### Continued development

-Mobile responsiveness needs more work. 
-Some of the finer details displaying the data needs resolving. 
-Continue button size could be changed. 

### Useful resources

- [Example resource 1](https://meyerweb.com/eric/tools/css/reset/) - This helped me for CSS tool reset. I really liked this pattern and will use it going forward.
- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) - This is an amazing article which helped me understand box-sizing more. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Stephen Pino](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/RoadHog31)


