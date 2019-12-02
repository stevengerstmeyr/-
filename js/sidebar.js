function darkUI() {
    if (document.getElementById('checkboxui').checked) {
        var input = document.getElementById('mainvideo');
        input.style.backgroundImage = 'url(resources/images/background_dark.svg)';
        document.getElementById('videoh1').style.color = "#FFFFFF";
        document.getElementById('videoh2').style.color = "#FF4319";
        var sidebar = document.getElementById('sidebar');
        //sidebar.style.right = "0px";
    } else {
        var input = document.getElementById('mainvideo');
        input.style.backgroundImage = 'url(resources/images/background2.svg)';
        var sidebar = document.getElementById('sidebar');
        //sidebar.style.right = "-50px";
        document.getElementById('videoh1').style.color = "#373737";
        document.getElementById('videoh2').style.color = "#373737";
    }
}
