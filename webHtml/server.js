$(document).ready(function(){
    $('.more-btn').click(function(){
        $(this).toggleClass('active');
        $('.mainMenu').toggleClass('active');
    })
});

$(document).ready(function(){
    $('.container > video').fadeIn(2000);
})

let observer = new IntersectionObserver((e) => {
    e.forEach((박스)=>{
        if(박스.isIntersecting){
            박스.target.style.opacity = 1;
        } 
        박스.intersectionRatio
    })
})

let div = document.querySelectorAll('div')
observer.observe(div[0])