function getRTime() {
    if (document.getElementById("t_d")) {
        var RunTime = new Date('2021/04/12 09:42:29').getTime();
        var NowTime = new Date().getTime();
        var t = NowTime - RunTime;
        var d = Math.floor(t / (1000 * 60 * 60 * 24));
        var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("t_d").innerHTML = d + " 天 ";
        document.getElementById("t_h").innerHTML = h + " 时 ";
        document.getElementById("t_m").innerHTML = m + " 分 ";
        document.getElementById("t_s").innerHTML = s + " 秒 "
    }
}
setInterval(getRTime, 1000);