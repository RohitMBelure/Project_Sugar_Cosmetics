
  function munna(){

    document.querySelector("#txtapnd").innerHTML=""

  var box = document.createElement("div") ;

  var text =  document.createElement("ul")
  text.innerHTML= `

  <p>Glam up your pout with our beautifully bold, incredibly long-lasting and gorgeously vivid SUGAR Matte As Hell Crayon Lipstick.
    This lipstick lives up to its title by providing the most smooth, silky soft matte finish!</p>


    <p>Blending confident colour with desirable comfort, Matte As Hell Crayon lipstick is highly-pigmented formula that glides 
    on comfortable and instantly reveals a weightless veil of high pigment. Enriched with lip-conditioning ingredients, 
    this long-wear crayon lipstick keeps your lips soft and hydrated whilst helping ward against dryness. What makes it even better?
    It comes with a high-quality sharpener that helps keep the tip of the crayon ultra-precise for an effortless swipe every single time! Read more details about the Crayon Lipstick Sharpener here!</p>

    Benefits:
  <ul>
  
  <li>Ultra-matte lip crayons that super pigmented and long-lasting</li>
  <li>Its soft texture ensures a smooth application with every swipe</li>
  <li>The 36 vivid shades deliver a silky matte finish that’ll rock any occasion or mood</li>
  <li>Cruelty-free, 100% vegetarian; Free from mineral oil, parabens and paraffin</li>
  <li>Slim bullet design allows for easy and precise application on the go</li>
  <li>Dermatologically-tested and approved; 100% safe for your skin</li>
  <li>Comes with a high-quality sharpener</li>
  <li>Available in 32 flattering shades that work perfect for Indian skin tones</li>
  </ul>
  
  <h5>Net Weight: 12gms<h5>
  <p>Maximum Retail Price: Rs 999.00 (incl. all taxes)</p>
  Country of Origin: Korea
  <br>
  Company Name: SUGAR Cosmetics LLC
  <br>
  Company Address: 8 The Green Suite A, Dover, DE 19901, USA.`

  box.append(text)
  document.querySelector("#txtapnd").append(box)

  }

  function aunna(){

    document.querySelector("#txtapnd").innerHTML=""
  
   var box = document.createElement("div") ;
  
   var text =  document.createElement("ul")
   text.innerHTML= `<ul>
   <li>Apply this lipstick in the center of your upper lip and follow the contours of your mouth with the precise tip</li>
   <li>Use the wider side of the crayon to fill in lips, all in a swipe!</li>
   <li>Enjoy a perfect pout for up to 10 hours</li>
   </ul>`
  
  box.append(text)
  document.querySelector("#txtapnd").append(box)
  
  }

  function bunna(){

    document.querySelector("#txtapnd").innerHTML=""
  
   var box = document.createElement("div") ;
  
   var text =  document.createElement("p")
   text.innerHTML= `Isododecane, Dimethicone, Diisostearyl Malate, Synthetic Wax, Distarch Phosphate, Polybutene, Dimethicone/Vinyl Dimethicone Crosspolymer, Caprylyl Methicone, Dimethylimidazolidinone
    Rice Starch, Glyceryl Caprylate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Silica, Isoceteth - 10 May Contain: CI 77491, 77492, 77499, 77891, 77019.`
  
  box.append(text)
  document.querySelector("#txtapnd").append(box)
  
  }

  function cunna(){

    document.querySelector("#txtapnd").innerHTML=""
  
   var box = document.createElement("div") ;
  
   var text =  document.createElement("p")
   text.innerHTML= `Q. How is the finish of this crayon lipstick?<br data-mce-fragment="1">A. </strong>This crayon lipstick is super matte yet comfortable on lips and gives you full coverage!<strong data-mce-fragment="1"><br><br> Q. How long does the lipstick stay? <br data-mce-fragment="1">A. </strong>Our highly pigmented creamy matte lipstick offers high-impact colour and stays good for up to 10 to 12 hours!<strong data-mce-fragment="1"><br><br> Q. Are there any nude lipstick shades available for everyday wear?<br data-mce-fragment="1">A. </strong>Absolutely! Matte As Hell Lipsticks are available in 36 stunning shades and there is a lip shade for each skin tone and occasion. Our best nude lipsticks from the collection are 20 Buffy Summers (Mid-tone Warm Nude) which suits fair to medium skin tone better, 19 Emma Woodhouse (Earthy Brown) which looks gorgeous on most Indian skin tones and 18 Rosalind (Nude Rose) and 07 Viola (Mauve Nude) shades that suit medium to dusky skin tone better! Find your best nude lipstick match<st data-mce-fragment="1"> <s style="color: #2b00ff;"><a data-mce-fragment="1" style="color: #2b00ff;" href="https://blog.sugarcosmetics.com/the-ultimate-guide-to-nude-lipsticks-for-your-skin-tone/"`
  box.append(text)
  document.querySelector("#txtapnd").append(box)
  
  }

  function dunna(){

    document.querySelector("#txtapnd").innerHTML=""
  
   var box = document.createElement("div") ;
  
   var text =  document.createElement("img")
   text.src=""
  box.append(text)
  document.querySelector("#txtapnd").append(box)
  
  }




//   var obj =  [ {
//     img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
//      name:"Smudge me not minis set black" ,
//     price:"₹ 5999.00" ,
// }
// ]

var obj = JSON.parse(localStorage.getItem("addtocart"))


var arr = JSON.parse(localStorage.getItem("addToCardData")) || []


vishwanth(obj)

function vishwanth (obj) {


  obj.forEach(function(el){

  document.querySelector("#pr1").innerHTML=""
  document.querySelector("#btnstr").innerHTML=""
  document.querySelector("#stars").innerHTML=''
  document.querySelector("#rr").innerText= el.rating+" "+el.reviews ;

  var x = document.querySelector("#pr1")

  var im = document.createElement("img")
  im.setAttribute("src",el.img)
  document.querySelector("#stars").innerHTML=`     <span class="" data-index="2" data-forhalf="★" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 215, 0); font-size: 25px;">★</span>
  <span class="" data-index="2" data-forhalf="★" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 215, 0); font-size: 25px;">★</span>
  <span class="" data-index="2" data-forhalf="★" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 215, 0); font-size: 25px;">★</span>
  <span class="" data-index="2" data-forhalf="★" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 215, 0); font-size: 25px;">★</span>
     `
   
  var btn = document.createElement("button")
  btn.setAttribute("id","bttn1")
  btn.innerText="Add to cart"  
  btn.addEventListener("click" , function(){
     addtocart(el)

  })

  document.querySelector("#btnstr").append(btn)

  document.querySelector("#pricetag").innerHTML=el.price

  document.querySelector("#pname").innerHTML=el.name
  x.append(im)

    

  })

}

function addtocart(el){
 
  arr.push(el)
  localStorage.setItem("addToCardData",JSON.stringify(arr))


}





//  var card= document.querySelector("#bttn1").addEventListener("click",praveen)


//   function praveen (){

//     localStorage.setItem("addtocard",JSON.stringify(obj))
//   }









 






  













