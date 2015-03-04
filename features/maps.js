// Maps
// Gegensatz zu Objekten: Keys beliebige Expression erlaubt!

var key = [1,2,3];

var map = new Map();
map.put(key, 'array');

// Achtung!
map.get(key) !== map.get([1,2,3]);

// for .. of ...
for(var [key, val] of map) {
    console.log(key, val);
}