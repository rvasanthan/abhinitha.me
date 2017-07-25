document.getElementsByTagName("header")[0].innerHTML = '<nav class="navbar-1 navbar navbar-default fixed-top">'+
        '<div class="container-fluid navbar-header">'+
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">'+
            '<span class="sr-only">Toggle navigation</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand" href="#"><img src="images/Logomakr_71ZTpU.png" alt="logo"></a>'+
        '</div><!-- / navbar-header -->'+
        '<div class="navbar-collapse collapse">'+
            '<ul class="nav navbar-nav">'+
                '<li id="index"><a href="index.html"><span>Home</span></a></li>'+
                '<li class="dropdown">'+
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Gallery</span> <span class="caret"></span></a>'+
                '<ul class="dropdown-menu">'+
                  '<li id="beltzville"><a href="beltzville.html" onclick="makeactive(this)"><span>Beltzville State Park</span></a></li>'+
                  '<li id="3rdbirthday"><a href="3rdbirthdaysplash.html"><span>Abhis 3rd Birthday Splash</span></a></li>'+
                  '<li id="frozen2016"><a href="frozen2016.html"><span>Frozen 2016-2017</span></a></li>'+
                  '<li id="nmvac2016"><a href="narenmamavac.html"><span>Naren Mama Vaction</span></a></li>'+
                  '<li id="nh2016"><a href="newhamp.html"><span>New Hampshire - 2017</span></a></li>'+
                  '<li id="chicago2016"><a href="chicago2016.html"><span>Chicago Summer</span></a></li>'+
                  '<li id="india2016"><a href="India2016.html"><span>India - 2016</span></a></li>'+
                '</ul>'+
                '</li>'+
                '<li id="aboutabhi"><a href="aboutabhi.html"><span>About me</span></a></li>'+
            '</ul>'+
        '</div>'+
    '</nav>';    

function makeactive(idName) {
    document.getElementById(idName).classList.add("active")
}