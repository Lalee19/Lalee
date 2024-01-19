$(document).ready(function(){

    Ispisivanjenavigacija1();
    Ispisivanjenavigacija2();
    ispisivanjeBurgera();


      //hover nav listeS
    $("#myNav > ul > li , #nav2 > ul > li").hover(function(){

        $(this).addClass("underline");

    }, function(){

        $(this).removeClass("underline");

       
    });


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



    ispisivanjeKatalogaSale();



    //======>>> NA hover se menja slika <<<======

    $("#saleProizvod0").hover(function(){


        $("#saleProizvod0 img").attr("src","../slike/proizvodi/mBordoA.jpeg");


    }, function(){


        $("#saleProizvod0 img").attr("src","../slike/proizvodi/mBordo.jpeg");

    });

    $("#saleProizvod1").hover(function(){


        $("#saleProizvod1 img").attr("src","../slike/proizvodi/mCrnoBElaA.jpeg");


    }, function(){


        $("#saleProizvod1 img").attr("src","../slike/proizvodi/mCrnoBela.jpeg");

    });

    $("#saleProizvod2").hover(function(){


        $("#saleProizvod2 img").attr("src","../slike/proizvodi/mPlavaA.jpeg");


    }, function(){


        $("#saleProizvod2 img").attr("src","../slike/proizvodi/mPlava.jpeg");

    });


    $("#saleProizvod3").hover(function(){


        $("#saleProizvod3 img").attr("src","../slike/proizvodi/mSvetloPlavaA.jpeg");


    }, function(){


        $("#saleProizvod3 img").attr("src","../slike/proizvodi/mSvetloPlava.jpeg");

    });

    $("#saleProizvod4").hover(function(){


        $("#saleProizvod4 img").attr("src","../slike/proizvodi/mSvetloPlaviDuksA.jpeg");


    }, function(){


        $("#saleProizvod4 img").attr("src","../slike/proizvodi/mSvetloPlaviDuks.jpeg");

    });

    $("#saleProizvod5").hover(function(){


        $("#saleProizvod5 img").attr("src","../slike/proizvodi/mCrnoSarenaDuksericaA.jpeg");


    }, function(){


        $("#saleProizvod5 img").attr("src","../slike/proizvodi/mCrnoSarenaDukserica.jpeg");

    });


    $("#saleProizvod6").hover(function(){


        $("#saleProizvod6 img").attr("src","../slike/bordoA.jpg");


    }, function(){


        $("#saleProizvod6 img").attr("src","../slike/bordo.jpg");

    });


    $("#saleProizvod7").hover(function(){


        $("#saleProizvod7 img").attr("src","../slike/proizvodi/zPlavaA.jpeg");


    }, function(){


        $("#saleProizvod7 img").attr("src","../slike/proizvodi/zPlava.jpeg");

    });


    $("#saleProizvod8").hover(function(){


        $("#saleProizvod8 img").attr("src","../slike/proizvodi/zRozeA.jpeg");


    }, function(){


        $("#saleProizvod8 img").attr("src","../slike/proizvodi/zRoze.jpeg");

    });

    $("#saleProizvod9").hover(function(){


        $("#saleProizvod9 img").attr("src","../slike/proizvodi/zZutaA.jpeg");


    }, function(){


        $("#saleProizvod9 img").attr("src","../slike/proizvodi/zZuta.jpeg");

    });

    $("#saleProizvod10").hover(function(){


        $("#saleProizvod10 img").attr("src","../slike/proizvodi/zJaknaCrnaA.jpeg");


    }, function(){


        $("#saleProizvod10 img").attr("src","../slike/proizvodi/zJaknaCrna.jpeg");

    });


    $("#saleProizvod11").hover(function(){


        $("#saleProizvod11 img").attr("src","../slike/proizvodi/zCrnaJaknaA2.jpeg");


    }, function(){


        $("#saleProizvod11 img").attr("src","../slike/proizvodi/zCrnaJakna2.jpeg");

    });




    dinamickoIsAplikacija();

    dinamickoIsFooterNav();

});



// ======>  DINAMICNKO ISPISIVANJE NAVIGACIJE LEVO
const navigacija = [
    {ime:'HOME',putanja:'../../index.html'},
    {ime:'MEN',putanja:'men.html'},
    {ime:'WOMEN',putanja:'../../index.html'}
];



function Ispisivanjenavigacija1(){
    var nav1 = '<ul>';
    for(var objekat of navigacija){

        nav1+="<li><a href='"+objekat.putanja+"'>"+objekat.ime+"</a></li>";

    }

    nav1+='</ul>';
   $('#myNav').append(nav1);
}





// ======> DINAMICKO ISPISIVANJE NAVIGACIJE DESNO
const navigacija2=[
    {ime:'Contact Us',putanja:'#'},
    {ime:'Account',putanja:'registration.html'},
    {ime:'Autor',putanja:'autor.html'}

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



//========>> ISPISIVANJE BURGERA ZA MANJE VELICINE <<========

const navBurger =[

    {ime:'HOME',putanja:'../../index.html'},
    {ime:'WOMEN',putanja:'#'},
    {ime:'SALE',putanja:'#'},
    {ime:'Account',putanja:'registration.html'},
    {ime:'Autor',putanja:'autor.html'}

]

function ispisivanjeBurgera(){

    var navB='<ul>';

    for(let i=0;i<navBurger.length;i++){

        navB+="<li><a href='"+navBurger[i].putanja+"'>"+navBurger[i].ime+"</a></li>";
    }

    navB+='</ul>';

    $('#navBurg').append(navB);
}





// ==========> DINAMICKO ISPISIVANJE KATALOGA ZA STRANICU SALE

const katSale = [

    {src:"../slike/proizvodi/mBordo.jpeg",alt:"Oxblood Shirt",h2:"Fred Perry Shirt M3600",p:"Oxblood / Ecru / Ecru<br/><span class='precrtano'>$98.00</span><br/><span class='novacena'>$85.00</span>"},
    {src:"../slike/proizvodi/mCrnoBela.jpeg",alt:"Black Shirt",h2:"Fred Perry Shirt M3600",p:"Black / White / White<br/><span class='precrtano'>$98.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mPlava.jpeg",alt:"majca",h2:"Fred Perry Shirt M3600",p:"French Navy / Ice Cream / Ice Cream<br/><span class='precrtano'>$90.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mSvetloPlava.jpeg",alt:"majca",h2:"Fred Perry Shirt M3600",p:"Midnight Blue / Ecru / Light Ice<br/><span class='precrtano'>$90.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mSvetloPlaviDuks.jpeg",alt:"Tonal Taped Track Jacket",h2:"Tonal Taped Track Jacket",p:"Light Ice / Black<br/><span class='precrtano'>$125.00</span><br/><span class='novacena'>$87.50</span> "},
    {src:"../slike/proizvodi/mCrnoSarenaDukserica.jpeg",alt:"Contrast Panel Track Jacket",h2:"Contrast Panel Track Jacketa",p:"Black<br/><span class='precrtano'>$240.00</span><br/><span class='novacena'>$120.00</span>"},
    {src:"../slike/bordo.jpg",alt:"Oxblood Shirt",h2:"Fred Perry Shirt G3600",p:"Oxblood / Dusty Rose Pink / Black<br/><span class='precrtano'>$98.00</span><br/><span class='novacena'>$90.00</span>"},
    {src:"../slike/proizvodi/zPlava.jpeg",alt:"Blue Shirt",h2:"Fred Perry Shirt G3600",p:"French Navy / Dusty Pink <br/> <span class='precrtano'>$75.00</span><br/><span class='novacena'>$70.00</span>"},
    {src:"../slike/proizvodi/zRoze.jpeg",alt:"Pink Shirt",h2:"Fred Perry Shirt G3600",p:"Dark Pink / Burnt Tobacco <br/><span class='precrtano'>$75.00</span><br/><span class='novacena'>$70.00</span>"},
    {src:"../slike/proizvodi/zZuta.jpeg",alt:"Yellow Shirt",h2:"Fred Perry Shirt G3600",p:"Oatmeal / Dark Pink / Black<br/><span class='precrtano'>$75.00</span><br/><span class='novacena'>$70.00</span>"},
    {src:"../slike/proizvodi/zJaknaCrna.jpeg",alt:"Black Jacket",h2:"Batwing Zip-Through Jacket",p:"Navy<br/><span class='precrtano'>$175.00</span><br/><span class='novacena'>$87.00</span>"},
    {src:"../slike/proizvodi/zCrnaJakna2.jpeg",alt:"Black Jacket",h2:"Printed Lining Bomber Jacket",p:"Black<br/><span class='precrtano'>$275.00</span><br/><span class='novacena'>$110.00</span>"}
    
    
]


function ispisivanjeKatalogaSale(){

    var saleKat= '';

    for(let i=0;i<katSale.length;i++){

        saleKat+=`<div class='katalogSale' id='saleProizvod${i}'>
        <img src='${katSale[i].src}' alt='${katSale[i].alt}' />
        <h2>${katSale[i].h2}</h2>
        <p>${katSale[i].p}</p>
        </div>`;
    }

    $("#katalogSale_id").append(saleKat);
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

    {ime:'MEN',putanja:'assets/stranice/mans.html'},
    {ime:'WOMEN',putanja:'#'},
    {ime:'SALE',putanja:'assets/stranice/sales.html'},
    {ime:"Autor",putanja:"#"},
    {ime:"Sitemap",putanja:"#"},
    {ime:"RSS",putanja:"#"}

]


function dinamickoIsFooterNav(){

    var footNav ='<ul id="fnav">';

    for(let i=0;i<footernav.length;i++){


        footNav+='<li><a href="'+footernav[i].putanja+'">'+footernav[i].ime+'</a></li>'; 
    }

    footNav+='</ul>';

    $("#footerNav").append(footNav);
    
}
