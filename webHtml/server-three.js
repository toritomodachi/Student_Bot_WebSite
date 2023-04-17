$(document).ready(function(){
    $('.more-btn').click(function(){
        $(this).toggleClass('active');
        $('.mainMenu').toggleClass('active');
    })
});
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 40) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// const options = {
//     root: null, // viewport
//     rootMargin: "0px",
//     threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
//   }
  
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       console.log(entry.isIntersecting);
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       } else {
//         entry.target.classList.remove("active");
//       }
//     });
//   }, options);
  
//   const titleList = document.querySelectorAll('h2');
  
//   // 반복문을 돌려 모든 DOM에 적용
//   titleList.forEach(el => observer.observe(el));