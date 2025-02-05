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
// 네비게이션(사이드바) 메뉴 요소들을 가져옴, 페이지 내 각 섹션 요소들을 가져옴,메인 섹션(첫 화면)을 가져옴

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
                // offsetTop + 80 → 조금 더 아래로 스크롤 (헤더 같은 요소를 고려한 여백 조정)
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
        // 네비게이션 버튼 클릭 시 해당 섹션으로 스크롤 이동 ,  클릭한 네비게이션 항목에 on 클래스를 추가하여 스타일 변경,  스크롤 시 현재 위치한 섹션에 따라 네비게이션 on 클래스 변경,  메인 섹션(.main_sec)에 있을 때는 네비게이션 스타일 제거 (비활성화 효과)
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
    let arr = ['images/card-banner1.jpg', 'images/card-banner2.jpg','images/card-banner3.jpg','images/card-banner4.jpg','images/card-banner5.jpg','images/card-banner6.png','images/card-banner7.jpg', '']
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