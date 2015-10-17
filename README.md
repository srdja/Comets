#### Comets! An Asteroids clone in clojurescript.

This project is an attempt to write a simple game in a functinal language and to explore some general concepts of 
functinal game programming.

You can try it out: [Comets](https://srdja.github.io/Comets)


#### Running the project
- To run run this project you'll need to have [Leiningen](http://leiningen.org) installed first.  

- Now that you have Leiningen installed `cd` into the project directory and run `lein deps`.  
  This will pull all the necessary dependencies.
  
- After that, while still in the project root, run: `lein cljsbuild auto dev`. This will automatically
  recompile you clojure code to javascript whenever you make any changes to the source files.
  
- Once you've done done all that, you can open the index file (`resources/public/index.html`) in you 
  browser to see the changes.

#### Todo

- Figure out a pure and non-ugly way of handling collisions
