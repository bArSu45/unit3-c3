let wallet = JSON.parse(localStorage.getItem("user"));
let wallet_amount = document.querySelector("#wallet_amount");
wallet_amount.innerHTML = wallet.amount;

let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(url)
.then(function(res){
return res.json();
})
.then(function(res){
    console.log(res[0].vouchers)
    display(res[0].vouchers)
})
.catch(function(err){
    console.log(err)
})

let display = (data) =>{
data.forEach(function(ele){
let voucher_list = document.querySelector("#voucher_list")

let voucher = document.createElement("div");
voucher.setAttribute("class","voucher")

let img = document.createElement("img");
img.src = ele.image;

let name = document.createElement("h2");
voucher.setAttribute("class","name")
name.innerText = ele.name


let price = document.createElement("h4")
price.setAttribute("class","price")
price.innerText = ele.price;


let buy = document.createElement("button");
buy.setAttribute("class","buy");
buy.innerText = "BUY";
buy.addEventListener("click",function(){
    buyVoucher(ele);
})
voucher.append(img,name,price,buy);
voucher_list.append(voucher);
})
}

let buyVoucher = (ele) =>{
    let wallet = JSON.parse(localStorage.getItem("user"));
    if(wallet.amount > ele.price)
    {
        alert("Hurray! purchase successful");
    }
    else if(wallet.amount < ele.price)
    {
        alert("Sorry! insufficient balance");
    }
}


