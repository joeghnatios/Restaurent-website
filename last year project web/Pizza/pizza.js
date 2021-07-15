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
            let price=19;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
      
}
function somm1() {
      let num1 = document.getElementsByClassName("butt");
      let price=16;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm6() {
      let num1 = document.getElementsByClassName("butt");
      let price=18;
      prixTotal += price;
      document.getElementById("result").innerHTML = prixTotal;
      numbers.push(price);
}
function somm7() {
      let num1 = document.getElementsByClassName("butt");
      let price=20;
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
function submit(){
      if (prixTotal==0){
            alert("Your order must to be greater than 0$");
      }
}