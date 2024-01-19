
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

    mw2SlikeDinamickoIspisavanje();
   

    //SLAJDER
    dinamickoIspisvanjeSlajdera(0);
    setInterval(menjanjeSlikaUnapred, vreme);
    


    popProizvodi();

    dinamickoIsAplikacija();


    dinamickoIsFooterNav();
    



    //sakrili smo dugme koje se nalazi preko 2 slike
   
  

    $(".dugme").hide();


   $("#mW-s1").hover(function(){

       
        $("#mW-s1 .dugme").show();

       



   }, function(){

         $("#mW-s1 .dugme").hide();

        
    

   });

   

    $("#mW-s2").hover(function(){
    
        
        $("#mW-s2 .dugme").show();

        $("mW-s2").addClass(".tamno");

   }, function(){

        $("#mW-s2 .dugme").hide();

        $("#mw-s2").removeClass(".tamno");
   });



   




   //=======> MENJANJE SLIDER NA KLIK  <=========

   $(".fa-chevron-left").click( function(){


    menjanjeSlikaUnazad();
        

   });

   $(".fa-chevron-right").click( function(){

    menjanjeSlikaUnapred();

   });



   // =======> Hoverovanjem slike, menja se slika

   $("#triSlike_Slika1").hover(function(){

    $("#triSlike_Slika1 a img").attr("src","assets/slike/crnozlatnaA.jpg");

   },
   function(){

    $("#triSlike_Slika1 a img").attr("src","assets/slike/crnozlatna.jpg");

   });




   $("#triSlike_Slika2").hover(function(){

    $("#triSlike_Slika2 a img").attr("src","assets/slike/bordoA.jpg");
   
   }, function(){

    $("#triSlike_Slika2 a img").attr("src","assets/slike/bordo.jpg");

   });


   $("#triSlike_Slika3").hover(function(){

    $("#triSlike_Slika3 a img").attr("src","assets/slike/crnoA.jpg");

   }, function(){

    $("#triSlike_Slika3 a img").attr("src","assets/slike/crno.jpg");

   });



   

});


  


   



   

   
   




// ======>  DINAMICNKO ISPISIVANJE NAVIGACIJE LEVO
const navigacija = [
    {ime:'MEN',putanja:'assets/stranice/men.html'},
    {ime:'WOMEN',putanja:'#'},
    {ime:'SALE',putanja:'assets/stranice/sale.html'}
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
    {ime:'Contact Us',putanja:'#contact'},
    {ime:'Account',putanja:'assets/stranice/registration.html'},
    {ime:'Autor',putanja:'assets/stranice/autor.html'}

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

    {ime:'MEN',putanja:'assets/stranice/men.html'},
    {ime:'WOMEN',putanja:'#'},
    {ime:'SALE',putanja:'assets/stranice/sale.html'},
    {ime:'Account',putanja:'assets/stranice/registration.html'},
    {ime:'Autor',putanja:'assets/stranice/autor.html'}

]

function ispisivanjeBurgera(){

    var navB='<ul>';

    for(let i=0;i<navBurger.length;i++){

        navB+="<li><a href='"+navBurger[i].putanja+"'>"+navBurger[i].ime+"</a></li>";
    }

    navB+='</ul>';

    $('#navBurg').append(navB);
}






// ==========>   ISPISIVANJE 2 SLIKE PREKO JS-a , DINAMICKI <==========INAMICKO ISPISIVANJE 2 SLIKE
const mWSlike = [

    {id:'mW-s1', putanja:'assets/stranice/men.html', h2:'MEN', h1:'The Fred Perry Shirts',p:'Discover new colors of Fred Perry Shirts'},
    {id:'mW-s2', putanja:'#', h2:'WOMEN', h1:'Coats & Jackets', p:'Be fashionable this winter with Fred Perry'}
]

function mw2SlikeDinamickoIspisavanje(){

    var mWS='';

    for(let i=0;i<mWSlike.length;i++){
        
        mWS+='<div class="mW"><div id="'+mWSlike[i].id+'" class="mW-slika"> <div class="dugme"><a class="b2" href="'+mWSlike[i].putanja+'">Shop Now</a></div></div><div class="mW-tekst"><h2>'+mWSlike[i].h2+'</h2> <h1>'+mWSlike[i].h1+'</h1> <p>'+mWSlike[i].p+'</p></div></div>';
    }

    $("#manWoman").append(mWS);
}



// =======> Dinamicko ispisivanje slajdera


const slider = [

    {src:"assets/slike/FredPerry.jpg",alt:"Fred Perry Tennis",h2:"Frederick John Perry",p:'Perry was the first player to win a "Career Grand Slam", winning all four singles titles, which he completed at the age of 26 at the 1935 French Championships. He remains the only British player ever to achieve this.'},
    {src:"assets/slike/FredPerry2.jpg",alt:"Fred Perry Tabletenis",h2:"Frederick John Perry",p:"Perry was also profesional table tennis player."},
    {src:"assets/slike/FredPerry3.jpg",alt:"Fred Perry Logo",h2:"Fred Perry",p:"A part of British subcultural uniform since 1950s, adopted by each generation as their own."}

]

function dinamickoIspisvanjeSlajdera(i){
    
        document.getElementById('slajderSL').src = slider[i].src;
        document.getElementById('slajderSL').alt =slider[i].alt;
        document.getElementById('h2_slajder').innerHTML = slider[i].h2;
        document.getElementById('p_slajder').innerHTML = slider[i].p;

}


// ==========> AUTOMATSKO MENJANJE SLAJDERA
var i;
var vreme = 4000;

function menjanjeSlikaUnazad(){
    if(i==1 || i == 2){
        i--;
    } else if(i==0){
        i = 2;
    }else{
        i = 0;
    }
    dinamickoIspisvanjeSlajdera(i);
}


function menjanjeSlikaUnapred(){
    if(i==0 || i==1){
        i++;
    }
    else{ 
        i = 0;
    }
    console.log(i);
    dinamickoIspisvanjeSlajdera(i);
}



// =========> DINAMICKO ISPISIVANJE NAJPOPULARNIJIH PROIZVODA

const popularniProizvodi = [

    {id:"triSlike_Slika1",href:"assets/stranice/mans.html",src:"assets/slike/crnozlatna.jpg",alt:"Black T-shrt",h2:"Fred Perry Shirt M12",p:"Black / Champagne / Champagne </br> $120.00"},
    {id:"triSlike_Slika2",href:"#",src:"assets/slike/bordo.jpg",alt:"Bordo Majca",h2:"Fred Perry Shirt G3600",p:"Oxblood / Dusty Rose Pink / Black </br> $98.00"},
    {id:"triSlike_Slika3",href:"assets/stranice/mans.html",src:"assets/slike/crno.jpg",alt:"Crni Duks",h2:"Traped Track Jacket",p:"Black / White </br> $140.00"}
]


function popProizvodi(){

    var popP='';

    for(let i=0;i<popularniProizvodi.length;i++){

        popP+="<div class='slikeTri'><div id='"+popularniProizvodi[i].id+"'><a href='"+popularniProizvodi[i].href+"'><img src='"+popularniProizvodi[i].src+"' alt='"+popularniProizvodi[i].alt+"'/> </div></a> <h2>"+popularniProizvodi[i].h2+"</h2> <p>"+popularniProizvodi[i].p+"</p> </div>";
    }

    $("#triSlike").append(popP);

}
    



// ===========> DINAMICKO ISPISIVANJE FOOTERA

const aplikacije = [

    {href:"https://www.facebook.com/" ,naziv:"Facebook"},
    {href:"https://www.instagram.com/", naziv:"Instagram"},
    {href:"https://www.youtube.com/",naziv:"YouTube"},
    {href:"https://www.tiktok.com/en/",naziv:"TikTok"},
    {href:"https://twitter.com/",naziv:"Twitter"},
    {href:"assets/Dokumentacija.pdf",naziv:"Dokumentacija"}
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

    {ime:'MEN',putanja:'assets/stranice/men.html'},
    {ime:'WOMEN',putanja:'#'},
    {ime:'SALE',putanja:'assets/stranice/sale.html'},
    {ime:"Account",putanja:"assets/stranice/registration.html"},
    {ime:'Author',putanja:'assets/stranice/autor.html'},
    {ime:"Sitemap",putanja:"assets/sitemap.xml"},
    {ime:"RSS",putanja:"assets/rss.xml"}

]


function dinamickoIsFooterNav(){

    var footNav ='<ul id="fnav">';

    for(let i=0;i<footernav.length;i++){


        footNav+='<li><a href="'+footernav[i].putanja+'">'+footernav[i].ime+'</a></li>'; 
    }

    footNav+='</ul>';

    $("#footerNav").append(footNav);
    
}

