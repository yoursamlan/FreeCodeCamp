//by Amlan Saha Kundu on 5th July 2021.
function Roman() {
  numb = document.getElementById("textbox").value;
		var rome = "";
		var checkpoint = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
		var letters = {
			1: "I",
			4: "IV",
			5: "V",
			9: "IX",
			10: "X",
			40: "XL",
			50: "L",
			90: "XC",
			100: "C",
			400: "CD",
			500: "D",
			900: "CM",
			1000: "M"
		};

		function lastcheckpoint(x) {
			var lcp = 0;
			for (var i = 0; i <= x; i++) {
				for (var j = 0; j < checkpoint.length; j++) {
					if (checkpoint[j] == i) lcp = checkpoint[j];
				}
			}
			return lcp;
		}

		while (numb != 0) {
			x = lastcheckpoint(numb);
			rome = rome + letters[x];
			numb -= x;
		}
		
		alert(rome);
	}

/* TEST RESULTS 
==================================
convertToRoman(2) should return the string II.

Passed
convertToRoman(3) should return the string III.

Passed
convertToRoman(4) should return the string IV.

Passed
convertToRoman(5) should return the string V.

Passed
convertToRoman(9) should return the string IX.

Passed
convertToRoman(12) should return the string XII.

Passed
convertToRoman(16) should return the string XVI.

Passed
convertToRoman(29) should return the string XXIX.

Passed
convertToRoman(44) should return the string XLIV.

Passed
convertToRoman(45) should return the string XLV.

Passed
convertToRoman(68) should return the string LXVIII

Passed
convertToRoman(83) should return the string LXXXIII

Passed
convertToRoman(97) should return the string XCVII

Passed
convertToRoman(99) should return the string XCIX

Passed
convertToRoman(400) should return the string CD

Passed
convertToRoman(500) should return the string D

Passed
convertToRoman(501) should return the string DI

Passed
convertToRoman(649) should return the string DCXLIX

Passed
convertToRoman(798) should return the string DCCXCVIII

Passed
convertToRoman(891) should return the string DCCCXCI

Passed
convertToRoman(1000) should return the string M

Passed
convertToRoman(1004) should return the string MIV

Passed
convertToRoman(1006) should return the string MVI

Passed
convertToRoman(1023) should return the string MXXIII

Passed
convertToRoman(2014) should return the string MMXIV

Passed
convertToRoman(3999) should return the string MMMCMXCIX
======================================*/