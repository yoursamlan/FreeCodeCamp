//by Amlan Saha Kundu on 5th July, 2021.
function main() {
  str = document.getElementById("textbox").value;
  function rot13(str) {
    var plaintext = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    var index = (x) => plaintext.indexOf(x);
    var translate = (x) => (index(x) >= 0 ? cipher[index(x)] : x);
    return str.split("").map(translate).join("");
    return str;
  }
  alert(rot13(str));
}

/*               TEST RESULTS
=============================================
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

Passed
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

Passed
rot13("SERR YBIR?") should decode to the string FREE LOVE?

Passed
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
==============================================
*/