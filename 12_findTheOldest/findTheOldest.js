const findTheOldest = function(arr) {
    let todayYear = new Date().getFullYear();

    for (let person in arr) {
        if (!arr[person].hasOwnProperty('yearOfDeath')) {
            arr[person].yearOfDeath = todayYear;
        }
    }

    let years = [];
    for (let year in arr) {
        years.push(arr[year].yearOfDeath - arr[year].yearOfBirth);
    }
    let oldest = years.indexOf(Math.max(...years));
    return arr[oldest];
    
};

// Do not edit below this line
module.exports = findTheOldest;
