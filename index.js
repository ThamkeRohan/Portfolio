const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            //  console.log(entry);
            entry.target.classList.add("showContent");
            observer.unobserve(entry.target);
        }
        
    })
})
const hiddenContent=document.querySelectorAll(".hiddenContent")
hiddenContent.forEach((elem)=>{
    observer.observe(elem)
})
