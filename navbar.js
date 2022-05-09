var usename = JSON.parse(localStorage.getItem("fullname"))
var products = JSON.parse(localStorage.getItem("addToCardData")) || []



function homez(){
    window.open("index.html","_self")
}

function makeupp(){
    window.open("product1.html","_self")
}

function brushpage(){
    window.open("brush1.html","_self")
}

function cartpage(){
    window.open("cart.html","_self")
}

if(usename == null)
{
        var img1 = document.createElement("img")
        img1.setAttribute("src","https://in.sugarcosmetics.com/desc-images/person.png")
        var name1 = document.createElement("p")
        name1.innerText = " "+"Login/Register"
        document.querySelector("#log").append(img1,name1)
}
else{
    var img2 = document.createElement("img")
        img2.setAttribute("src","https://in.sugarcosmetics.com/desc-images/person.png")
        var name2 = document.createElement("p")
        name2.innerText = "Hi,"+" "+usename+" "+" "
        var dd2 = document.createElement("i")
        dd2.setAttribute("class","fa-solid fa-angle-down")
        document.querySelector("#log").append(img2,name2,dd2)

}


function cutoffer(){
    document.querySelector("#hdoffer").style.display = "none"
}



document.querySelector("#log").addEventListener("click",login)
function login(){
    if(usename==null)
    {
        var main = document.querySelector("#main")
        main.style.display = "flex"
        document.querySelector("body").style.overflow = "hidden"
    }
}



document.querySelector("#log").addEventListener("mouseenter",z1)
function z1(){
    if(usename!==null)
    {
        document.querySelector("#lg").style.display = "block"
    }
}


document.querySelector("#log").addEventListener("mouseleave",x1)
function x1(){
    if(usename!==null)
    {
        document.querySelector("#lg").style.display = "none"
    }
}


document.querySelector("#lg").addEventListener("click",logou)
function logou(){
    usename = null
    localStorage.setItem("username",JSON.stringify(usename))
    window.location.reload()
}


var pnoa = []
document.querySelector("#mobno>button").addEventListener("click",otp)
function otp(){
    pnoa = []
    var pno1 = document.querySelector("#i1").value
    pnoa.push(pno1)
    var pno2 = document.querySelector("#i2").value
    pnoa.push(pno2)
    var pno3 = document.querySelector("#i3").value
    pnoa.push(pno3)
    var pno4 = document.querySelector("#i4").value
    pnoa.push(pno4)
    var pno5 = document.querySelector("#i5").value
    pnoa.push(pno5)
    var pno6 = document.querySelector("#i6").value
    pnoa.push(pno6)
    var pno7 = document.querySelector("#i7").value
    pnoa.push(pno7)
    var pno8 = document.querySelector("#i8").value
    pnoa.push(pno8)
    var pno9 = document.querySelector("#i9").value
    pnoa.push(pno9)
    var pno10 = document.querySelector("#i10").value
    pnoa.push(pno10)
    console.log(pnoa)
    var bag = ""
    for(var i = 0;i<10;i++)
    {
        bag = bag+pnoa[i]
    }
    if(bag.length==10)
    {
        alert("OTP is : 1 2 3 4")
    }
    else{
        alert("Incorrect Phone No.")
        pnoa = []
    }
    
}

document.querySelector("#votp").addEventListener("click",votp)
function votp(){
    var otp1 = document.querySelector("#j1").value
    var otp2 = document.querySelector("#j2").value
    var otp3 = document.querySelector("#j3").value
    var otp4 = document.querySelector("#j4").value
    if(otp1=="1" && otp2=="2" && otp3=="3" && otp4=="4")
    {
        var main = document.querySelector("#main")
        main.style.display = "none"
        var mainx = document.querySelector("#mainx")
        mainx.style.display = "flex"
        document.querySelector("#verify").innerText = "Phone Number Verified"+" "+" "+"(+91)"+" "+pnoa[0]+pnoa[1]+pnoa[2]+pnoa[3]+pnoa[4]+pnoa[5]+pnoa[6]+pnoa[7]+pnoa[8]+pnoa[9]
        alert("OTP Verified")
        localStorage.setItem("phoneno",JSON.stringify(pnoa))
    }
    else{
        alert("Incorrect OTP")
    }
     
}

document.querySelector("#sac").addEventListener("click",sac)
function sac(){
    var fn = document.querySelector("#fn")
    var ln = document.querySelector("#ln")

    if(fn.value+ln.value==""){
        alert("Enter name")
    }
    else{
        var dname = fn.value+" "+ln.value
        localStorage.setItem("fullname",JSON.stringify(dname))
        var mainx = document.querySelector("#mainx")
        mainx.style.display = "none" 
        document.querySelector("#log").innerHTML=""
        var img = document.createElement("img")
        img.setAttribute("src","https://in.sugarcosmetics.com/desc-images/person.png")
        var name = document.createElement("p")
        name.innerText = "Hi,"+" "+dname+" "
        var dd = document.createElement("i")
        dd.setAttribute("class","fa-solid fa-angle-down")
        document.querySelector("#log").append(img,name,dd)
        document.querySelector("body").style.overflow = "scroll"
        window.location.reload()
    }
}


if(products.length>null)
{
    document.querySelector("#productnos>p").innerText="("+products.length+")"
}
