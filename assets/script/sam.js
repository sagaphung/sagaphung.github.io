// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id

}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("sam1");
}

document.getElementById("picture-1").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("sam2");
}

document.getElementById("picture-2").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("sam3");
}

document.getElementById("picture-3").onclick = unhideLightbox3;

function unhideLightbox4() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("sam4");
}

document.getElementById("picture-4").onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox("sam5");
}

document.getElementById("picture-5").onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox("sam6");
}

document.getElementById("picture-6").onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox("sam7");
}

document.getElementById("picture-7").onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox("sam8");
}

document.getElementById("picture-8").onclick = unhideLightbox8;

function unhideLightbox9() {
	unhideLightbox("sam9");
}

document.getElementById("picture-9").onclick = unhideLightbox9;

function unhideLightbox10() {
	unhideLightbox("sam10");
}

document.getElementById("picture-10").onclick = unhideLightbox10;

function unhideLightbox11() {
	unhideLightbox("sam11");
}

document.getElementById("picture-11").onclick = unhideLightbox11;

function unhideLightbox12() {
	unhideLightbox("sam12");
}

document.getElementById("picture-12").onclick = unhideLightbox12;

function unhideLightbox13() {
	unhideLightbox("sam13");
}

document.getElementById("picture-13").onclick = unhideLightbox13;

function unhideLightbox14() {
	unhideLightbox("sam14");
}
document.getElementById("picture-14").onclick = unhideLightbox14;

function unhideLightbox15() {
	unhideLightbox("sam15");
}
document.getElementById("picture-15").onclick = unhideLightbox15;

function unhideLightbox16() {
	unhideLightbox("sam16");
}
document.getElementById("picture-16").onclick = unhideLightbox16;

function unhideLightbox17() {
	unhideLightbox("sam17");
}
document.getElementById("picture-17").onclick = unhideLightbox17;

function unhideLightbox18() {
	unhideLightbox("sam18");
}
document.getElementById("picture-18").onclick = unhideLightbox18;

function unhideLightbox19() {
	unhideLightbox("sam19");
}
document.getElementById("picture-19").onclick = unhideLightbox19;

function unhideLightbox20() {
	unhideLightbox("sam20");
}
document.getElementById("picture-20").onclick = unhideLightbox20;

function unhideLightbox21() {
	unhideLightbox("sam21");
}
document.getElementById("picture-21").onclick = unhideLightbox21;

function unhideLightbox22() {
	unhideLightbox("sam22");
}
document.getElementById("picture-22").onclick = unhideLightbox22;

function unhideLightbox23() {
	unhideLightbox("sam23");
}
document.getElementById("picture-23").onclick = unhideLightbox23;

function unhideLightbox24() {
	unhideLightbox("sam24");
}
document.getElementById("picture-24").onclick = unhideLightbox24;

function unhideLightbox25() {
	unhideLightbox("sam25");
}
document.getElementById("picture-25").onclick = unhideLightbox25;

function unhideLightbox26() {
	unhideLightbox("sam26");
}
document.getElementById("picture-26").onclick = unhideLightbox26;

function unhideLightbox27() {
	unhideLightbox("sam27");
}
document.getElementById("picture-27").onclick = unhideLightbox27;

function unhideLightbox28() {
	unhideLightbox("sam28");
}
document.getElementById("picture-28").onclick = unhideLightbox28;

function unhideLightbox29() {
	unhideLightbox("sam29");
}
document.getElementById("picture-29").onclick = unhideLightbox29;

// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;