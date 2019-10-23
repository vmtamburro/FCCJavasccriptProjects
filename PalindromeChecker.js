function palindrome(str) {
    // Good luck!
  
    //take out whitespaces and other non-alpha chars using regex
    var ogString = str.replace(/[^a-z0-9]*/gi, '')
    //make all lowercase
    ogString = ogString.toLowerCase();
    
    //repeat process for second string which we will use to test
    var reverseString = str.replace(/[^a-z0-9]*/gi, '');
    reverseString = reverseString.toLowerCase();
  
    //reverse the string
    reverseString = reverseString.split('');
    reverseString = reverseString.reverse();
    reverseString = reverseString.join('');
  
  
  //Make the comparison
  if(ogString != reverseString)
   return false;
  else
    return true;
  }