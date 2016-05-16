var movies = require("./objectFactoryModule");

userObject1=movies();
userObject1.favMovie = 'xyz';
console.log('userobject1 fav movie: '+userObject1.favMovie);