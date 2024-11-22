var icon=document.querySelector("#icon");
var navig=document.querySelector("#navitem");
var isclick=false;



icon.addEventListener("click",()=>{
    navig.style.right="0px ";
    navig.style.bottom="-450px ";
    navig.style.marginTop="500px ";
    isclick=true;
   
    



})
if(isclick){
    icon.innerHTML=""
}else{
    icon.innerHTML='<i class="fa-solid fa-bars"></i>'

}