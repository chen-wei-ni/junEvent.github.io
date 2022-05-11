/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.switch-list').toggle(300, 'linear')
})
$("body").click(function(){
    $('.switch-list').hide()
})
$('.switch-list').click(function(e){
    e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function(){
	$('.switch-icon').attr("src","images/language/icon_language_hover.svg");
},
function(){
	$('.switch-icon').attr("src","images/language/icon_language.svg");

});

/*滑動至最上方*/
$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 300) {
				$('.top_btn').show(500, 'swing');
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
animate.classList.remove('fuyofuyo');  
setTimeout(function(){
animate.classList.add('fuyofuyo');
},2500)
})

/*標題跳動動畫每2.5秒一次*/
const animateTitle = document.querySelector('.bnTitle');
animateTitle.classList.add('effect');
animateTitle.addEventListener('animationend', () => {
animateTitle.classList.remove('effect');  
setTimeout(function(){
animateTitle.classList.add('effect');
},3000)
})

/*標題進入動畫*/
var width = document.body.clientWidth
console.log(width)
if(width <= 768){
	var loading = setInterval(animateMb);
	var shine = setInterval(animateRoleMb);
}else{	
	var loading = setInterval(animatePc);
	var shine = setInterval(animateRole);
}
var time =-400
function animatePc(){
	$('.bnTitle').css('bottom',time+'px');
	time+=4
	if(time>9){
		clearInterval(loading)
	}
}
function animateRole(){
	time+=1
	if(time>9){
		clearInterval(shine)
		var mtime =-100
		var moveRight = setInterval(function(){
		$('.character').css('bottom',mtime+'px');
		$('.character').addClass('show')
		mtime+=4
		if(mtime>5){
		clearInterval(moveRight)
	}
})
	}
}
/*手機版*/

var mbTime = -100;
function animateMb(){
	$('.bnTitle').css('bottom',mbTime+'px');
	mbTime+=3
	if(mbTime>13){
		clearInterval(loading)
	}
}
function animateRoleMb(){
	mbTime+=5
	if(mbTime>3){
		clearInterval(shine)
		var mtime =-20
		var moveRight = setInterval(function(){
		$('.character').css('bottom',mtime+'px');
		$('.character').addClass('show')
		mtime+=4
		if(mtime>5){
		clearInterval(moveRight)
	}
})
	}
}




