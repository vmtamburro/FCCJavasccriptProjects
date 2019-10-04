function rot13(str) { // LBH QVQ VG! YOU DID IT! :)

    //create an array of the alphabet, include an additional 13 letters.
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];

    //create new array for decoded letters
    var decode = [];
    var decodeIndex

    //loop through each in the array , find the index of the existing letter in the  
    // alphabet, and add 13. If the index does not exist (nonalphabetical), then push that
    // character without decryption. Otherwise add the decripted char. 
    for (var i = 0; i < str.length; i++)
    {
      decodeIndex = letters.indexOf(str[i]); 
        if(decodeIndex == -1) {
          decode.push(str[i]);
        }else{
          decodeIndex += 13
          decode.push(letters[decodeIndex]);
        }
    }
    return decode.join("");//join as a string
}

// Change the inputs below to test
var test = rot13("LBH QVQ VG!");
console.log(test);