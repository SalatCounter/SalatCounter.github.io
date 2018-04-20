var button = document.querySelector("button");
var div = document.querySelector(".main");
button.addEventListener("click", function() {
	var birth = document.querySelector("input");
	var date = new Date();


	if(birth.value) {
		var nb=parseInt(((new Date().getTime()-new Date(birth.value.toString()).getTime())/86400000) * 17) ;
		document.querySelector("p").innerText = "  يجب عليك أن تصلي "+nb+" ركعة";
		
	}
		
})