// Sets
var mySet = new Set();
mySet.add("test");

mySet.add(function() { });

// Iteration
for(var value of mySet) {
    console.log(value);
}