var movies = require("./objectFactoryModule");

userObject2=movies();
userObject2.favMovie = 'abc';
console.log('userobject1 fav movie: '+userObject2.favMovie);