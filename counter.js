const createCounter = function(n) {
    return function() {
        return n++;
    }
 }

 const counter = createCounter(1);
 console.log(counter());
 console.log(counter());