const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Demo Login Successful!"
        );

        window.location.href =
        "index.html";

    });

}

console.log(
    "%cLogin Page Loaded",
    "color:#3b82f6;font-weight:bold;"
);