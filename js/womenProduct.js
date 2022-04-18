//womenProduct js 
var span=document.getElementsByClassName('spam');
var div=document.getElementsByClassName('cdiv');
let l=0;
span[1].onclick=()=>{
    l++;
    for(var i of div){
    if(l==0){i.style.left="0";}
    if(l==1){i.style.left="-740px";}
    if(l==2){i.style.left="-1480px";}
    if(l==3){i.style.left="-2220px";}
    if(l==4){i.style.left="-2960px";}
    if(l>4){l=4;}
    if(l>=12){l=0};
 }
}
span[0].onclick=()=>{
l--;

for(var i of div){
   
if(l==0){i.style.left="0";}
if(l==1){i.style.left="-740px";}
if(l==2){i.style.left="-1480px";}
if(l==3){i.style.left="-2220px";}
if(l==4){i.style.left="-2960px";}
if(l>4){l=4;}
if(l>=12){l=0};
}
}


// footer wala js
document.querySelector('#top').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// document.querySelector()


// document.querySelector("#totalCartProducts").addEventListener("load","load");


// function load(){
//     //cart number of product
// if(localStorage.getItem('totalCartProducts')===null){
//     totalCartProducts=0;
// }
// else{
//     totalCartProducts=localStorage.getItem('totalCartProducts');
// }
// //totalcart price
// if(localStorage.getItem('totalCartPrice')===null){
//     totalCartPrice=0;
// }
// else{
//     totalCartPrice=localStorage.getItem('totalCartPrice')
// }

// var tlcart= document.querySelector('#totalCartProducts');
// var tlcartPrice=document.querySelector("#totalCartPrice");
// tlcart.innerText=totalCartProducts;
// tlcartPrice.innerText=totalCartPrice;


// }


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    if(localStorage.getItem('totalCartProducts')===null){
        totalCartProducts=0;
    }
    else{
        totalCartProducts=localStorage.getItem('totalCartProducts');
    }
    //totalcart price
    if(localStorage.getItem('totalCartPrice')===null){
        totalCartPrice=0;
    }
    else{
        totalCartPrice=localStorage.getItem('totalCartPrice')
    }
    console.log(totalCartPrice)
    
    var tlcart= document.querySelector('#totalCartProducts');
    var tlcartPrice=document.querySelector("#totalCartPrice");
    tlcart.innerText=totalCartProducts;
    tlcartPrice.innerText="$"+totalCartPrice;


  });