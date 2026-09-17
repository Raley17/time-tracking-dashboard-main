# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./images/Frontend%20Mentor%20-%20Time%20tracking%20dashboard.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Raley17/time-tracking-dashboard-main)
- Live Site URL: [Add live site URL here](https://time-tracking-dashboard-main-tau-seven.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

```html
<div class="box" data-title="Work"></div>
<!-- I learned to use data-title -->
```

```js
let jsonData = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    updateCards(activeTimeframe);
  });
// I learned how to fetch properly and make use of the async of it, creating a var to execute a func while fetch provides the data.
```

### AI Collaboration

I used Claude for fetching, as it was very unclear at the beggining.

## Author

- Frontend Mentor - [@Raley17](https://www.frontendmentor.io/profile/Raley17)
