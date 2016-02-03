/* jshint unused:false, undef:false */

// Names
var SOME_CONSTANT = 1,
    foo = new Foo();

// Multiple var declaration
function testVars() {
    var keys = ['foo', 'bar'],
        values = [23, 42];

    keys = values;

    // separated var
    var object = {};
    while(keys.length) {
        var key = keys.pop(); // and one more
        object[key] = values.pop();
    }
}

// Disallow spaces before and after curly braces.
var obj = {
        a : 1,
        b : 2,
        c : 3
    },
    nestedObj = {
        a : {
            b : 1
        }
    },

    // Require space after object keys.
    obj = {
        prop : 0
    },

    // Disallow alignment in object literals.
    obj = {
        a : 0,
        b : 1,
        lengthyName : 2
    },

    // Disallow quoted keys in object if possible.
    obj = {
        key : 0,
        'key-key' : 1
    },

    // Disallow spaces before and after square brackets.
    fellowship = ['foo', 'bar', 'baz'],
    nestedArr = [1, [2, 3]],

    // String should have single quotes.
    lyrics = 'Never gonna give you up, Never gonna let you down',
    testing = 'It shouldn\'t fail';

// Use spaces after all keywords
if(test) {
    doSomething();
}

function foo() {
    doSomething();
}

var bar = function() {
    doSomething();
};

// No space after return
function test() {
    return;
}

// if-else
if(condition) {
    actionIfTrue();
} else {
    actionIfFalse();
}

// Long conditions
if(longCondition || anotherLongCondition && yetAnotherLongCondition) {
    doSomething();
}

// No yoda conditions.
if(getType() === 'driving') {
    doSomething();
}

// Switch
switch(value) {
    case 1:
        // ...
        break;

    case 2:
        // ...
        break;

    default:
        // ...
        // no break keyword on the last case
}

// Ternary operators.
var x = a? b : c,

    y = (a || b)? longButSimpleOperandB : longButSimpleOperandC,

    z = (a && c)? moreComplicatedB : moreComplicatedC,

// No space with unary operators.
    foo = !bar;

// Use explicit type conversions.
Boolean(foo);
Number(bar);
String(baz);
[].indexOf(qux) === -1;
[].indexOf(qux) < 0;

// Require parentheses around IIFE
(function() {

// Allow no indent inside IIFE in global scope
var q = 1;

}());

// Long lines
var debt = this.calculateBaseDebt() + this.calculateSharedDebt() + this.calculateDebtPayments() + this.calculateDebtFine();

// this and closures
doAsync(function() {
    this.fn();
}.bind(this));

var _this = this;
doAsync(function() {
    _this.fn();
});

[1, 2, 3].forEach(function(n) {
    this.fn(n);
}, this);

// Comments with url can have maximum line length > 120 ................... https://github.com/yandex/codestyle/blob/master/js.md

// `i-bem` should be named BEM
// `i-bem__dom` should be named BEMDOM
modules.define('something-truly', ['i-bem__dom', 'something-else'], function(provide, BEMDOM, SomethingElse) {

// Should use `this.name` if possible for BEMDOM.decl
// Should have @lends jsdoc tag
// Should use provide right in place with declaration if possible
provide(BEMDOM.decl(this.name, /** @lends something-truly.prototype */ {
    // Modifier names and values should have single quotes
    beforeSetMod : {
        'hovered' : {
            'true' : function() {
            }
        }
    },

    // Should be line-break between mods declarations
    onSetMod : {
        // for `any` value should be used a single function
        'checked' : function(modName, modValue) {
        },

        // for the rest of value the star (`'*'`) can be used
        'some' : {
            'thing' : function() {},
            '*' : function() {}
        },

        'disabled' : {
            'true' : function() {
            },
            '' : function() {
            }
        }
    }
}, /** @lends something-truly */ {
    live : true
}));

});

/**
 * Test jsdoc validation.
 *
 * @param {String} message
 * @param {Number|Object} line
 * @param {Number} [column]
 */
var add = function(message, line, column) {};

// requireSpaceBetweenArguments
console.log(1, 2);
