const slide = document.querySelector(".slide_box");



// document.addEventListener("load" , ()=>{
slide.classList.add("xoxo")
// })



let timeout;

slide.addEventListener("scroll" , (e)=>{
    clearTimeout(timeout);
    slide.classList.remove("xoxo")
    timeout =  setTimeout(() => {
        slide.classList.add("xoxo")
    }, 2000);

})