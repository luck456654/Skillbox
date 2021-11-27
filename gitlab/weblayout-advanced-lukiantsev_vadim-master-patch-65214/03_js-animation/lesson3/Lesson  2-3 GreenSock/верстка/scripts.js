var tl=gsap.timeline();
tl.from(".hero__title",{y:300,duration:1})
tl.from(".hero__descr",{opacity:0,duration:1})
tl.from(".photo1",{scale: 0})
tl.from(".photo2",{scale: 0})
tl.from(".photo3",{scale: 0})
tl.from(".photos__author",{opacity:0,duration:1})



gsap.from(".hero__btn",{y:300,duration:1})


var play = document.querySelector(".burger");
var reverse = document.querySelector(".close");


	var tl2 = gsap.timeline({paused: true});
	tl2.to(".menu",{opacity:1,zIndex:100});
		
	tl2.from(".menu__nav",{y:200,duration:1},'-=2');
	tl2.from(".sub-menu",{y:200,opacity:0,duration:1},'-=1');
	tl2.from(".sub-menu2",{y:200,opacity:0,duration:1},'-=1');
	tl2.from(".social",{y:200,opacity:0,duration:1},'-=1');

play.onclick = function() {
  tl2.play();
}
reverse.onclick = function() {
  tl2.reverse();
}
