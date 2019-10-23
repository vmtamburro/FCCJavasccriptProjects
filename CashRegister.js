function checkCashRegister(price, cash, cid) {
    //determine change owed to customer
    var change = cash - price;
    //declare empty return object
    var changeObj = { status: "OPEN", change: [] };
  
    //determine the total ammount in cid
    var acc = 0;
      for (var i = 0; i < cid.length; i++) {
        acc += cid[i][1];
      }
    var register = acc.toFixed(2); 
  
    //Handle obvious returns
    if (register < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (register == change) {
      return { status: "CLOSED", change: cid };
    } else {
  
      //set temp vars
      var changeCount = 0; 
      var cidInst;
  
      //set denomination arrays
      var currencyAmt = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
      var currencyUnit = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
  
        //loop through each value in CID, from largest to smallest, paralell to denomination
        //subtract the ammount from the change owed to customer. Use a counter to keep track
        //of the number of deductions. multiply that count to the currency ammount.
        for(var j = 8; j >= 1; j--)
        {
          cidInst = cid[j][1];
          changeCount = 0;
          while (change >= currencyAmt[j] && cidInst > 0)
          {
            change -= currencyAmt[j];
            changeCount++;
            cidInst -= currencyAmt[j];
          }
          if(changeCount > 0) 
          {
            changeObj.change.push([currencyUnit[j], (changeCount * currencyAmt[j])]);
          }
        }
      cidInst = cid[0][1];
      changeCount = 0;
      //If there is not enough change remaining in pennies, return insufficient
      if (change > cidInst) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      //Count pennies remaining. Round to 2nd decmial place.
      } else if (change > 0) {
        var remainder = 0;
        remainder = Number(change.toFixed(2)); 
        changeObj.change.push(["PENNY", remainder]);
      }
      return changeObj;
    }
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  