'use strict';

const ElementFinder = require('./mock/ElementFinder');
const ElementArrayFinder = require('./mock/ElementArrayFinder');
const Browser = require('./mock/Browser');
const Layout = require('../Layout');
const Element = require('../Element');
const HomePage = require('../HomePage');
//const Element = require('../Elements'); //? Should all the mocks be added, even if there are links in other specs, mentioned above? 
const expect = require('chai').expect;
//seleniumAddress: 'http://localhost:4444/wd/hub'

describe('HomePage Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });
        
    
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });
    
    it('should have stored locator', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.locator).not.to.be.undefined;
        expect(page.locator.css).to.equal('body');
    });

    it('should have stored name', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('Home');
    });

    it('should have stored URL', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });

    it('should have method to load the page by URL', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.load).not.to.be.undefined;
        expect(page.load()).to.equal('http://epam.com');
    });
    
    it('should load the page with correct title', function() {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        browser.get(page.url);
        expect(browser.getTitle()).toEqual('EPAM | Software Product Development Services');
    });
});