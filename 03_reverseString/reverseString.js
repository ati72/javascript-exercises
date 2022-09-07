const reverseString = function(string) {
    reversed = "";
    start = string.length - 1;

    if(string == "") {
        return reversed;
    } else {
        for(i = start; i>=0; i--){
            reversed += string.charAt(i);
        }
        return reversed;
    }

    
};

// Do not edit below this line
module.exports = reverseString;
