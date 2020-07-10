console.log("sasasa")

earn_button.onclick = function() {
	let stop_anim = () => {
		earn_button.classList.remove('animate');
	}
	earn_button.classList.add('animate');
	setTimeout(stop_anim, 500);
};