var a = document.querySelector("#menu");
var b = document.querySelector("#full");
 var flag = 0 ;
  a.addEventListener("click",function(){
  if(flag == 0){
      b.style.top =  0;
      a.innerHTML =`<i class="ri-close-line"></i>`
      a.style.color =  "black";
        flag = 1;
  }
  else{
      b.style.top =  "-100%";
      a.innerHTML =`<i class="ri-menu-3-line"></i>`
      a.style.color =  "white"
        flag = 0;
  }
  })