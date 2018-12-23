//menu
menu.onclick=function myFunction(){
    var x=document.getElementById('myTopnav');

    if(x.className==="topnav"){
        x.className+=" responsive";
    }
    else{
        x.className="topnav";
    }
}

//button download
const body = document.animated__button; //body
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
    body.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
    body.classList.remove('show');
});


//slow transition to the id in the site menu
$(document).ready(function(){
	$("#myTopnav").on("click","a", function (event) {
        //відміняємо стандартну обробку натискання по силці
		event.preventDefault();

		//забираємо ідентифікатор боки з атрибута href
		var id  = $(this).attr('href'),

		//дізнаємося висоту від початку сторінки до блоку на який посилається якір
			top = $(id).offset().top;
		
		//анімуємо перехід на відстань - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});




//button to top
var limit = $(window).height()/3,
    $backToTop = $('#back-to-top');

    $(window).scroll(function () {
         if ( $(this).scrollTop() > limit ) {
            $backToTop.fadeIn();
        } 
        else {
            $backToTop.fadeOut();
        }
    });

//scroll body to 0px on click--button to top
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
        return false;
});



//animate wow
new WOW().init(); 









