

$(document).ready(function(){

    ispisivanjeNavigacija1();
    ispisivanjeNavigacija2();
    ispisivanjeBurgera();


    ispisvanjeKat1();
    ispisvanjeKat2();

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



    dinamickoIsAplikacija();

    dinamickoIsFooterNav();



});



// ======>  DINAMICNKO ISPISIVANJE NAVIGACIJE LEVO
const navigacija = [
    {ime:'HOME',putanja:'../../index.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'}
];



function ispisivanjeNavigacija1(){
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
    {ime:'Account',putanja:'registration.html'},
    {ime:'Autor',putanja:'autor.html'}

]

function ispisivanjeNavigacija2(){
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
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'},
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




function toggleKataloga(){
    // Provera da li je visible drugi katalog
    if($('#katalogStvari2').is(':visible')){
        // Ako jeste sakrij ga i promeni tekst dugmeta u More
        $('#katalogStvari2').hide('slow');
        $('#sub1').attr('value','More');
        $('#mainMen').css("height",'2180');
    } else{
        // Ako nije prikazi ga i promeni tekst dugmeta u Less
        $('#katalogStvari2').show('slow');
        $('#sub1').attr('value','Less');
        $('#mainMen').css("height",'3480');
    }
}


document.getElementById("sub1").addEventListener("click",toggleKataloga);






//======> DINAMICKO ISPISVANJE KATALOGA

const katalog1 = [

    {src:"../slike/crnozlatna.jpg",alt:"Black Shirt",h2:"Fred Perry Shirt M12",p:"Black / Champagne / Champagne<br/>$120.00"},
    {src:"../slike/proizvodi/mBordo.jpeg",alt:"Oxblood Shirt",h2:"Fred Perry Shirt M3600",p:"Oxblood / Ecru / Ecru<br/><span class='precrtano'>$98.00</span><br/><span class='novacena'>$85.00</span>"},
    {src:"../slike/proizvodi/mCrnoBela.jpeg",alt:"Black Shirt",h2:"Fred Perry Shirt M3600",p:"Black / White / White<br/><span class='precrtano'>$98.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mCrnoPlava.jpeg",alt:"Black Shirt",h2:"Fred Perry Shirt M3600",p:"Black / Ecru / Deep Mint<br/>$98.00"},
    {src:"../slike/proizvodi/mPlava.jpeg",alt:"Blue Shirt",h2:"Fred Perry Shirt M3600",p:"French Navy / Ice Cream / Ice Cream<br/><span class='precrtano'>$90.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mSiva.jpeg",alt:"Gray Shirt",h2:"Fred Perry Shirt M3600",p:"Gunmetal / Coral Heat / Black<br/> $80.00"},
    {src:"../slike/proizvodi/mSvetloPlava.jpeg",alt:"Blue Shirt",h2:"Fred Perry Shirt M3600",p:"Midnight Blue / Ecru / Light Ice<br/><span class='precrtano'>$90.00</span><br/><span class='novacena'>$80.00</span>"},
    {src:"../slike/proizvodi/mZuta.jpeg",alt:"Yellow Shirt",h2:"Fred Perry Shirt M3600",p:"Ice Cream / French Navy / French Navy<br/>$80.00"}
]


const katalog1_1 =[

    {src:"../slike/crnozlatnaA.jpg",alt:"Black Shirt",h2:"Fred Perry Shirt M12",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mBordoA.jpeg",alt:"Oxblood Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mCrnoBelaA.jpeg",alt:"Black Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mCrnoPlavaA.jpeg",alt:"Black Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mPlavaA.jpeg",alt:"Blue Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mSivaA.jpeg",alt:"Gray Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mSvetloPlavaA.jpeg",alt:"Blue Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."},
    {src:"../slike/proizvodi/mZutaA.jpeg",alt:"Yellow Shirt",h2:"Fred Perry Shirt M3600",p:"The Twin Tipped Fred Perry Shirt. Made from our classic cotton pique, in a contemporary adaptation of Fred's famous streamlined fit. Available in a diverse range of colourways - each with their own unique story."}
]




function ispisvanjeKat1(){

    console.log='AAAAAA';

    var kat1="";

    for(let i=0;i<katalog1.length;i++){
        kat1+=`<div class='katalogStvar' id='mProizvod${i}' onclick='klikniKatalog(${i})'>
                <img class='pointer' src='${katalog1[i].src}' alt='${katalog1[i].alt}' />
                <h2>${katalog1[i].h2}</h2>
                <p>${katalog1[i].p}</p>
            </div>`;
    }

    $("#katalogStvari").append(kat1);
}

/* ======>>> SKLANJANJE MODALA NA KLIK <<<===== */
document.getElementById("modalKatalog").addEventListener("click",izbrisiKlasu);

function izbrisiKlasu(){

    $("#modalKatalog").removeClass("klasaZaModal");
}




function klikniKatalog(i){
    $("#modalKatalog").addClass("klasaZaModal");
    $(".stavka-kontent img").attr("src",katalog1_1[i].src);
    $(".stavka-kontent img").attr("alt",katalog1_1[i].alt);
    $(".stavka-kontent h2").html(katalog1_1[i].h2);
    $(".stavka-kontent p").html(katalog1_1[i].p);
    $("#modalKatalog").show();
}




const katalog2= [
    {src:"../slike/crno.jpg",alt:"Black Jacket",h2:"Traped Track Jacket",p:"Black<br/>$140.00"},
    {src:"../slike/proizvodi/mSvetloPlaviDuks.jpeg",alt:"Tonal Taped Track Jacket",h2:"Tonal Taped Track Jacket",p:"Light Ice / Black<br/><span class='precrtano'>$125.00</span><br/><span class='novacena'>$87.50 </span> "},
    {src:"../slike/proizvodi/mCrnoSarenaDukserica.jpeg",alt:"Contrast Panel Track Jacket",h2:"Contrast Panel Track Jacketa",p:"Black<br/><span class='precrtano'>$240.00</span><br/><span class='novacena'>$120.00</span>"},
    {src:"../slike/proizvodi/mTegetDuks.jpeg",alt:"Blue Jacket",h2:"Traped Track Jacket",p:"Carbon Blue<br/>$140.00"},
    {src:"../slike/proizvodi/mCrnaJakna.jpeg",alt:"Black Jacket",h2:"Padded Zip Through Jacket",p:"Black<br/>$335.00"},
    {src:"../slike/proizvodi/mCrnaJakna2.jpeg",alt:"Black Jacket",h2:"Padded Hooded Brentham Jacket",p:"Black / Gunmetal<br/>$240.00"},
    {src:"../slike/proizvodi/mTegetJakna.jpeg",alt:"Bluce Jacket",h2:"Harrington Jacket",p:"Navy<br/>$370.00"},
    {src:"../slike/proizvodi/mBraonJakna.jpeg",alt:"Brown Jacket",h2:"Padded Hooded Brentham Jacket",p:"Burnt Tobacco<br/>$240.00"}
]




function ispisvanjeKat2(){
    var kat2="";

    for(let i=0;i<katalog2.length;i++){
        kat2+=`<div class='katalogStvar' id='m2Proizvod${i}' onclick='klikniKatalog2(${i})'>
                <img class='pointer' src='${katalog2[i].src}' alt='${katalog2[i].alt}' />
                <h2>${katalog2[i].h2}</h2>
                <p>${katalog2[i].p}</p>
            </div>`;
    }
    $("#katalogStvari2").append(kat2);
    $('#katalogStvari2').hide();
    $('#sub1').attr('value','More');
}


const katalog2_2=[

    {src:"../slike/crnoA.jpg",alt:"Black Jacket",h2:"Traped Track Jacket",p:"A sportswear icon, our track jacket retains all its original features. Made in shiny tricot fabric, with a white enamel-coated zip and Laurel Wreath track tape at the sleeve."},
    {src:"../slike/proizvodi/mSvetloPlaviDuksA.jpeg",alt:"Blue Jacket",h2:"Tonal Taped Track Jacket",p:"Our signature track jacket in new season colours."},
    {src:"../slike/proizvodi/mCrnoSarenaDuksericaA.jpeg",alt:"Black Jacket",h2:"Contrast Panel Track Jacketa",p:"We put a twist on a sportswear icon with the latest iteration of our track jacket, featuring cut and sew panels to the front and back body."},
    {src:"../slike/proizvodi/mTeketDuksA.jpeg",alt:"Blue Jacket",h2:"Traped Track Jacket",p:"A sportswear icon, our track jacket retains all its original features. Made in shiny tricot fabric, with a white enamel-coated zip and Laurel Wreath track tape at the sleeve."},
    {src:"../slike/proizvodi/mCrnaJaknaA.jpeg",alt:"Black Jacket",h2:"Padded Zip Through Jacket",p:"Our Brentham zip through jacket in twill, with body and sleeve padding to keep you warm and dry."},
    {src:"../slike/proizvodi/mCrnaJakna2A.jpeg",alt:"Black Jacket",h2:"Padded Hooded Brentham Jacket",p:"A hooded and fully-lined nylon twill sports jacket with our signature twin tipping inside the neck."},
    {src:"../slike/proizvodi/mTegetJaknaA.jpeg",alt:"Blue Jacket",h2:"Harrington Jacket",p:"Our Harrington jacket, made in England like it always has been. Constructed from a tough cotton/poly blend, with all its signature design details: flap pockets, buttoned neck and a tartan lining."},
    {src:"../slike/proizvodi/mBraonJaknaA.jpeg",alt:"Brown Jacket",h2:"Padded Hooded Brentham Jakcet",p:"A hooded and fully-lined nylon twill sports jacket with our signature twin tipping inside the neck."}
    
]


function klikniKatalog2(i){
    $("#modalKatalog").addClass("klasaZaModal");
    $(".stavka-kontent img").attr("src",katalog2_2[i].src);
    $(".stavka-kontent img").attr("alt",katalog2_2[i].alt);
    $(".stavka-kontent h2").html(katalog2_2[i].h2);
    $(".stavka-kontent p").html(katalog2_2[i].p);
    $("#modalKatalog").show();
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
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'},
    {ime:'Account',putanja:'registration.html'},
    {ime:'Author',putanja:'autor.html'},
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

