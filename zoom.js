/*    JavaScript 6th Edition
 *    

 *    Photo zoom
 *    Variables and functions
 *    Author: Segvan Johnson
 *    Date:   10/22/2017

 *    Filename: zoom.js
 */


"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/laser0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

function closeWin() {
	window.close();
}

function createEventListener() {
	var closeWindowDiv = document.getElementsByTagName("p")[0];
	if (closeWindowDiv.addEventListener) {
		closeWindowDiv.addEventListener("click", closeWin, false);
	} else if (closeWindowDiv.attachEvent) {
		closeWindowDiv.attachEvent("onclick", closeWin);
	}
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;