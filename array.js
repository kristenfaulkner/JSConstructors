'use strict';

Array.prototype.dups = function () {
    var dupped = [];
    for(var i = 0; i < this.length; i++) {
        if (dupped.indexOf(this[i]) === -1) {
            dupped.push(this[i]);
        }
    }
    return dupped;
};

Array.prototype.twoSum = function () {
    var newArray = [];
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = i + 1; j < this.length; j++) {
            if ((this[i] + this[j]) === 0) {
                newArray.push([i, j]);
            }
        }
    }
    return newArray;
};

Array.prototype.transpose = function () {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++ ) {
            var tmp = this[i][j];
            newArray[j] = newArray[j] || [];
            newArray[j][i] = tmp;
        }
    }
  
    return newArray;
};

console.log([[1, 2, 3], [2, 3, 4]].transpose());

Array.prototype.multiples = function(num) {
    for (var i = 0; i < this.length; i++){
        this[i] = this[i] * num;
    }
    return this;
};

Array.prototype.myEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
    return this;
};

Array.prototype.myMap = function(func) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr.push(func(this[i]));
    }
  
    return newArr;
};

Array.prototype.myInject = function(func) {
    var sum = 0;
    this.myEach(function (val) {
        sum = func(sum, val);
    });
  
    return sum;
};

Array.prototype.bubbleSort = function() {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < this.length-1; i++) {
            for (var j = i+1; j < this.length; j++) {
                if (this[i] > this[j]) {
                    tmp = this[i];
                    this[i] = this[j]
                    this[j] = tmp
                    sorted = false
                }
            }
        }
    }
    return this;
};


String.prototype.substrings = function() {
    var strings = [];
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j < this.length; j++) {
            var word = this.slice(i,j+1);
            if ((j >= i) && strings.indexOf(word) == -1 && word.length > 1) {
                strings.push(word);
            }
        }
    }
    return strings;
};

var string = "appacademy";

// console.log(string.substrings());
