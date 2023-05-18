const login = document.querySelector(".logins")

const email = document.querySelector(".email")

const password = document.querySelector(".password")

const loadAllListeners = ()=>{

    login.addEventListener("click", loggedIn)
}

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


function loggedIn(){

    //if one of the inputs is empty or if the email is not valid
    if (email.value =="" || password.value ==""){

        window.alert("Please fill all the fields form")
    
    }else if(email.value.match(mailFormat)){
    
        window.open("/login.html", "_self")
    
    }else{
    
        window.alert("Please enter a valid email address")
    }
    
}

loadAllListeners()




