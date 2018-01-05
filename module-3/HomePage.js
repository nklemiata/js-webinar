'use strict';

//This file describes the elements on the "Home" page.

class HomePage {
    constructor() {
        this.logo = element(by.css('a.logo'));
        this.title = element(by.tagName('title'));
        this.buttonWhatsNew = element(by.cssContainingText('href="#whats-new"')).element(by.getText('What\'s new'));  // ? <a class="button-ui button-link large-button wide color-dark-green " href="#whats-new"> <span class="desktop">What's new</span> 
        this.buttonlearnMore = element(by.cssContainingText('href="/solutions"')).element(by.getText('Learn more'));  
        this.slider = element(by.css('.slider'));
        this.buttonWhatWeDo = element(by.css('.tabs-item.active')).element(by.getText('What we do'));

    //to be completed



    }

    load() {
        browser.get('https://epam.com/');
        //return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT); // ? Can GLOBAL_TIMEOUT be defined in this file?
    };

    getTitle() {
        return this.title.getText();
    };


};

module.exports = HomePage;


