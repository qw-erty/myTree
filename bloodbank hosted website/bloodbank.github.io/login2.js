function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
 if(username=="bloodbank"&&password=="b123"){
     alert("login successfull");
     
        window.location = 'page1.html'; // your desired location
     
     return false;

 }
 else{
     alert("login unsuccessfull")
 }
}