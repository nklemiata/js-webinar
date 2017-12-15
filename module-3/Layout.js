'use strict';

class Layout {
    constructor(name, url, locator) {
        this.name = name;
        this.url = url;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent){
        this.parent = parent;
        if (setParent != null){
            throw new Error('The parent should not be set: ' + parent.name);
        };
    }

    addChildren(child){     //have to connect to Element somehow
        if (this.children[child.name]) {
            throw new Error('The child has been already added: ' + child.name);
        }
        this.children[child.name] = child;
        //child.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }
        if (this.children[name]) {
            return this.children[name].get();
        }
        throw new Error('There is no child like: ' + name);
    }

    load(url){
        browser.get(url);
    }
    






}


module.exports = Layout;