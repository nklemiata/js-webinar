'use strict';

class Elements {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = null;
    }

    setParent(parent) {
        this.parent = parent;
    }

   all(name) {
        if (!name) {
            return element.all(this.locator);
        }
        throw new Error('There is no parent like: ' + name);
    }

    get(x) {
        return x   //Did we have to use smth like "return Object.values(this.Elements);" ? 
    }
}

    module.exports = Elements;