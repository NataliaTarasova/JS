const container=document.querySelector(".container");

const titleList=document.querySelectorAll(".link");

container.addEventListener("click", (event)=>{
  console.log(event.target);

  if (event.target.classList.includes('link'))

  titleList.forEach((link) => link.classList.add("hidden"));
  event.target.classList.remove("hidden");
  
});
