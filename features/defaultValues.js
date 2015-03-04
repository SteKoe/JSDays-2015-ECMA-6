// Bisher
function func(value) {
    value = value || "default";
}

// ECMA 6
// Default value kann beliebige Werte annehmen => {}, [], func(), ...
function func(value = 'default') {

}