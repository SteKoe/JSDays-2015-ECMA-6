// ECMA 5.1!

// Property wie in C#: Zuweisung ruft "set name()" auf, sonst "get name()"
var klaus = {
    _name: "Klaus",
    get name () {
        return this._name;
    },
    set name (value) {
        this._name = value;
    }
}
klaus.name = 'asdas';

// Alternative Schreibweise
Object.defineProperty(klaus, 'name', {
    get: function() {
        return this._name;
    },
    set: function(value) {
        this._name = value;
    }
})

//Scopes: variable _name ist von außen nicht zugreifbar
(function() {
    var _name = "Klaus";
    return {
        get name() {
            return this._name;
        },
        set name(value) {
            this._name = value;
        }
    }
})();