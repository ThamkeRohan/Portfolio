const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add("show-content")
            observer.unobserve(entry.target);
        }
        
    })
})
const hiddenContent = document.querySelectorAll(".hidden-content");
hiddenContent.forEach((elem)=>{
    observer.observe(elem)
})
