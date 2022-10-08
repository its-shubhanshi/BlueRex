$(function(){
     let vh=$(window).height();
$(window).scroll(function(){
    var top=$(this).scrollTop();
    var left=$(this).scrollLeft();
    //console.log(top,left);

    if(top>=500){
        $(".top").fadeIn()
    }
    else{
        $(".top").fadeOut()
    }

    if(top>=$("#contact").offset().top-50){
        $(".internal a").removeClass("active");
        $(".internal li:eq(6) a").addClass("active");
    }
    else if(top>=$("#review").offset().top-50){
        $(".internal a").removeClass("active");
        $(".internal li:eq(5) a").addClass("active");
    }
    else if(top>=$("#product").offset().top-50){
        $(".internal a").removeClass("active");
        $(".internal li:eq(4) a").addClass("active");
    }
    else if(top>=$("#faq").offset().top-50){
        $(".internal a").removeClass("active");
        $(".internal li:eq(3) a").addClass("active");
    }
    else if(top>=$("#features").offset().top-50){
     $(".internal a").removeClass("active");
     $(".internal li:eq(2) a").addClass("active");
 }
 else if(top>=$("#about").offset().top-130){
     $(".internal a").removeClass("active");
     $(".internal li:eq(1) a").addClass("active");
 }
    else if(top>=$("#home").offset().top-50){
        $(".internal a").removeClass("active");
        $(".internal li:eq(0) a").addClass("active");
    }
    else{
        $(".internal a").removeClass("active");

    }
  
})

})

$(function(){
     $(".wrap-3 .tabs ul li a").click(function(e){
      e.preventDefault();
      $(".wrap-3 .tabs ul li a").removeClass("active");
      $(this).addClass("active");
      var index=$(this).parent().index();
      $(`.wrap-3 .content`).fadeOut(0);
      $('.wrap-3 .content:eq('+index+')').fadeIn();
     })
  
})
$(function(){
     $(".wrap-7 .tabs ul li a").click(function(e){
      e.preventDefault();
      $(".wrap-7 .tabs ul li a").removeClass("active");
      $(this).addClass("active");
      var index=$(this).parent().index();
      $(`.wrap-7 .content`).fadeOut(0);
      $('.wrap-7 .content:eq('+index+')').fadeIn();
     })


})


/* count down*/
let valueDisplay=document.querySelectorAll(".num");
let interval=5000;
valueDisplay.forEach((valueDisplay)=>{
     let startvalue=0;
     let endvalue=parseInt(valueDisplay.getAttribute("data-val"));
     let duration=Math.floor(interval/endvalue)
     let counter=setInterval(function(){
          startvalue += 1;
          valueDisplay.textContent=startvalue;
          if(startvalue==endvalue){
               clearInterval(counter)
          }
     }, duration)
})

let playvideo=document.querySelector("#playvideo");
let motivatevideo=document.querySelector(".motivatevideo");
let playbtn= document.querySelector(".playbtn");
let pausevideo= document.querySelector("#pausevideo");

function play(){
    motivatevideo.play();
   playvideo.style.display="none";
   pausevideo.style.display="block";
}
function pause(){
    motivatevideo.pause();
    pausevideo.style.display="none";
    playvideo.style.display="block";
}
playvideo.addEventListener("click",play);
pausevideo.addEventListener("click" ,pause);
