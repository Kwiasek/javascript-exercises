const removeFromArray = function(arr, ...args) {
    let result = [...arr];
    for (let arg in args) {
        for (let elem in result) {
            if (args[arg] === result[elem]) {
                result.splice(elem, 1);
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
