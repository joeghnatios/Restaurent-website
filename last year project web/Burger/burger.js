const btnScrollTop = document.getElementById("scrolltop");

btnScrollTop.addEventListener("click", function () {
      window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
      });
});






let prixTotal=0;
let numbers=[];
function somm() {
            let num1 = document.getElementsByClassName("butt");
            let price=13;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
      
}
function somm1() {
      let num1 = document.getElementsByClassName("butt");
      let price=10;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm2() {
      let num1 = document.getElementsByClassName("butt");
      let price=14;
      prixTotal += price;
      numbers.push(price);
      document.getElementById("result").innerHTML = prixTotal;
}
function somm3() {
      let num1 = document.getElementsByClassName("butt");
      let price=17;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm4() {
      let num1 = document.getElementsByClassName("butt");
      let price=15;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm5() {
      let num1 = document.getElementsByClassName("butt");
      let price=14;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm6() {
      let num1 = document.getElementsByClassName("butt");
      let price=10;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm7() {
      let num1 = document.getElementsByClassName("butt");
      let price=8;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function undo(){
      if(prixTotal>0){
      prixTotal=prixTotal-numbers.pop();
      document.getElementById("result").innerHTML=prixTotal;
    }
}
function Reset(){
      prixTotal=0;
      document.getElementById("result").innerHTML=prixTotal;
}