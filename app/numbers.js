if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {

    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {

        a *= 10000;
        b *= 10000;

        return (a * b) / 100000000;

    }
  };
});

