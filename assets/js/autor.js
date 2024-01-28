console.log("Lale car!");

$(document).ready(function(){

    Ispisivanjenavigacija1();
    Ispisivanjenavigacija2();
    ispisivanjeBurgera();


     /*NA HOVER 'Account' polja u navigaciji se prikazuje forma logovanja */

     $('#logIN').mouseover(function(){

        let m=$('#formaLogovanja').css('display');

        if(m=='none'){

            $('#formaLogovanja').css('display','block');

        }else{

            $('#formaLogovanja').css('display','none');

        }

        
    })

      //klik BURGERA
    //POJAVLJIVANJE LISTE
    // (NIJE HTELO DA MI RADI SA TOGGLE) 

    $('#burger').click(function(){

        let a=$('#navBurg').css('display');

        if(a=='none'){

            $('#navBurg').css('display','block');

        }else{

            $('#navBurg').css('display','none');
        }

        
    });

    dinamickoIsAplikacija();
    dinamickoIsFooterNav();
});



const navigacija = [
    {ime:'HOME',putanja:'../../index.html'},
    {ime:'MEN',putanja:'men.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'}
];



function Ispisivanjenavigacija1(){
    var nav1 = '<ul>';
    for(var objekat of navigacija){

        nav1+="<li><a href='"+objekat.putanja+"'>"+objekat.ime+"</a></li>";

    }

    nav1+='</ul>';
   $('#myNav').append(nav1);
}


//========>> ISPISIVANJE BURGERA ZA MANJE VELICINE <<========

const navBurger =[

    {ime:'HOME',putanja:'../../index.html'},
    {ime:'MEN',putanja:'men.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'},
    {ime:'Account',putanja:'registration.html'}

]

function ispisivanjeBurgera(){

    var navB='<ul>';

    for(let i=0;i<navBurger.length;i++){

        navB+="<li><a href='"+navBurger[i].putanja+"'>"+navBurger[i].ime+"</a></li>";
    }

    navB+='</ul>';

    $('#navBurg').append(navB);
}






// ======> DINAMICKO ISPISIVANJE NAVIGACIJE DESNO
const navigacija2=[
    {ime:'Contact Us',putanja:'#contact'},
    {ime:'Account',putanja:'registration.html'},
    {ime:'Autor',putanja:'#'}

]

function Ispisivanjenavigacija2(){
    var nav2='<ul>';
    console.log("Lale");

    for(let i=0;i<navigacija2.length;i++){

        
        if(i==1){

            nav2+="<li id='logIN'><a href='"+navigacija2[i].putanja+"'>"+navigacija2[i].ime+"</a></li>";

        }else{

            nav2+="<li><a href='"+navigacija2[i].putanja+"'>"+navigacija2[i].ime+"</a></li>";

        }
        
    }

    nav2+='</ul>'

    $("#nav2").append(nav2);
}



// ===========> DINAMICKO ISPISIVANJE FOOTERA

const aplikacije = [

    {href:"https://www.facebook.com/" ,naziv:"Facebook"},
    {href:"https://www.instagram.com/", naziv:"Instagram"},
    {href:"https://www.youtube.com/",naziv:"YouTube"},
    {href:"https://www.tiktok.com/en/",naziv:"TikTok"},
    {href:"https://twitter.com/",naziv:"Twitter"},
    {href:"../Dokumentacija.pdf",naziv:"Dokumentacija"}
]


function dinamickoIsAplikacija(){

    var app='<ul id="lista_app">';

    for(let i=0;i<aplikacije.length;i++){

        app+='<li><a href="'+aplikacije[i].href+'">'+aplikacije[i].naziv+'</a></li>';   
     }

     app+='</ul>';

     $('#footerAplikacije').append(app);
}



const footernav = [
    {ime:'MEN',putanja:'mans.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sales.html'},
    {ime:'Account',putanja:'registration.html'},
    {ime:'Author',putanja:'#'},
    {ime:"Sitemap",putanja:"../../sitemap.xml"},
    {ime:"RSS",putanja:"../rss.xml"}
]


function dinamickoIsFooterNav(){

    var footNav ='<ul id="fnav">';

    for(let i=0;i<footernav.length;i++){


        footNav+='<li><a href="'+footernav[i].putanja+'">'+footernav[i].ime+'</a></li>'; 
    }

    footNav+='</ul>';

    $("#footerNav").append(footNav);
    
}


