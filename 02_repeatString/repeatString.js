const repeatString = function(string, numOfTimes) {
    repeated = "";
    
    if(numOfTimes > 0) {
        for(i=0; i<numOfTimes; i++) {
            repeated += string;
        }
    } else if(numOfTimes < 0) {
        return "ERROR";
    } else if(string == ""){
        return repeated;
    }
    
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
