var button = document.querySelector("button");
var div = document.querySelector(".main");
button.addEventListener("click", function() {
	var birth = document.querySelector("input");
	var date = new Date();


	if(birth.value) {
		var birth=String(birth.value);
		var dayB=birth.charAt(8)+birth.charAt(9);
		var monthB=birth.charAt(5)+birth.charAt(6);
		var yearB=birth.charAt(0)+birth.charAt(1)+birth.charAt(2)+birth.charAt(3);
		var dateString = yearB+"/"+monthB+"/"+dayB;
		var d = new Date(dateString);
		var nb = (((date-d)*(0.0000000115741))*17).toFixed(0);
		document.querySelector("h2").innerText = "  يجب عليك أن تصلي "+nb+" ركعة";
		
	}
		
})