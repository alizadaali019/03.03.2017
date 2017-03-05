	var a = document.getElementsByClassName("a1");
    var pnl = document.getElementsByClassName('text');
    for (var i = 0; i < pnl.length; i++) {
    	pnl[i].style.display = 'none';
    }

	for (i = 0; i < a.length; i++) {
	    a[i].onclick = function(){
	    var n = this.nextElementSibling;    
	        tog(n);
	}
}
function tog (q) {
   if (q.style.display === 'block') {
   	q.style.display = 'none';
   } else {
   	q.style.display = 'block';   	
   }
}