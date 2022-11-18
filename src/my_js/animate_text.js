'use strict'

// export {animateText};

function animateText(){
// variables for animateText
let textToAnimate = document.getElementById('animationText');
// copy text to temporary variable
let z = textToAnimate.innerHTML.split('');
// remove not animated text
textToAnimate.innerHTML = '';


// checking for white spaces in text
// adding class with animation
	for(let element of z){
		let createSpan = document.createElement('span');
		createSpan.innerHTML = element;
		if(element == ' '){
			textToAnimate.appendChild(createSpan);
		} else {
			createSpan.classList.add('animateText');
			textToAnimate.appendChild(createSpan);
		}
	}


	// get elements with added class, display after delay
	let classElements = document.getElementsByClassName('animateText');

		for(let j = 0; j < classElements.length;j++){

			setTimeout(function(){
				classElements[j].classList.add('animateText--visible');
			},75 * (j + 1));	
		}

}


animateText();