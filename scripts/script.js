
//create img objects which hold the src path
//make an array of background imgs

//create a var that images[] ??how to grab correct index that matches thumbnail id??

//create a function that listens for thumbnail to be clicked
//----create condition that loads correct img to innerWrapper





var images = [
	img1 = {
		imgName : "img1", 
		imgSrc : "images/img1.jpg", 

	},

	img2 = {
		imgName : "img2", 
		imgSrc : "images/img2.jpg"
	},

	img3 = {
		imgName : "img3", 
		imgSrc : "images/img3.jpg"
	},

	img4 = {
		imgName : "img4", 
		imgSrc : "images/img4.jpg"
	},

	img5 = {
		imgName : "img5", 
		imgSrc : "images/img5.jpg"
	},

	img6 = {
		imgName : "img6", 
		imgSrc : "images/img6.jpg"
	},

	img7 = {
		imgName : "img7", 
		imgSrc : "images/img7.jpg"
	},

	img8 = {
		imgName : "img8", 
		imgSrc : "images/img8.jpg"
	},

	img9 = {
		imgName : "img9", 
		imgSrc : "images/img9.jpg"
	},

	img10 = {
		imgName : "img10", 
		imgSrc : "images/img10.jpg"
	}
];


var timeOut;

$('.thumbnail').on('mouseenter', function(){
	var position = $(this).data('fullimage');
	var that = this;

	$('.audio'+ position)[0].play();
	$('.audio'+ position)[0].volume = (0.1);

	timeOut = setTimeout(function(){
  		$(that).addClass('scaled');
  		console.log("Scale up");
	},500);
});

$('.thumbnail').on('mouseleave', function(){
	$('.scaled').removeClass('scaled');
	clearInterval(timeOut);
});



$('.thumbnail').on('click', function(){
	var position = $(this).data('fullimage');
	console.log(position);
	var $image = $('.wrapper');
	$image.fadeOut(500, function() {
		$(this).css('background-image', 'url(' + images[position].imgSrc + ')');
	}).fadeIn(400);
	

	$('header').removeClass().addClass('changed' + images[position].imgName);
	console.log($( "h1" ).parentsUntil('header'));
});
