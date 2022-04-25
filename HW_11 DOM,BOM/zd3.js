const container=document.querySelector(".container");

const titleList=document.querySelectorAll("dd");

container.addEventListener("click", (event)=>{
 
  titleList.forEach((titleList) => titleList.classList.add("hidden"));
  event.target.classList.remove("hidden");
 
  }
);

