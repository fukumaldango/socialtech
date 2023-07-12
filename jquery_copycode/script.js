$(function() {
    // カルーセル
    $('#main-visual').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        dots: true,
        arrows: false
    }); 

    // リンクrogo
    $('#rogo').on('mouseover', function() {
        $('#rogo').css('opacity', 0.6);
    });

    $('#rogo').on('mouseout', function() {
        $('#rogo').css('opacity', 1.0);
    });

    // リンクmenu-about
    $('#menu-about').on('mouseover', function() {
        $('#menu-about').css('opacity', 0.6);
    });

    $('#menu-about').on('mouseout', function() {
        $('#menu-about').css('opacity', 1.0);
    });

    // リンクmenu-works
    $('#menu-works').on('mouseover', function() {
        $('#menu-works').css('opacity', 0.6);
    });

    $('#menu-works').on('mouseout', function() {
        $('#menu-works').css('opacity', 1.0);
    });

    // スクロールでフェードイン
    $(window).scroll(function() {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        // aboutの内容をフェードインさせる
        $('.about-content').each(function() {
            const targetPosition = $(this).offset().top;
            if(scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("add-fadeIn-first");
            }
        });

        // worksの内容をフェードインさせる
        $('.works-content').each(function() {
            const targetPosition = $(this).offset().top;
            if(scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("add-fadeIn-second");
            }
        });
    });

    //sスクロールでボタンの表示・非表示 
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        //スクロールしたときにTOPに戻るボタンを表示させる
        $('.top-button').each(function() {
            if(scroll >= 100) {
                $('.top-button').css('display', 'inline');
            } else {
                // 元の場所に戻るとTOPに戻るボタンを非表示にする
                $('.top-button').css('display', 'none');
            }
        });
        


        // マウスオーバーでボタンに変化を付ける
        $('.top-button').on('mouseover', function() {
            $('.top-button').css('opacity', 0.6);
        });
        // マウスアウトでボタンを元に戻す
        $('.top-button').on('mouseout', function() {
            $('.top-button').css('opacity', 1.0);
        });
    });

    // マウスオーバーでworksに変化を付ける
    $('#img1').on('mouseover', function() {
        $('#img1').css('opacity', 0.6);
    });
    $('#img2').on('mouseover', function() {
        $('#img2').css('opacity', 0.6);
    });
    $('#img3').on('mouseover', function() {
        $('#img3').css('opacity', 0.6);
    });
    // マウスアウトでworksを元に戻す
    $('#img1').on('mouseout', function() {
        $('#img1').css('opacity', 1.0);
    });
    $('#img2').on('mouseout', function() {
        $('#img2').css('opacity', 1.0);
    });
    $('#img3').on('mouseout', function() {
        $('#img3').css('opacity', 1.0);
    });

    // worksのモーダル作成
    $('.js-open1').on('click', function() {
        $('#img1-overlay, #img1-modal, #img1-closed').fadeIn();
    });
    $('.js-close1').on('click', function() {
        $('#img1-overlay, #img1-modal, #img1-closed').fadeOut();
    });

    $('.js-open2').on('click', function() {
        $('#img2-overlay, #img2-modal, #img2-closed').fadeIn();
    });
    $('.js-close2').on('click', function() {
        $('#img2-overlay, #img2-modal, #img2-closed').fadeOut();
    });

    $('.js-open3').on('click', function() {
        $('#img3-overlay, #img3-modal, #img3-closed').fadeIn();
    });
    $('.js-close3').on('click', function() {
        $('#img3-overlay, #img3-modal, #img3-closed').fadeOut();
    });
});