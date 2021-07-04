function palindrome() {
  var text = document.getElementById("textbox").value;
  var flag = 0;
  var text = text.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ").toUpperCase();
  for (i = 0; i < text.length; i++) {
    text = text.replace(" ", "");
  }
  var arr = text.split("");
  for (var i=0; i<arr.length/2; i++){
    flag = flag + (arr[i]==arr[arr.length-i-1] ? 0 : 1);
  }
 alert(flag==0 ? true : false);
}

/* TEST CASES
===========================================================
Passed
palindrome("eye") should return a boolean.

Passed
palindrome("eye") should return true.

Passed
palindrome("_eye") should return true.

Passed
palindrome("race car") should return true.

Passed
palindrome("not a palindrome") should return false.

Passed
palindrome("A man, a plan, a canal. Panama") should return true.

Passed
palindrome("never odd or even") should return true.

Passed
palindrome("nope") should return false.

Passed
palindrome("almostomla") should return false.

Passed
palindrome("My age is 0, 0 si ega ym.") should return true.

Passed
palindrome("1 eye for of 1 eye.") should return false.

Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.

Passed
palindrome("five|\_/|four") should return false.
=======================================================*/