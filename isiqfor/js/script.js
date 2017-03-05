function k(){
function redi(){
	document.getElementsByClassName('red')[0].style.backgroundColor="red";
	document.getElementsByClassName('yellow')[0].style.backgroundColor="gray";
	document.getElementsByClassName('green')[0].style.backgroundColor="gray";
}
setTimeout(redi, 1000)

function reda(){
	document.getElementsByClassName('yellow')[0].style.backgroundColor="yellow";
	document.getElementsByClassName('red')[0].style.backgroundColor="gray";
	document.getElementsByClassName('green')[0].style.backgroundColor="gray";
}
setTimeout(reda, 6000)

function redb(){
	document.getElementsByClassName('green')[0].style.backgroundColor="green";
	document.getElementsByClassName('red')[0].style.backgroundColor="gray";
	document.getElementsByClassName('yellow')[0].style.backgroundColor="gray";
}
setTimeout(redb, 8000)
}
// for (var a = 0; a < 5; a++) {
// 	k();

// }
k();
setInterval(k, 11000);