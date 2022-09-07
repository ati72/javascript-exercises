const removeFromArray = function(array, ...removable) {
    
    for(const args of removable )  {
        let index = array.indexOf(args);
    if(index > -1) {
        array.splice(index, 1);
    }
    index = "";
    }
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
