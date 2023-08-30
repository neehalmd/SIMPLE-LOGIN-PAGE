let username;
let password;
document.getElementById("subbtn").onclick = function (){
    username=document.getElementById("uname").value;
    password=document.getElementById("pass").value;
    if(username=="admin"&&password=="jgi@123"){
        window.alert("WELCOME BACK USER! HAVE A PRODUCTIVE SESSION")
        EventTarget=_blank
    }
    else
    window.alert("YOU SEEM TO BE A NEW USER")
}

let firstname;
let lastname;

document.getElementById("filbtn").onclick = function(){
    firstname=document.getElementById("fname").value;
    lastname=document.getElementById("lname").value;
    if(terms.checked){
    if(stream.checked){
        document.getElementById("info").innerHTML="Hello "+firstname+" "+lastname+" You registration is complete please contact CIVIL Department for further details.";

    }
    else if(stream1.checked){
        document.getElementById("info").innerHTML="Hello "+firstname+" "+lastname+" You registration is complete please contact IS Department for further details.";

    }
    else if(stream2.checked){
        document.getElementById("info").innerHTML="Hello "+firstname+" "+lastname+" You registration is complete please contact CS Department for further details.";

    }
    else if(stream3.checked){
        document.getElementById("info").innerHTML="Hello "+firstname+" "+lastname+" You registration is complete please contact MECH Department for further details.";

    }
    else{
        window.alert("please select your stream");
    }
}
else{
    window.alert("agree to the terms and coditions")
}

}

document.getElementById("quotebtn").onclick=function(){

    
            document.getElementById("quotechange").innerHTML="<quote>“Don’t let yesterday take up too much of today.” — Will Rogers</quote>"
        }
        