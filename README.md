# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/Suleman-Tasawar/bookmark-landing-page-master)
- Live Site URL: [Live URL](https://suleman-tasawar.github.io/bookmark-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

```js
for (let i = 0; i < 5; i++) {
  faqToggleBtn[i].addEventListener("click", () => {
    if (faqToggle[i].style.display == "block") {
      faqToggle[i].style.display = "none";
      faqToggleBtn[i].innerHTML = arrowUpSvg;
    } else {
      faqToggle[i].style.display = "block";
      faqToggleBtn[i].innerHTML = arrowDownSvg;
    }
  });
}
```

## Author

- Frontend Mentor - [@Suleman Tasawar](https://www.frontendmentor.io/profile/SulemanTasawar)
