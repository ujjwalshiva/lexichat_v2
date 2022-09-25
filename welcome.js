function details(name, email, photourl) {
    console.log(name);
    console.log(email);
    console.log(photourl);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("photourl",photourl);
    window.location.href = "chatter-main/chatter-main/index.html";
};