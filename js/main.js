$(function () {
    //마우스커서
    $(window).on('mousemove', function(e){
        let x = e.pageX;
        let y = e.pageY;

        $('.cursor').css({
            'left' : x,
            'top' : y
        }) //css

        $('#section2 .skills .text:nth-child(1)').on('mouseenter', function(){
            $('.cursor').addClass('active-01');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-01');
        });
        
        $('#section2 .skills .text:nth-child(2)').on('mouseenter', function(){
            $('.cursor').addClass('active-02');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-02');
        });

        $('#section2 .skills .text:nth-child(3)').on('mouseenter', function(){
            $('.cursor').addClass('active-03');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-03');
        });

        $('#section2 .skills .text:nth-child(4)').on('mouseenter', function(){
            $('.cursor').addClass('active-04');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-04');
        });

        $('#section2 .skills .text:nth-child(5)').on('mouseenter', function(){
            $('.cursor').addClass('active-05');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-05');
        });

        $('#section2 .skills .text:nth-child(6)').on('mouseenter', function(){
            $('.cursor').addClass('active-06');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-06');
        });

        $('#section2 .skills .text:nth-child(7)').on('mouseenter', function(){
            $('.cursor').addClass('active-07');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('active-07');
        });

        $('#section4 .menu li').on('mouseenter', function(){
            $('.cursor').addClass('click-active');
        }).on('mouseleave', function(){
            $('.cursor').removeClass('click-active');
        });
    }); //mouseleave



    //로딩페이지
    $('#loading').addClass('on');

    /* $('#loading').animate({
        'top' : 0
    }, 500); */

    setTimeout(function () {
        $('#loading').slideUp(700);
    }, 3500);
    


    //section4
    //탭메뉴
    let menu = document.querySelectorAll('#section4  .menu li'); //.menu li
    let itemWrap = document.querySelectorAll('#section4 .item_wrap'); //.item_wrap

    for(let i = 0; i < menu.length; i ++) {
        menu[i].addEventListener('click', () => {
            //클릭시 스타일 변경
            menu.forEach(menuIndex => {
                menuIndex.classList.remove('active')
            });
            menu[i].classList.add('active');

            //클릭시 다른 item_wrap으로 변경
            itemWrap.forEach(itemWrapIndex => {
                itemWrapIndex.classList.remove('active');
            });
            itemWrap[i].classList.add('active');
        }); //menu.click();
    }; //for



    //section04
    //swiper
    var swiper = new Swiper(".section04Swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



    //section04
    //QR코드
    let btn = document.querySelector('#section4 .qr .btn');
    let QRcode = document.querySelector('#section4 .qr .code');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        QRcode.classList.toggle('active');
    }); //btn.click();




    });