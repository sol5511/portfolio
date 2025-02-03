const swiper1 = new Swiper('.Swiper1', {
    slidesPerView: 3, 
    centeredSlides: true, 
    loop: true, 
    grabCursor: true, 
});


// leftbar
const navLinks = document.querySelectorAll('.leftbar ul li a');
const sections = document.querySelectorAll('main .section');
const mainSec = document.querySelector('main .main_sec');

navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach((link) => link.classList.remove('on'));
        this.classList.add('on');
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop + 80,
                behavior: 'smooth',
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (mainSec) {
        const mainSecTop = mainSec.offsetTop;
        const mainSecHeight = mainSec.offsetHeight;

        if (scrollY >= mainSecTop && scrollY < mainSecTop + mainSecHeight) {
            navLinks.forEach((link) => link.classList.remove('on'));
            return;
        }
    }

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - 30 && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove('on'));
            navLinks[index].classList.add('on');
        }
    });
});


$(function(){
    $('html,body').animate({
        scrollTop : 0
    },200)
    
//leftbar - 숨기기
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if (scrollTop >= 1100 && scrollTop <= 6850) {
        $('.leftbar').show(); 
    } else {
        $('.leftbar').hide(); 
    }
    console.log($(window).scrollTop())
});

//app design 클릭하면 txtbox 보이기

    $('.imgbox .img').click(function () {
        let idx = $(this).index();
        $('.txtwrap .txtbox').hide();
        $('.txtwrap .txtbox').eq(idx).show();
    });
    $('.imgbox .img').eq(0).trigger('click');

//design works popup 
$('.card .content').click(function(e){
    let arr = ['../images/card-banner1.jpg', '../images/card-banner2.jpg','../images/card-banner3.jpg','../images/card-banner4.jpg','../images/card-banner5.jpg','../images/card-banner6.png','../images/card-banner7.jpg', '']
    e.preventDefault()
    let idx = $(this).index()
    console.log(idx)
    console.log(arr[idx])
        $('.popup .popup-img').css({
            'background-image' : `url(${arr[idx]})`
        })
        $('.popup').show()
    })
    $('.popup button').click(function(){
        $('.popup').hide()
    })





});