function val(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let subject =document.getElementById("subject").value;
    let textarea =document.getElementById("textarea").value;
    let error_msg =document.getElementById("error_msg");
    var text;
    
    error_msg.style.padding="10px";
    if(name.length < 5){
        text = "Enter a valid Name";
        error_msg.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 |  email.length < 7){
        text = "Enter a valid email";
        error_msg.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Enter a valid Phone No";
        error_msg.innerHTML = text;
        return false;
    }

    if(subject.length < 10){
        text = "Enter a valid Subject";
        error_msg.innerHTML = text;
        return false;
    }

    if(textarea.length < 100){
        text = "Enter More Than 100 Characters";
        error_msg.innerHTML = text;
        return false;
    }
    alert("Submitted Successfully!")
    return true;
}