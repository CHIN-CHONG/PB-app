let id_of_animate = 0;
window.onload = function() {
	if(document.getElementById('home')){
	document.getElementById('earn_button').onclick = function() {
		id_of_animate += 1;
		let current_id = id_of_animate;
		let earn_button = document.getElementById('earn_button');
		earn_button.classList.remove("animate_start");

		let name_animation = "animate";

		let stop_anim = () => {
			earn_button.classList.remove(name_animation);
		}

		let restore_start_animate = (id) =>{
			if (!("animate_start" in earn_button.classList) && id == id_of_animate){
				earn_button.classList.add("animate_start"); }
		}
		earn_button.classList.add(name_animation);
		setTimeout(stop_anim, 600);
		setTimeout(restore_start_animate, 10000, current_id);
	};}
};


