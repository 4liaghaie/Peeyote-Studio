function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('actve')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('actve')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}


scrollTrigger('.scroll-reveal')

var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          var out = ''
          for (i = 1; i < total+1; i++) {
            if (i == current) {
              out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
            }
            else {
              out = out + '<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
            }
          };
          return out;
        },}  
      
      

    });

    
    var swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        },

        });
        document.addEventListener("DOMContentLoaded", function(){
          var myOffcanvas = document.getElementById('offcanvasExample');
          var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
          document.getElementById("OpenMenu").addEventListener('click',function (e){
            e.preventDefault();
            e.stopPropagation();
            bsOffcanvas.toggle();
          });
        });
