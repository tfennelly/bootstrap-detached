/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("index.js", function () {

    it("- test", function (done) {
        testUtil.onPage(function(window) {
            var bootstrap = require("../index");
            
            bootstrap.clear();
            
            var $1 = bootstrap.getBootstrap();            
            
            expect($1.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            expect($1('#divOnPage').text()).toBe('Bootstrap is everywhere');
            expect($1.fn.modal).toBeDefined();
            expect($1.fn.dropdown).toBeDefined();            
   
            bootstrap.clear();
            var $2 = bootstrap.getBootstrap();            
            expect($1).not.toBe($2);

            done();
        });
    });
});
