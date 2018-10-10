# Intro
This repo aim to provide quick ready-ground for designers to start off design of their webpages without even touching/thinking about the project structure or configuration.

With CSS modules being more and more in use, they are making CSS preprocessor less important, that is why for this we chose to stick with naked CSS.

# How to use
- Making new page: just create new JS file under `pages/`folder, the name of the page will be automatically considered as a route for your app, for example if you have `pages/mycp.js` this will be an available route for your website localhost:3000/mycp that renders the content of that component as a page

- Styling a page: please checkout the `pages/index.js` in the <style> section there is an example how to use CSS module.
- Making a reusable React Component:  please use the `component/` folder and expose your component from there.
