function convertToRoman(num) {
    var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    var romanBuilder="";

    //Iterate to the applicable index
    for(var i = 0; i < dec.length; i++)
    {
        while(num%dec[i] < num)
        {
            //add to the string builder, num becomes smaller
            romanBuilder += roman[i];
            num -= dec[i];
        }
    }
    return romanBuilder;
    }
convertToRoman(57);
