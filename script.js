// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE

function nextImage(el){
	el.src = "images/orange_slot.PNG";
	el.src = "images/cherry_slot.PNG";
	el.src = "images/lemon_slot.PNG";
	if (cherry_slot){
		el.src = "images/cherry_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (lemon_slot){
		el.src = "images/lemon_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (orange_slot){
		el.src = "images/orange_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}

}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function playSound() {
	document.getElementById('you-win').play();
	
	// when the JACKPOT! button is clicked, play the slot machine sound
}