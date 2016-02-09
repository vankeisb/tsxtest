# Typescript + React boilerplate

This project is a boilerplate for `.tsx` + React. You'll need `npm` (tested with 3.3.12).
 
## Build

    npm install
    npm run build
    
`tsc` is used in order to transpile `.tsx` files to `.js` and `.map`. 

`browserify` is then used in order to create the final bundle.

## Develop

No watch is available yet for transpiling `tsx`. We rely on IDEA to do this. 
  
A watch is provided for creating the bundle :

    npm run watch
    
Again, this doesn't compile tsx files : it only creates the bundle from .js files so you need your IDE to do this job. 