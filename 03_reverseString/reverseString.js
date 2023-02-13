const reverseString = function(string) {
    let newStr = string.split('');
    let result = [];
    for (let i = newStr.length; i >= 0; i--) {
        result.push(newStr[i]);
    }
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
