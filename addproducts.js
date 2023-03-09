function addProducts(){
    alert("working")
    var userImage=document.getElementById("image").value;
    var userName=document.getElementById("name").value;
    var userPrice=document.getElementById("price").value;

    var amazonProducts={image:userImage,name:userName,price:userPrice}

    var amazonProduct=JSON.parse(localStorage.getItem("amazonProducts")) || [];
    console.log(amazonProduct,"amazonProduct")

    amazonProduct.push(amazonProducts);

    localStorage.setItem("amazonProducts",JSON.stringify(amazonProduct));
    
    for(var i=0; i<amazonProduct.length; i++){
        console.log(amazonProduct[i])
        document.getElementById("image").value="";
        document.getElementById("name").value="";
        document.getElementById("price").value="";

    }
    var showProducts=[];

    for(var i=0; i<amazonProduct.length;i++){
        showProducts+=`<div><img src="${amazonProduct[i].image}"/><br/><h1>${amazonProduct[i].name}</h1><p>&#x20b9; ${amazonProduct[i].price}</p></div>`
     }
    divFromHtml.innerHTML=showProducts;
   



}