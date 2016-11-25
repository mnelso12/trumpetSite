/*
 * Drew Noakes 6 Apr 2002 http://drewnoakes.com
 * - Images now can go up and down (allowing bubbles, as well as snow)
 *   - Images move into the screen and move out smoothly, without disappearing or
 *     appearing suddenly
 *     - Scrolling the page doesn't effect the appearance of the snow/bubbles
 *     - renamed variables to be more meaningful
 *     - refactored common code out to functions, replacing different repeating
 *       functions for each browser with a single function (moveFloatingImages)
 *         for all browsers
 *
 *         Modified 8 Dec 2006 for XHTML support.  This required the 'top' and 'left' attributes
 *         be set with a "px" suffix which in turn requires parsing by the CSS engine, reducing
 *         performance.  If you don't use XHTML validation, remove the string appends below.
 *         */


document.onkeypress = function (e) {
	e = e || window.event;
	console.log('pressed enter woo');
	imageCount += 1;
	initialiseFloatingImages();
};

//relative URL path to the image
var imageSrc = "media/bubble.jpg";
// the height of the image in use
var imageHeight = 1;
// number of images to display
var imageCount = 0;
// -1 for up, 1 for down
var imageDirection = -1;

// time to wait before queueing the next screen update
var TIMEOUT_INTERVAL_MILLIS = 10;

// browser sniffer
var ns4up = (document.layers) ? 1 : 0;
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

// coordinate and position arrays
var thetaRadians = new Array();
var xPosition = new Array();
var yPosition = new Array();

// amplitude and step arrays
var xAmplitude = new Array();
var thetaStep = new Array();
var yStep = new Array();

// window size variables, set by function detectWindowSize()
var windowWidth, windowHeight;

// create DIVs and start the function
function initialiseFloatingImages()
{
	console.log('in create function');
	detectWindowSize();

	for (var i = 0; i < imageCount; i++) {
		// set coordinate variables
		thetaRadians[i] = 0;
		// set position variables
		xPosition[i] = Math.random()*(windowWidth-50);
		yPosition[i] = Math.random()*windowHeight;
		// set amplitude variables
		xAmplitude[i] = Math.random()*7;
		// set step variables
		thetaStep[i] = 0.02 + Math.random()/10;
		// set step variables
		yStep[i] = 0.7 + Math.random();
		// write layers etc...
		if (ns4up) {
			document.write('<layer name="dot'+i+'" left="15" top="15" visibility="show"><img src="'+imageSrc+'" alt="Floating image"/></layer>');
		} else if (ie4up||ns6up) {
			document.getElementById("body").innerHTML += '<div id="dot'+i+'" style="POSITION:absolute; Z-INDEX:'+i+'; VISIBILITY:visible; TOP:15px; LEFT:15px;"><img src="'+imageSrc+'" alt="Floating image"/></div>';
		}
	}

	moveFloatingImages();
}

// this is the main function
function moveFloatingImages()
{
	if (imageCount == 0) {
		console.log('no bubbles');
		return;
	}

	// for each image...
	for (var i = 0; i < imageCount; i++) {
		// recalculate y position
		yPosition[i] += imageDirection * yStep[i];
		// ensure not off top or bottom of visible screen
		if (yPosition[i] > windowHeight+getPageYOffset()) {
			// downwards-heading image is at the bottom...  reset it
			xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
			yPosition[i] = -imageHeight;
			thetaStep[i] = 0.02 + Math.random()/10;
			yStep[i] = 0.7 + Math.random();
			detectWindowSize();
		} else if (yPosition[i] < getPageYOffset()-imageHeight) {
			// upwards-heading image is at the top...  reset it
			/*
			xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
			yPosition[i] = getPageYOffset() + windowHeight;
			thetaStep[i] = 0.02 + Math.random()/10;
			yStep[i] = 0.7 + Math.random();
			detectWindowSize();
			*/
			imageCount -= 1;
		}
		thetaRadians[i] += thetaStep[i];
		// move each image
		var newXPosition = xPosition[i] + xAmplitude[i]*Math.sin(thetaRadians[i]);
		if (ns4up) {
			document.layers["dot"+i].top = yPosition[i] + "px";
			document.layers["dot"+i].left = newXPosition + "px";
		} else if (ie4up) {
			document.all["dot"+i].style.pixelTop = yPosition[i];
			document.all["dot"+i].style.pixelLeft = newXPosition;
		} else if (ns6up) {
			document.getElementById("dot"+i).style.top = yPosition[i] + "px";
			document.getElementById("dot"+i).style.left = newXPosition + "px";
		}
	}
	setTimeout("moveFloatingImages()", TIMEOUT_INTERVAL_MILLIS);
}

// return the page's offset due to vertical scrolling
function getPageYOffset()
{
	var yOffset = 0;
	if (ns4up) {
		yOffset = window.pageYOffset;
	} else if (ie4up||ns6up) {
		yOffset = document.body.scrollTop;
	}
	return yOffset;
}

// detect information about the window's size
function detectWindowSize()
{
	//console.log('detecting window size');
	if (ns6up) {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	} else if (ns4up) {
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	} else if (ie4up) {
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	} else {
		windowWidth = 800;
		windowHeight = 600;
	}
	//console.log('width=', windowWidth, 'height=', windowHeight);
}

initialiseFloatingImages();
