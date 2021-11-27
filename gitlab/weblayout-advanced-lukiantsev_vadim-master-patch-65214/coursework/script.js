let addmore = document.querySelector(".buttonevents");
let addevents = document.querySelector(".addevents");



function addedevents() {
	if ((addevents.style.display == "none") || (addevents.style.display === '')) {
		addevents.style.display = "block";
	} else {
		addevents.style.display = "none"
	}
}

addmore.addEventListener("click", addedevents)