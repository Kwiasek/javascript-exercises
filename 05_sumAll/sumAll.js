const sumAll = function(a, b) {
    if (typeof a !== "number") return "ERROR"
    if (typeof b !== "number") return "ERROR"
    let max = Math.max(...arguments)
    let min = Math.min(...arguments)
    let result = 0;

    if ((min < 0 || max < 0) || (min < 0 && max < 0)) return "ERROR"

    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
