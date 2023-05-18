const signUp = document.querySelector(".sign")

const fullName = document.querySelector(".name")

const email = document.querySelector(".email")

const password = document.querySelector(".password")

const loadAllListeners = ()=>{

    signUp.addEventListener("click", signed)
}



//when user clicks sign up
function signed(){

    let data = [email.value, password.value]

    localStorage.setItem(fullName.value, JSON.stringify(data))

    data.push(email.value)

    data.push(password.value)

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //if one of the inputs is empty or if the email is not valid
    if (fullName.value == "" || email.value =="" || password.value ==""){

        window.alert("Please fill all the fields form")

    }else if(email.value.match(mailFormat)){

        window.open("/login.html", "_self")

    }else{

        window.alert("Please enter a valid email address")
    }

}

for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    console.log(`${key}: ${localStorage.getItem(key)}` )
}

loadAllListeners()

