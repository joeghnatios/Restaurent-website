 const btnScrollTop = document.getElementById("scrolltop");

 btnScrollTop.addEventListener("click", function () {
       window.scrollTo({
             top: 0,
             left: 0,
             behavior: "smooth"
       });
 });



 area.value=localStorage.getItem('area');
 area.oninput=function(){
             localStorage.setItem('area',area.value);
 }