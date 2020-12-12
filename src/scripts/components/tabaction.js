window.tabaction = function(buttons, blocks, i, ACTIVE_CLASS, ANIMATION_CLASS=false) {
	blocks.forEach((item) => item.classList.remove(ACTIVE_CLASS));
	blocks[i].classList.add(ACTIVE_CLASS);
	if(ANIMATION_CLASS) {
		blocks.forEach((item) => item.classList.remove(ANIMATION_CLASS));
		blocks[i].classList.add(ANIMATION_CLASS);
	}
};