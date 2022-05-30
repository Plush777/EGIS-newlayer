$(document).ready(function () {
    $('.swiper .cont .inputInnerBox input').on({
        "focus": function () {
            if(window.matchMedia('(max-width: 768px)').matches){
                $('#footer').hide();
                $('.company').attr('style','display:none !important');
            }
            $(this).closest('.inputInnerBox').addClass('focus');
            $(this).on({
                "blur": function () {
                    $('#footer').show();
                    $('.company').attr('style','display:flex !important');
                    $(this).closest('.inputInnerBox').removeClass('focus');
                }
            })
        }
    });

    $('.swiper .cont form textarea').on({
        "focus": function () {
            if(window.matchMedia('(max-width: 768px)').matches){
                $('#footer').hide();
                $('.company').attr('style','display:none !important');
            }
            $(this).on({
                "blur": function () {
                    $('#footer').show();
                    $('.company').attr('style','display:flex !important');
                }
            })
        }
    });

    $('.productList > ul > li').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).prev('.nextCont').addClass('active').parents('.productList').siblings('.firstCont').hide();
            $(this).parents('.productList').addClass('active');
            $(this).parents('.cont.type02').addClass('active');
            if(window.matchMedia('(max-width: 768px)').matches){
                $('.swiper-pagination').hide();
            }
        }
    })

    $('.subjectArea > ul > li').on({
        "click": function (e) {
            e.stopPropagation();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).prev('.nextCont').addClass('active');
            $(this).closest('ul').parent('.subjectArea').addClass('change').siblings('li').removeClass('active');
            $(this).closest('ul').parent('.subjectArea').parent('.cont').addClass('change');
            if($(this).closest('ul').parent('.subjectArea').parent('.cont').hasClass('change')){
                // $('.controlArea').show();
                $(this).closest('ul').parent('.subjectArea').prev('.firstCont').hide();
                if(window.matchMedia('(max-width: 1420px)').matches){
                    $('.firstCont').hide();
                    $('.swiper-pagination').hide();
                }
            }
        }
    })

    $('.productList.mobile').on({
        "click": function () {
            if($(this).hasClass('active')){
                $(this).siblings('.firstCont').hide();
                if(window.matchMedia('(max-width: 1420px)').matches){
                    $('.swiper-pagination').hide();
                    $('#header .logo').addClass('loc');
                } else{
                    $('#header .logo').removeClass('loc');
                }
            }
            $(this).children('ul').addClass('rmBorder');
        }
    })

    $('.subjectArea.mobile li').on({
        "click": function (e) {
            e.stopPropagation();
            if($(this).parents('.subjectArea').hasClass('change')){
                if(window.matchMedia('(max-width: 1420px)').matches){
                    $('.swiper-pagination').hide();
                    $('#header .logo').addClass('loc');
                } else{
                    $('#header .logo').removeClass('loc');
                }
            }
        }
    });

    $('.btnClose').on({
        "click": function (e) {
            e.stopPropagation(); //이벤트 중첩 제거
            $(this).parents('.productList').removeClass('active');
            $(this).parents('.nextCont').removeClass('active');
            $(this).parents('.cont.type02').removeClass('active');
            $(this).parents('.productList').siblings('.firstCont').show();

            //subjectArea
            $(this).parents('.subjectArea').siblings('.firstCont').show();
            $(this).parents('.subjectArea').removeClass('change');
            $(this).parents('.cont').removeClass('change');
            // $('.controlArea').hide();
        }
    })

    $('.subjectArea.mobile li').on({
        "click": function () {
            if($(this).parents('.subjectArea').closest('.cont').hasClass('change')){
                $(this).parents('.subjectArea').closest('.cont').closest('.swiper-slide.column').addClass('pt0')
            } else {
                $(this).parents('.subjectArea').closest('.cont').closest('.swiper-slide.column').removeClass('pt0')
            }
        }
    })

    $('.menuList li.company').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            swiper.slideTo(2, 1000,true);
        }
    });

    $('.menuList li.product').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            swiper.slideTo(3, 1000,true);
        }
    });

    $('.menuList li.research').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            swiper.slideTo(4, 1000,true);
        }
    });

    $('.menuList li.contact').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            swiper.slideTo(5, 1000,true);
        }
    });
})
