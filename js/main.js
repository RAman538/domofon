$(document).ready(function() {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });

    const news = document.querySelector('.news'),
     newsInner = document.querySelector('.news__inner'),
     newsSlider = document.querySelector('.news__slider'),
     newsBlog = document.querySelectorAll('.news__blog'),
     newsImages = document.querySelectorAll('.news__contain__img-box'),
     newsBlogAfter = document.querySelectorAll('.news__blog'),
     footerInner = document.querySelector('.footer__inner'),
     footerMap = document.querySelector('.footer__map'),
     footerInfo = document.querySelector('.footer__info');

    window.addEventListener('resize', function(e) {
        let width = e.target.document.documentElement.clientWidth;
            if (width < 1318) {
                newsInner.style.display = 'block';
                newsSlider.style.maxWidth = '100%';
                newsSlider.style.marginBottom = '90px';
                news.style.paddingBottom = '70px';

                newsBlog.forEach(i => {
                    i.classList.remove('news__blog');
                    i.classList.add('news__blog-extra');
                });

                newsBlogAfter.forEach(i => {
                    i.classList.add('news__blog-after');
                });

                newsImages.forEach(i => {
                    i.classList.remove('news__contain__img-box');
                    i.classList.add('news__contain__img-box-extra');
                });
                
            } else {
                newsInner.style.display = 'flex';
                newsSlider.style.maxWidth = '555px';
                newsSlider.style.marginBottom = '0px';
                news.style.paddingBottom = '110px';

                newsBlog.forEach(i => {
                    i.classList.remove('news__blog-extra');
                    i.classList.add('news__blog');
                });

                newsBlogAfter.forEach(i => {
                    i.classList.remove('news__blog-after');
                });

                newsImages.forEach(i => {
                    i.classList.remove('news__contain__img-box-extra');
                    i.classList.add('news__contain__img-box');
                });
            }
    }); 

    window.addEventListener('resize', function(e) {
        let width = e.target.document.documentElement.clientWidth;

        if (width < 1050) {
            footerInner.style.display = 'block';
            footerMap.style.maxWidth = '100%';
            footerInfo.style.marginBottom = '30px';
            footerInfo.style.maxWidth = '465px';
        } else {
            footerInner.style.display = 'flex';
            footerMap.style.maxWidth = '630px';
            footerInfo.style.marginBottom = '0px';
            footerInfo.style.maxWidth = '360px';
        }

    });

    /* $(window).resize(function(e) {
        let width = e.target.innerWidth;
          if(width < 1000) {
            //код
         }
      }); */

    /* $(".news__inner").removeClass('display: flex;'); */
	
});
