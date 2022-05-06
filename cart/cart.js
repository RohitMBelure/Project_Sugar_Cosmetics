
window.addEventListener('load', execute)

var display = document.querySelector('.added_items')
var bill_amt = document.getElementById('bill_amt')
var total_amt = document.getElementById('total_amt')
var cart_active = document.querySelector('.cart_active')

function execute(e){
    e.preventDefault()
    getPurchaseData()
}

var checkout = document.getElementById('checkout')
var modalBg = document.querySelector(".modal-bg");
var modalBg2 = document.querySelector(".modal-bg2");
var modalClose = document.querySelector(".modal-close");

// Delivery date
var date = document.getElementById('deliveryDate')
var x = Math.floor((Math.random() * 10) + 4);
var targetDate = new Date()
targetDate.setDate(targetDate.getDate() + x)
date.textContent = targetDate.toDateString()

// pay button 
var pay = document.getElementById('modal-btn')
pay.addEventListener('click', ()=>{
    modalBg2.classList.add("bg-active");
    setTimeout(showPage, 2000)
})
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("thank").style.display = "block";
    localStorage.clear()
}

// close button redirect to home page
var goTohome = document.getElementById('close')
goTohome.addEventListener('click', ()=>{
    window.location =  "index.html" 
})
// Modal box
checkout.addEventListener('click', ()=>{
    var userData = JSON.parse(localStorage.getItem('userStatus'))
    if(tempc == undefined){
        alert("You dont have any product to buy")
    }
    else if(userData == null){
        alert("Please login to do checkout")
        location.href = "login.html"

    } else {

        modalBg.classList.add("bg-active");
    }
})

modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });

  // getting data from local storage
  var wishlist_active = document.querySelector('.wishlist_active')
  var added = localStorage.getItem("cart-products")
  var addedW = localStorage.getItem("add-wishlist")
  var added_prod = JSON.parse(added)
  var addedW_prod = JSON.parse(addedW)  
function getPurchaseData(){
    if(added_prod !== null && addedW_prod == null){
        document.querySelector('.empty-cart').style.display = 'none'
        cart_active.style.display = "block"
        cart_active.textContent = added_prod.length
        showPurchaseData(added_prod)
    } else if(addedW_prod !== null && addedW_prod !== null){
        document.querySelector('.empty-cart').style.display = 'none'
        cart_active.style.display = "block"
        cart_active.textContent = added_prod.length
        wishlist_active.style.display = "block"
        wishlist_active.textContent = addedW_prod.length
        showPurchaseData(added_prod)
    }
    else if(added_prod == null && addedW_prod !== null){
        document.querySelector('.empty-cart').style.display = 'none'
        wishlist_active.style.display = "block"
        wishlist_active.textContent = addedW_prod.length
    } else {
        document.querySelector('.empty-cart').style.display = 'block'
    }
    addprice(added_prod)
}

// displaying data get from local storage, displaying in table form
function showPurchaseData(data){
    // console.log(data)
    display.innerHTML = ""
    var table = document.createElement('table')
    var thead = document.createElement('thead')
    var tr1 = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    th2.textContent = 'PRODUCT'
    var th3 = document.createElement('th')
    th3.textContent = 'PRICE'
    var th4 = document.createElement('th')
    th4.textContent = 'QUANTITY'
    var th5 = document.createElement('th')
    th5.textContent= 'TOTAL'
    tr1.append(th1, th2, th3, th4, th5)
    var tr2 = document.createElement('tr')
    var td6 = document.createElement('td')
    td6.setAttribute('colspan', '6')
    var div = document.createElement('div')
    div.setAttribute('class', 'line2')
    td6.append(div)
    tr2.append(td6)
    thead.append(tr1, tr2)
    table.append(thead)

    var tbody = document.createElement('tbody')

        // adding clear cart button attached to table
    var clearCart = document.createElement('button')
    clearCart.textContent = 'CLEAR SHOPPING CART'
    clearCart.setAttribute('class', 'clear')
    clearCart.setAttribute('onclick', 'remove()')

    // added update cart button, which update cart total when clicked
    var updateCart = document.createElement('button')
    updateCart.textContent = 'UPDATE CART'
    updateCart.setAttribute('class', 'clear')
    updateCart.setAttribute('onclick', 'updateTotal()')

    var html = ""
    for(i in data){
        html += ` <tr>
        <td>
        <img src="${data[i].img}" alt="image">
        </td>
        <td>${data[i].title}</td>
        <td>Rs. ${data[i].price}</td>
        <td>
        <div class="quantity">
                <button class="minus" onclick="minus(${data[i].id})">-</button>
                <input type="text" data-id=input${data[i].id} class="quan" id="${data[i].id}" price="${data[i].price}" value=1 onchange="multiply(this)">
                <button class="plus" onclick="plus(${data[i].id})">+</button>
                </div>
        </td>
        <td >
        <div class="bold" ><span>Rs.  </span> <h3 data-id=total${data[i].id}>${data[i].price}</h3></div>
        </td>
        <td>
        <button class="devare" onclick=devar(${data[i].id})>X</button>
        </td>
    </tr>
    <tr>
        <td colspan="6"><div class="line2"></div></td>
    </tr>`
    }
    tbody.innerHTML = html
    table.append(tbody)
   display.append(table, clearCart, updateCart)

}
// Handling no of quantity
function minus(pid){
    var added = localStorage.getItem("cart-products")
    var data = JSON.parse(added)
    for(i in data){
        if (data[i].id === pid){
            var total = document.querySelector(`[data-id=total${data[i].id}]`)
            total.textContent = Number(total.textContent)  - Number(data[i].price)
            if(total.textContent < 1){
                total.textContent = 0
            }

            var input = document.querySelector(`[data-id=input${data[i].id}]`)
            var val = input.value
            input.value = Number(val) - 1
            if(val < 1){
                input.value = 0
            }
        }
    }
    updateTotal()
    cartTotal()
}

function plus(pid){
    var added = localStorage.getItem("cart-products")
    var data = JSON.parse(added)
    for(i in data){
        if (data[i].id === pid){
            var total = document.querySelector(`[data-id=total${data[i].id}]`)
            total.textContent = Number(total.textContent) + Number(data[i].price)

            var input = document.querySelector(`[data-id=input${data[i].id}]`)
            var val = input.value
            input.value = Number(val) + 1
        }
    }
    updateTotal()
    cartTotal()
}
var offer = document.querySelector('.offer')
var freeShip = document.querySelector('.free_ship')

// on changing quantit this should change price in total cart.
function cartTotal(){
    var added = localStorage.getItem("cart-products")
    var data = JSON.parse(added)
    var tot = 0
    for(i in data){
        var total = document.querySelector(`[data-id=total${data[i].id}]`).textContent
        tot += Number(total)        
    }
    bill_amt.textContent = tot.toFixed(2) 
    total_amt.textContent = (Number(tot) + (Number(tot) * 0.18)).toFixed(2)
    if(bill_amt.textContent > 1999){
        offer.style.display = "none"
        freeShip.style.display = "block"
    } else if (bill_amt.textContent < 1999){
        offer.style.display = "block"
        freeShip.style.display = "none"
    }
}

// on page reload this should show total price of available products
function addprice(data){
    var total = 0;
    var bill = 0;
    for(i in data){
        var total_prod_price = document.querySelector(`[data-id=total${data[i].id}]`).textContent
        bill += Number(total_prod_price) 
        total = Number(bill) + (Number(bill) * 0.18)
    }
    bill_amt.textContent =bill.toFixed(2)
    total_amt.textContent = total.toFixed(2)
    if(bill_amt.textContent > 1999){
        offer.style.display = "none"
        freeShip.style.display = "block"
    } else if (bill_amt.textContent < 1999){ 
        offer.style.display = "block"
        freeShip.style.display = "none"
    }
}  
var tempc = JSON.parse(localStorage.getItem('cart-products'))
localStorage.setItem('tempc', JSON.stringify(tempc))


// devare particular from table and local storage
function devar(did){
    var added = localStorage.getItem("tempc")
    var data = JSON.parse(added)
    var cart_remained = data.filter(el => {
        return (el.id !== did)
    })

    localStorage.setItem('tempc', JSON.stringify(cart_remained))

    var final = JSON.parse(localStorage.getItem('tempc'))

    if(JSON.stringify(final) !== JSON.stringify([])){
        cart_active.textContent = final.length
        showPurchaseData(final)
    } else {
        remove()
    }

}

// clear all data from local storage as well as page
function remove (){
    document.querySelector('.empty-cart').style.display = 'block'
    display.style.display = 'none'
    localStorage.removeItem('cart-products')
    localStorage.removeItem('tempc')
    cart_active.style.display = "none"
    addprice()

}

// update total price of cart if cart gets updated
function updateTotal(){
    var added = localStorage.getItem("tempc")
    var data = JSON.parse(added)
    addprice(data)
}
/* ---------------------------------------------Cart Code ends here----------------------------------------------- */

// change of payment mode
function SetSelectedValue() {
    var e = document.getElementById("cust");
    var pay_mode_show = document.getElementById('payment_mode_show')
    var name = e.options[e.selectedIndex].value;
    // console.log(name)
    pay_mode_show.textContent = "PAYMENT MODE: "+ name
    name = "";
}

var address = document.getElementById('address')
var phone = document.getElementById('phone')
var userData = JSON.parse(localStorage.getItem('userStatus'))
address.textContent = userData[0].address
phone.textContent = userData[0].number