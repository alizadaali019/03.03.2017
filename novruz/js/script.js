
var countDownDate = new Date("mar 20, 2017 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000* 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = "Novruza" + " " + days + "gun" + " " + hours + " " + "saat"
    + " " + minutes + " " +"deqiqe " + " " + seconds + " " + " " + "saniyye  qalib" ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "NOVRUZ BAYRAMINIZ MÜBARƏK";
    }
}, 1000);