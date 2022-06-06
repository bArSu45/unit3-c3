


function signupFunc(){
    event.preventDefault();
    let data_obj =
    {
         name  : document.querySelector("#name").value,
         email : document.querySelector("#email").value,
         address : document.querySelector("#address").value,
         amount : document.querySelector("#amount").value
    };
    localStorage.setItem("user",JSON.stringify(data_obj))

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#amount").value = "";
   
   
}