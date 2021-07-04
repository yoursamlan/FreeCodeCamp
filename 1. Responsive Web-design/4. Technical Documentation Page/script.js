const projectName = 'technical-docs-page';

function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myMenu");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}


function convertToF() {
	var celsius = document.getElementById("celsiusv").value;
	if (celsius == "") {
		alert("Please Enter a Value");
	} else {
		document.getElementById("celsiusv").value = "";
		/*alert(celsius);*/
		let fahrenheit = (celsius * 9 / 5) + 32;
		result = celsius + "  °C = " + fahrenheit + "  °F"
		alert(result);
	}
}

function reverseString() {
	var strv = document.getElementById("reversev").value;
	if (strv == "") {
		alert("Please Enter a Value");
	} else {
		document.getElementById("reversev").value = "";
		rvrs = strv.split("").reverse().join("");
		result = "Original String : " + strv + "\nReverse String : " + rvrs;
		alert(result);
	}
}


function factorial() {
	var num = document.getElementById("factnum").value;
	if (num == "") {
		alert("Please Enter a Valid Positive Integer.");
	} else if (num < 0) {
		alert("Please Enter a Positive Integer.")
	} else {
		document.getElementById("factnum").value = "";

		function factorialize(num) {
			if (num < 0)
				return -1;
			else if (num == 0)
				return 1;
			else {
				return (num * factorialize(num - 1));
			}
		}
		res = factorialize(num);
		alert(num + "! = " + res);
	}
}

function Truncate() {
	var tstr = document.getElementById("trunstr").value;
	var tlim = document.getElementById("trunnum").value;

	function truncateString(str, num) {
		if (num >= str.length) return str;
		else return str.substring(0, num) + "...";
	}
	if (tstr == "" || tlim == "") {
		alert("Fields can't be empty");
	} else {
		document.getElementById("trunstr").value = "";
		document.getElementById("trunnum").value = "";
		ts = truncateString(tstr, tlim);

		res = "Old String: " + tstr + "\nTruncated String: " + ts;
		alert(res);
	}
}

function TC() {
	var tcstr = document.getElementById("tcase").value;

	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function (word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}
	if (tcstr == "") alert("Please enter a string.");
	else {
		document.getElementById("tcase").value = "";
		tcr = titleCase(tcstr);
		res = "Old String: " + tcstr + "\nTitle Cased String: " + tcr;
		alert(res);
	}
}
