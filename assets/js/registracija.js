
$(document).ready(function(){

    ispisivanjeNavigacija1();
    ispisivanjeNavigacija2();
    ispisivanjeBurgera();

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



    $("").blur(function(){


    })

    //======>> ON BLUR za POLJA

    $("#ddl1").blur(function(){

        proveraDDListe();
       
    });


    $("#ime").blur(function(){
    
        proveraIme();

    });

   
    $("#prezime").blur(function(){

        proveraPrezime();
    })

    $("#email1").blur(function(){

        proveraEmail();

    })


    $("#datum").blur(function(){

        proveraDatum();

    })


    $("#pass1").blur(function(){


        proveraSifre1();

    })


    $("#pass2").blur(function(){


        proveraSifra2();
    })

  



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
    {ime:'Account',putanja:'#'},
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
    {ime:'MEN',putanja:'men.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'},
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



// =========> FORMA <=======

//prover za password polja (type=text/type=password)
var lale1= document.getElementById("pass1").value;

console.log(lale1);

if(document.getElementById("pass1").value=="Password*"){

    document.getElementById("pass1").setAttribute('type','text');

}

if(document.getElementById("pass2").value=="Confirm Password*"){

    document.getElementById("pass2").setAttribute('type','text');

}

function klikPoljePass1(){


    if(document.getElementById("pass1").value=="Password*"){

        document.getElementById("pass1").setAttribute('value','');

        document.getElementById("pass1").setAttribute('type','password');

    
    }
}

document.getElementById("pass1").addEventListener("click",klikPoljePass1)

function klikPoljePass2(){


    if(document.getElementById("pass2").value=="Confirm Password*"){

        document.getElementById("pass2").setAttribute('value','');

        document.getElementById("pass2").setAttribute('type','password');

    
    }
}

document.getElementById("pass2").addEventListener("click",klikPoljePass2)




// ==========> Brisanje difoltnih vrednosti <========

function klikPoljeIme(){

    document.getElementById("ime").setAttribute("value","");

}

document.getElementById("ime").addEventListener("click", klikPoljeIme);


function klikPoljePrezime(){

    document.getElementById("prezime").setAttribute("value","");

}

document.getElementById("prezime").addEventListener("click", klikPoljePrezime);


function klikPoljeEmail(){

    document.getElementById("email1").setAttribute("value","");

}

document.getElementById("email1").addEventListener("click", klikPoljeEmail);


function klikPoljeDatum(){

    document.getElementById("datum").setAttribute("value","");

}

document.getElementById("datum").addEventListener("click", klikPoljeDatum);



// ========> REGULARNI IZRAZI  <========

function proveraDDListe(){

    var listaE=ddl1.options;

    console.log(listaE.length);

    if(listaE.selectedIndex==0){

        document.getElementById("titulaSpan").classList.remove("formaBojaTrue");
        document.getElementById("ddl1").classList.remove("formaBorduraTrue");
        document.getElementById("titulaSpan").innerHTML='Choose title';
        document.getElementById("titulaSpan").classList.add("formaBojaFalse");
        document.getElementById("ddl1").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;

    }else{

        document.getElementById("titulaSpan").classList.remove("formaBojaFalse");
        document.getElementById("ddl1").classList.remove("formaBorduraFalse");
        document.getElementById("titulaSpan").classList.add("formaBojaTrue");
        document.getElementById("ddl1").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;

    }
}


function proveraIme(){

    var imeE=/^[A-Z][a-z]{3,15}$/;

    var imeA = document.getElementById("ime").value;

    if(imeE.test(imeA)){

        document.getElementById("imeSpan").classList.remove("formaBojaFalse");
        document.getElementById("ime").classList.remove("formaBorduraFalse");

        document.getElementById("imeSpan").classList.add("formaBojaTrue");
        document.getElementById("ime").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;
    }else{
        if(imeA == ''){
            document.getElementById("imeSpan").innerHTML="First Name is required";
        } else{
            document.getElementById("imeSpan").innerHTML="The first letter must be capitalized";
        }
        document.getElementById("imeSpan").classList.remove("formaBojaTrue");
        document.getElementById("ime").classList.remove("formaBorduraTrue");
        document.getElementById("imeSpan").classList.add("formaBojaFalse");
        document.getElementById("ime").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;

    }

}

function proveraPrezime(){

    var prezimeE=/^[A-Z][a-z]{3,15}$/;

    var prezimeA=document.getElementById("prezime").value;
    
    if(prezimeE.test(prezimeA)){
        document.getElementById("prezimeSpan").classList.remove("formaBojaFalse");
        document.getElementById("prezime").classList.remove("formaBorduraFalse");
        document.getElementById("prezimeSpan").classList.add("formaBojaTrue");
        document.getElementById("prezime").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;

    }else{
        if(prezimeA == ''){
            document.getElementById("prezimeSpan").innerHTML="Last Name is required";
        } else{
            document.getElementById("prezimeSpan").innerHTML="The first letter must be capitalized";
        }
        document.getElementById("prezimeSpan").classList.remove("formaBojaTrue");
        document.getElementById("prezime").classList.remove("formaBorduraTrue");
        document.getElementById("prezimeSpan").classList.add("formaBojaFalse");
        document.getElementById("prezime").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;

    }
}

function proveraEmail(){

    
    var emailE=/^[a-z][\w\d]+@(gmail|ict.edu)\.(com|rs)$/;

     var emailA=document.getElementById("email1").value;

    
     if(emailE.test(emailA)){

        document.getElementById("emailSpan").classList.remove("formaBojaFalse");
        document.getElementById("email1").classList.remove("formaBorduraFalse");
        document.getElementById("emailSpan").classList.add("formaBojaTrue");
        document.getElementById("email1").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;

    }else{
        if(emailA == ''){

            document.getElementById("emailSpan").innerHTML="Email is required";

        } else{

            document.getElementById("emailSpan").innerHTML="Please enter a valid email address (Ex: fredPerry123@gmail.com).";
        }

        document.getElementById("emailSpan").classList.remove("formaBojaTrue");
        document.getElementById("email1").classList.remove("formaBorduraTrue");
        document.getElementById("emailSpan").classList.add("formaBojaFalse");
        document.getElementById("email1").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;

    }
}


function proveraDatum(){

    var datumE=/^[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]$/;

    var datumA=document.getElementById("datum").value;

    if(datumE.test(datumA)){

        document.getElementById("datumSpan").classList.remove("formaBojaFalse");
        document.getElementById("datum").classList.remove("formaBorduraFalse");
        document.getElementById("datumSpan").classList.add("formaBojaTrue");
        document.getElementById("datum").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;

    }else{

        
        document.getElementById("datumSpan").classList.remove("formaBojaTrue");
        document.getElementById("datum").classList.remove("formaBorduraTrue");
        document.getElementById("datumSpan").innerHTML='Please enter a valid date(Exemple: 06.03.2000)';
        document.getElementById("datumSpan").classList.add("formaBojaFalse");
        document.getElementById("datum").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;
    }
    
}


function proveraSifre1(){

    var passA1=document.getElementById("pass1").value;

    var passE_=/_(?=)/;

    var passETacka=/\.(?=)/;

    var passEVelikoSlovo=/[A-Z](?=)/;

    var passEBroj=/[0-9](?=)/;

    if(passE_.test(passA1) && passETacka.test(passA1) && passEVelikoSlovo.test(passA1) && passEBroj.test(passA1)){

        document.getElementById("password1Span").classList.remove("formaBojaFalse");
        document.getElementById("pass1").classList.remove("formaBorduraFalse");
        document.getElementById("password1Span").classList.add("formaBojaTrue");
        document.getElementById("pass1").classList.add("formaBorduraTrue");
        console.log("pw1");
        return true;

    } else {
        if(passA1 == ''){
            document.getElementById("password1Span").innerHTML="Password is required";
        } else{
            document.getElementById("password1Span").innerHTML='Password must contain a capital letter,number, "_" and "."';
        }

        document.getElementById("password1Span").classList.remove("formaBojaTrue");
        document.getElementById("pass1").classList.remove("formaBorduraTrue");
        document.getElementById("password1Span").classList.add("formaBojaFalse");
        document.getElementById("pass1").classList.add("formaBorduraFalse");
        console.log("pw2");
        return false;
    }


}


function proveraSifra2(){

    var passA1=document.getElementById("pass1").value;

    var passA2=document.getElementById("pass2").value;

    if(passA2==passA1){
        document.getElementById("password2Span").classList.remove("formaBojaFalse");
        document.getElementById("pass2").classList.remove("formaBorduraFalse");
        document.getElementById("password2Span").classList.add("formaBojaTrue");
        document.getElementById("pass2").classList.add("formaBorduraTrue");
        console.log("aaaaa");
        return true;
    }else{
        document.getElementById("password2Span").classList.remove("formaBojaTrue");
        document.getElementById("pass2").classList.remove("formaBorduraTrue");
        document.getElementById("password2Span").innerHTML='The passwords do not match';
        document.getElementById("password2Span").classList.add("formaBojaFalse");
        document.getElementById("pass2").classList.add("formaBorduraFalse");
        console.log("bbbb");
        return false;
    }
}

function proveraForme(){

    let x = proveraDDListe();

    
    let y = proveraIme();


    let z= proveraPrezime();
    
    
    let d=proveraEmail();


    let e=proveraDatum();

    let j=proveraSifre1();

    
    let i=proveraSifra2();

    //======>> FUNKCIJA ON SUBMIT  <<======

    if(x && y && z && d && e && j && i){
        document.getElementById("sub1Span").innerHTML="You have successfully created an account";
        document.getElementById("sub1Span").classList.add("formaBojaTrue");
        form1.reset();

        setTimeout(function(){
            document.getElementById("sub1Span").innerHTML="";
        }, 5000);
        return true;
    }else{
        
        setTimeout(function(){
            document.getElementById("sub1Span").innerHTML="";
        }, 5000);
        return false;
    }

}


document.getElementById("sub1").addEventListener("click", proveraForme);









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
    {ime:'MEN',putanja:'men.html'},
    {ime:'WOMEN',putanja:'../../index.html'},
    {ime:'SALE',putanja:'sale.html'},
    {ime:"Author",putanja:"autor.html"},
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


