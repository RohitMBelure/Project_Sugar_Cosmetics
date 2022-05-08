
var addToCardArr = JSON.parse(localStorage.getItem("addToCardData")) || []


function bestSellerCardOne(){
    const productImage = document.querySelector('#card1_row1 img').getAttribute("src");
    const productName = document.querySelector('#card1_row1 p').textContent;
    const productCurrency = document.querySelector('#card1_row1 span').textContent;
    const productPrice = document.querySelector('#card1_row1 span+span').textContent;
    console.log(productImage, productName, productCurrency, productPrice)

    let addToCardObject = {
        img: productImage
        ,name: productName,
        ProductCurrency: productCurrency,
        price: productPrice,
    }
    addToCardArr.push(addToCardObject);
    localStorage.setItem("addToCardData", JSON.stringify(addToCardArr))
}

function superSaverCart1(){
    const productImage = document.querySelector('#card1_row2 img').getAttribute("src");
    const productName = document.querySelector('#card1_row2 p').textContent;
    const productCurrency = document.querySelector('#card1_row2 span+span+span').textContent;
    const productPrice = document.querySelector('#card1_row2 span+span+span+span').textContent;
    console.log(productImage, productName, productCurrency, productPrice)

    let addToCardObject = {
        img: productImage
        ,name: productName,
        ProductCurrency: productCurrency,
        price: productPrice,
    }
    addToCardArr.push(addToCardObject);
    localStorage.setItem("addToCardData", JSON.stringify(addToCardArr))
}

function superSaverCart2(){
    const productImage = document.querySelector('#card2_row2 img').getAttribute("src");
    const productName = document.querySelector('#card2_row2 p').textContent;
    const productCurrency = document.querySelector('#card2_row2 span+span+span').textContent;
    const productPrice = document.querySelector('#card2_row2 span+span+span+span').textContent;
    console.log(productImage, productName, productCurrency, productPrice)

    let addToCardObject = {
        img: productImage
        ,name: productName,
        ProductCurrency: productCurrency,
        price: productPrice,
    }
    addToCardArr.push(addToCardObject);
    localStorage.setItem("addToCardData", JSON.stringify(addToCardArr))
}

function superSaverCart3(){
    const productImage = document.querySelector('#card1_row3 img').getAttribute("src");
    const productName = document.querySelector('#card1_row3 p').textContent;
    const productCurrency = document.querySelector('#card1_row3 span+span+span').textContent;
    const productPrice = document.querySelector('#card1_row3 span+span+span+span').textContent;
    console.log(productImage, productName, productCurrency, productPrice)

    let addToCardObject = {
        img: productImage
        ,name: productName,
        ProductCurrency: productCurrency,
        price: productPrice,
    }
    addToCardArr.push(addToCardObject);
    localStorage.setItem("addToCardData", JSON.stringify(addToCardArr))
}