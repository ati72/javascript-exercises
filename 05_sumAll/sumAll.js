const sumAll = function(start, stop) {
    let sum = 0;

    if(start > stop) {
        let temp = start;
        start = stop;
        stop = temp;
    } else if(start < 0 || stop < 0) {
        return "ERROR";
    } else if(!Number.isInteger(start) || !Number.isInteger(stop)) {
        return "ERROR";
    }

    for(i=start; i<=stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
