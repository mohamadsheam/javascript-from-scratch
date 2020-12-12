// check the login
let user = prompt("Who's there? " + " Answer : ((Admin))");
if(user == "Admin"){
    let pass = prompt("Password? " + " Answer : ((TheMaster))");
    if (pass == "TheMaster"){
        alert("Welcome");
    }else{
        let msg = user == "cancel" ? "Canceled" : "Wrong Password";
        alert(msg);
    }
}else{
    let msg = user == "cancel" ? "Canceled":"I don't know you";
    alert(msg);
}