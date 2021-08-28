//by Amlan Saha Kundu on 5th July, 2021.

function checkCashRegister(price, cash, cid) {
  const currencies = [
    {
      name: 'ONE HUNDRED',
      amount: 100
    },
    {
      name: 'TWENTY',
      amount: 20
    },
    {
      name: 'TEN',
      amount: 10
    },
    {
      name: 'FIVE',
      amount: 5
    },
    {
      name: 'ONE',
      amount: 1
    },
    {
      name: 'QUARTER',
      amount: 0.25
    },
    {
      name: 'DIME',
      amount: 0.10
    },
    {
      name: 'NICKEL',
      amount: 0.05
    },
    {
      name: 'PENNY',
      amount: 0.01
    }
  ];
  const output = {
    status: null,
    change: []
  }
  let CN = cash - price;
  let CG;
  const cidTotal = cid.reduce((total, currency) => {
    return total + currency[1];
  }, 0);

  if (cidTotal > CN) {
    output.status = 'OPEN';
    cid = cid.reverse();

    output.change = currencies.reduce((result, currency, index) => {
      CG = 0;

      while (cid[index][1] > 0 && CN >= currency.amount) {
        CN -= currency.amount;
        cid[index][1] -= currency.amount;
        CG += currency.amount;
        CN = Math.round(CN * 100) / 100;
      }

      if (CG > 0) {
        result.push([currency.name, CG]);
      }
      return result;
    }, []);

    if (CN > 0) {
      output.status = 'INSUFFICIENT_FUNDS';
      output.change = [];
    }
  }
  else {

    if (cidTotal < CN) {
      output.status = 'INSUFFICIENT_FUNDS';
    }
    else {
      output.status = 'CLOSED';
      output.change = cid;
    }
  }
  return output;
}


/*               TEST RESULTS
=============================================
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

Passed
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

Passed
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}==============================================
*/
