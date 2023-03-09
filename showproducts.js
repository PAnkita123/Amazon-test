window.onload=function(){
    alert("window loaded!")
    // first we get the item form local storage to show on screen
    var amazonProducts= JSON.parse(localStorage.getItem("amazonProducts"));
    var divFromHtml=document.getElementById("screen");

    var array=[];

    for(var i=0;i<amazonProducts.length;i++){
        array+=`<div><img src="${amazonProducts[i].image}"<br/><h1>${amazonProducts[i].name}</h1><p>&#x20b9; ${amazonProducts[i].price}</p><button onclick="addToCart(${JSON.stringify(amazonProducts[i])})">Add to cart</button><br/><figcation>Free Delivery by Amazon.</figcaption></div>`
    }
    divFromHtml.innerHTML = array;


}

function addToCart(amazonProducts){
    var product=JSON.stringify(amazonProducts);
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));
    var currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser){
        var allUsers=[];
        for(var i=0;i<dataFromLS.length;i++){
            if(dataFromLS[i].email===currentUser["curent-user-email"]){
                var newObj=dataFromLS[i];
                newObj["cartProducts"]=newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)
            } else{
                allUsers.push(dataFromLS[i])
            }


        }
        localStorage.setItem("userData", JSON.stringify(allUsers));
        alert("Product added to cart!")
    }else{
        alert("login first to add product into cart!")
    }

}