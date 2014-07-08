"use strict";

var range = function (start, end) {
    if (start === end) {
        return [start];
    } else {
        return [start].concat(range(start + 1, end));
    }
};

var sumIterative = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
  
    return sum;
};

var sumRecursive = function (array) {
    if (array.length == 1) {
        return array[0];
    } else {
        return array[0] + sumRecursive(array.slice(1));
    }
};

var exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base*(exponent(base, exp -1));
    }
};

var exponent2 = function(base, exp) {
    if (exp === 1) {
        return base;
    } else if (exp % 2 === 0) {
        return (exponent2(base, Math.floor(exp/2))) * (exponent2(base, Math.floor(exp/2)));
    } else {
        return base * (exponent2(base, Math.floor(exp/2))) * (exponent2(base, Math.floor(exp/2)));
    }
};

var fibonacci = function (num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        var result = fibonacci(num - 1);
        return result.concat(([result.slice(-1)[0] + result.slice(-2, -1)[0]]));
    }
};

var fibonacci2 = function (num) {
    var array;
    if (num === 0) {
        array = [0];
    } else if (num === 1) {
        array = [0, 1];
    } else {
        array = [0, 1];
  
        for (var i = 2; i <= num; i++) {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
  
    return array;
};

var bsearch = function (array, target) {
    if (array.length === 0) {
        return null;
    } else if (array.length === 1 && array[0] !== target) {
        return null;
    } else if (array.length === 1 && array[0] === target) {
        return 0;
    } else {
        var half = Math.floor(array.length / 2);
        var left = array.slice(0, half);
        var right = array.slice(half + 1);
        
        var middleThing = array[half]
        
        if (middleThing === target) {
            return half;
        } else if (target < middleThing) {
            return bsearch(left, target);
        } else if (target > middleThing) {
            var nextSearch = bsearch(right, target)
            if(nextSearch === null) {
                return null
            } else {
                return half + nextSearch + 1;
            }
        }
    }
};

console.log(bsearch([1, 2, 3, 4, 5], 2)) // 1
console.log(bsearch([1, 2, 3, 4, 5], 5)) // 4
console.log(bsearch([1, 2, 3, 4, 5], 7)) // null? -1?


var makeChange = function(coins, amt) {
    coins = coins.sort(function (a, b) { return b - a });
    var array = [];
    var last = coins[coins.length - 1]
    while (last < amt) {
        while (coins[0] < amt) {
            array.push(coins[0]);
            amt -= coins[0];
        }
        coins.shift();
    }
  
    return array;
};

var makeChange_rec = function(coins, amt) {
    if (coins.length == 0) {
        return []
    } else {
        coins = coins.sort(function(a, b){return b-a});
        if (coins[0] > amt) {
            return makeChange_rec(coins.slice(1), amt)
        } else {
            return [coins[0]].concat(makeChange_rec(coins, amt-coins[0]))
        }
    }
}


var mergeSort = function(array) {
    if (array.length == 0 || array.length == 1) {
        return array
    } else {
        var midpoint = Math.floor(array.length / 2);
        var left = array.slice(0, midpoint);
        var right = array.slice(midpoint);
    
        var leftSorted = mergeSort(left);
        var rightSorted = mergeSort(right);
    
        return merge(leftSorted, rightSorted);
    }
};

var merge = function(left, right) {
    var newArray = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            newArray.push(left.shift());
        } else {
            newArray.push(right.shift());
        }
    }
  
    return newArray.concat(left).concat(right);
};

var subsets = function(array) {
    if (array.length === 0) {
        return [[]]
    } else if (array.length === 1) {
        return [array, []];
    } else {
        // el = array[0]
        //     prev = subsets(array.slice(1))
        //     prev = prev.concat(prev.map{|arr| arr.concat(el)}
    
        var el = array[0];
        var prev = subsets(array.slice(1));
        
        prev = prev.concat(prev.map(function (arr) {
            if (typeof arr === 'number') {
                return [arr].concat(el);
            } else {
                return arr.concat(el);
            }
        }));
    
        return prev;
    }
};


        console.log(subsets([1,2,3]));