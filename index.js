const btnplustag = document.getElementsByClassName("plus")
for (var i=0;i<btnplustag.length;i++)
btnplustag[i].addEventListener("click",increment)
function increment(event){
var    btnplus = event.target;
var    divelt =btnplus.parentElement;
var    quantitytag = divelt.querySelector("p") ;
var    quantityValue=Number(quantitytag.innerHTML);
    quantityValue++
    quantitytag.innerHTML=quantityValue
    var trElt= divelt.parentElement.parentElement;
    var unitepricetag = trElt.querySelector(".uniteprice") ;
    var unitepriceValue = Number(unitepricetag.innerHTML);
    var pricetag = trElt.querySelector(".price") ;
    var priceValue = Number(pricetag.innerHTML);
    // console.log(pricetag)
    priceValue=unitepriceValue*quantityValue;
    pricetag.innerHTML=priceValue
// console.log(pricetag)
   var totalTag=document.querySelector(".total0");
//    console.log(totalTag)
var totalValue=Number(totalTag.innerHTML)
totalValue+=priceValue
totalTag.innerHTML=totalValue

//for (var m=0;m<price.length;m++)
    // total+=pricetag.innerHTML[m]
     //totaltag.innerHTML=total
     //console.log(totaltag);



   // { var nbr1, nbr2, nbr3 , nbr4 ,nbr5 ;
      //       nbr1 = Number(document.getElementById("nbr1").value);
       //      nbr2 = Number(document.getElementById("nbr2").value);
         //    nbr2 = Number(document.getElementById("nbr3").value);
           //  nbr2 = Number(document.getElementById("nbr4").value);
            // nbr2 = Number(document.getElementById("nbr5").value);
            // total = nbr1 + nbr2+nbr3+nbr4+nbr5
           
           
   
   
}
// const btnmointag = document.getElementsByClassName("moin")
// for (var j=0;j<btnmointag.length;j++)

// btnmointag[j].addEventListener("click",increment1)
// function increment1(event){
// var    btnmoin = event.target;
// var    divelt =btnmoin.parentElement;
// var    quantitytag = divelt.querySelector("p") ;
// var    quantityValue1=Number(quantitytag.innerHTML);
//   if (quantityValue1>0){
// quantityValue1--}
//     quantitytag.innerHTML=quantityValue1
//     var trElt= divelt.parentElement.parentElement;
//     var unitepricetag = trElt.querySelector(".uniteprice") ;
//     var unitepriceValue = Number(unitepricetag.innerHTML);
//     var pricetag = trElt.querySelector(".price") ;
//     var priceValue = Number(pricetag.innerHTML);
//     priceValue=unitepriceValue*quantityValue1;
//     pricetag.innerHTML=priceValue
//    //console.log(pricetag.innerHTML)
//    var tableelt=trElt.parentElement;
//    var totaltag=tableelt.querySelector(".total0");
//   // console.log(totaltag)
//    var total= Number(totaltag.innerHTML);
//    //console.log(total);
//  //for (var k=0;k<pricetag.length;k++)
//    total+=priceValue
//    totaltag.innerHTML=total
//    //console.log(totaltag);
   
// }
//const totaltag=document.querySelector(".total0");
   //console.log(totaltag)
  // var total= Number(totaltag.innerHTML);
   //console.log(total);
   //totaltag.innerHTML=total;

//var total1=  pricetag.innerHTML
//console.log(total1)

   






//const totaltag=document.querySelector(".total0");
//console.log(totaltag)
//var total= Number(totaltag.innerHTML);
//console.log(total);
//totaltag.innerHTML=total;

//console.log(priceValue);
  
  // for (var k=0;k<pricetag.length;k++){
        
    //total+=pricetag.innerHTML[k];
      //  totaltag.innerHTML=total;
     //  console.log(totaltag.innerHTML)
   // }
//console.log(tableElt)




