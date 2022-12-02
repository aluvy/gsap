window.addEventListener("load", ()=>{
    const elem = document.querySelectorAll("nav ul li");
    elem.forEach((item)=>{
        item.addEventListener("click", ()=>{
            elem.forEach((x)=>{ x.classList.remove("active") })
            item.classList.add("active");
        })
    })
})