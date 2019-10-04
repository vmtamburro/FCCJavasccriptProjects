function telephoneCheck(str) {
    // Good luck!
  
    //set counters and eliminates whitespace
    var dashes = 0;
    var parenth = 0;
    str = str.replace(/\s/g, '');
  
      //search for nondigit, nonalphabetical chars. Eliminates that possibility
      if (str.search(/\W*\D*/g)) {
          return false;
      }
  
      //Break down the string to char, loop through each char and
      //search for the number of parenth or dash
      str = str.split('');
      for (var i = 0; i < str.length; i++) {
          if (str[i].search(/[()]/) != -1) parenth++;
          if (str[i].search(/[\-]/) != -1) dashes++;
      }
  
      //check if the dashes aren't two or one, if any
      if (dashes) 
      {
        if(dashes !== 2 && dashes !== 1 )
          return false;
      }
        
      //Check that there are only two parenth, if any, and that they only wrap the 3-digit areacode
      if(parenth){
        if(parenth !==2)
          return false;
        else if(parenth > 0 && str[str.indexOf('(') + 4] != ')')
          return false;
      }
   
  
      //If the number starts with 1, and the total chars minus parenth and dashes is 11, it is a valid length 
      //Otherwise if the total chars minus parenth is 10, it is a valid length
      if(str[0] == 1 && (str.length - (dashes + parenth) == 11))
        return true;
      else if(str.length - (dashes + parenth) == 10)
        return true;
      
      
      return false;
  }
  
  telephoneCheck("555-555-5555");