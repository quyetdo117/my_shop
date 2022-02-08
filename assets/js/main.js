const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// ob constructor

function Content(widthColumn, widthForm, widthContent ,leftContent, content , btnLeft, btnRight){
    this.widthColumn = widthColumn;
    this.widthForm = widthForm;
    this.widthContent = widthContent;
    this.leftContent = leftContent;
    this.content = content;
    this.btnLeft = btnLeft;
    this.btnRight = btnRight;
    this.nextArrow = function(){
            this.leftContent-=this.widthColumn;
            if(this.leftContent>=(-this.widthContent)){
                this.content.style.left = this.leftContent + 'px';
                if(this.btnLeft.hasAttribute('disabled')){
                    this.btnLeft.removeAttribute('disabled')
                }
            }
            if(Math.abs(this.leftContent-this.widthForm)>=this.widthContent){
                this.btnRight.setAttribute('disabled','');
            }
        }
    this.backArrow = function (){
        this.leftContent+=this.widthColumn;
        if(this.leftContent<=0){
            this.content.style.left = this.leftContent + 'px';
            if(this.btnRight.hasAttribute('disabled')){
                this.btnRight.removeAttribute('disabled')
            }
        }
        if(this.leftContent>=0){
            this.btnLeft.setAttribute('disabled','');
        }
    }
}



// Slider 
const sliderImg = $('.slider-list');
const sliderContent = $('.slider-content');
const sizeSlider = $$('.slider-list img').length;
const sliderPoint = $$('.slider__point i');
const btnSliderLeft = $('.slider__btn-arrow--left');
const btnSliderRight = $('.slider__btn-arrow--right');
var widthSlider = sliderContent.offsetWidth;



var index = 0;
setInterval(changeSlider, 5000);
function changeSlider(){
    var leftSlider = sliderImg.offsetLeft;
    index = Math.abs(leftSlider)/widthSlider +1;
    leftSlider=widthSlider*(-index);
    sliderImg.style.left = leftSlider + "px";
    
    if(index>=sizeSlider){
        sliderImg.style.left = 0;
        index = 0;
    }
    if(index==0){
        btnSliderLeft.setAttribute('disabled','');
    }else{
        btnSliderLeft.removeAttribute('disabled');
    }

    if(leftSlider==-widthSlider*(sizeSlider-1)){
        btnSliderRight.setAttribute('disabled','');
    }else{
        btnSliderRight.removeAttribute('disabled');
    }
    // slider-point auto
    if($('.slider--current')){
        $('.slider--current').classList.remove('slider--current');
        sliderPoint[index].classList.add('slider--current');
    }else{
        sliderPoint[index].classList.add('slider--current');
    }

    }

function backSlider(){
    var leftSlider = sliderImg.offsetLeft;
    leftSlider+=widthSlider;
    if(leftSlider<=0){
        sliderImg.style.left = leftSlider+ "px";
        if($('.slider--current')){
            $('.slider--current').classList.remove('slider--current');
            sliderPoint[Math.abs(leftSlider)/widthSlider].classList.add('slider--current');
        }else{
            sliderPoint[Math.abs(leftSlider)/widthSlider].classList.add('slider--current');
        }

        if(btnSliderRight.hasAttribute('disabled')){
            btnSliderRight.removeAttribute('disabled');
        }
    }
    if(leftSlider>=0){
        if($('.slider--current')){
            $('.slider--current').classList.remove('slider--current');
            sliderPoint[Math.abs(leftSlider)/widthSlider].classList.add('slider--current');
        }
        btnSliderRight.removeAttribute('disabled');
        btnSliderLeft.setAttribute('disabled','');
    }
}

function upSlider(){
    var leftSlider = sliderImg.offsetLeft;
    leftSlider-=widthSlider;
    if(leftSlider>=-widthSlider*(sizeSlider-1)){
        sliderImg.style.left = leftSlider+ "px";
        if($('.slider--current')){
            $('.slider--current').classList.remove('slider--current');
            sliderPoint[Math.abs(leftSlider)/widthSlider].classList.add('slider--current');
        }else{
            sliderPoint[Math.abs(leftSlider)/widthSlider].classList.add('slider--current');
        }

        if(btnSliderLeft.hasAttribute('disabled')){
            btnSliderLeft.removeAttribute('disabled');

        }
    }
    if(leftSlider==-widthSlider*(sizeSlider-1)){
        btnSliderRight.setAttribute('disabled','');
    }
}


// Click arrow featured product sidebar
const listFeatured = $('.featured-list');
const btnRightFeatured = $('.js-btn-right__featured');
const btnLeftFeatured = $('.js-btn-left__featured');
const itemsFeatured = $$('.featured-item');
const widthFeaturedBlock = $('.featured-content').offsetWidth;
const widthFeatured = widthFeaturedBlock;
var leftFeatured = listFeatured.offsetLeft;
var widthListFeatured = widthFeatured*(Math.ceil(itemsFeatured.length/4));

var featured = new Content(widthFeatured, widthFeaturedBlock, widthListFeatured, leftFeatured, listFeatured, btnLeftFeatured, btnRightFeatured)

function nextFeatured(){
    featured.nextArrow();
}

function backFeatured(){
    featured.backArrow();
}

// Click arrow news sidebar
const widthNewsBlock = $('.sidebar-news__contain').offsetWidth;
const widthNews = widthNewsBlock;
const widthListNews = $('.sidebar-news__list').offsetWidth;
const btnLeftNews = $('.js-btn-left__news');
const btnRightNews = $('.js-btn-right__news');
const itemsNews = $$('.sidebar-news__item');
var leftListNews = $('.sidebar-news__list').offsetLeft;
var listNews = $('.sidebar-news__list');

var news = new Content(widthNews, widthNewsBlock, widthListNews, leftListNews,listNews, btnLeftNews, btnRightNews)

function nextNews(){
    news.nextArrow();
}

function backNews(){
    news.backArrow();
}

// Click arrow Product new
const  widthProductNewBlock = $('.js-product-new-block').offsetWidth;
const widthProductNew = $('.home__product').offsetWidth;
const listProductNew = $('.js-product-new-list');
const widthListProductNew = listProductNew.offsetWidth;
const btnLeftProductNew = $('.js-btn-left__product-new');
const btnRightProductNew = $('.js-btn-right__product-new');
var leftListProductNew = listProductNew.offsetLeft;

var productNew = new Content(widthProductNew, widthProductNewBlock, widthListProductNew, leftListProductNew, listProductNew, btnLeftProductNew, btnRightProductNew);


function backProductNew(){
    productNew.backArrow();
}

function nextProductNew(){
    productNew.nextArrow();
}

// click arrow product discount

const  widthProductDiscountBlock = $('.js-product-discount-block').offsetWidth;
const widthProductDiscount = $('.home__product').offsetWidth;
const quantityProductDiscount = $$('.js-product-discount-list .home__product').length;
const listProductDiscount = $('.js-product-discount-list');
const widthListProductDiscount = widthProductDiscount*(Math.ceil(quantityProductDiscount/2));
const btnLeftProductDiscount = $('.js-btn-left__product-discount');
const btnRightProductDiscount = $('.js-btn-right__product-discount');
var leftListProductDiscount = listProductDiscount.offsetLeft;

var productDiscount = new Content(widthProductDiscount, widthProductDiscountBlock, widthListProductDiscount, leftListProductDiscount, listProductDiscount, btnLeftProductDiscount, btnRightProductDiscount);


function backProductDiscount(){
    productDiscount.backArrow();
}

function nextProductDiscount(){
    productDiscount.nextArrow();
}

// click arrow product featured

const  widthProductFeaturedBlock = $('.js-product-featured-block').offsetWidth;
const widthProductFeatured = $('.home__product').offsetWidth;
const quantityProductFeatured = $$('.js-product-featured-list .home__product').length;
const listProductFeatured = $('.js-product-featured-list');
const widthListProductFeatured = widthProductFeatured*(Math.ceil(quantityProductFeatured/2));
const btnLeftProductFeatured = $('.js-btn-left__product-featured');
const btnRightProductFeatured = $('.js-btn-right__product-featured');
var leftListProductFeatured = listProductFeatured.offsetLeft;

var productFeatured = new Content(widthProductFeatured, widthProductFeaturedBlock, widthListProductFeatured, leftListProductFeatured, listProductFeatured, btnLeftProductFeatured, btnRightProductFeatured);


function backProductFeatured(){
    productFeatured.backArrow();
}

function nextProductFeatured(){
    productFeatured.nextArrow();
}


// select quantity header
const btnMinusCart = $$('.btn__minus-product');
const btnPlusCart = $$('.btn__plus-product');
const inputQuantityCart = $$('.input__quantity-product input');
const formatter = new Intl.NumberFormat('vi-VN',{
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
// price test
const priceProduct = $$('.header__product .product-price');
var price = []
price[0] = 1200000;
price[1] = 700000;

priceProduct[0].innerHTML = formatter.format(price[0]);
priceProduct[1].innerHTML = formatter.format(price[1]);
var total = price[0] + price[1];
var totalCart = $('.product-price.product__total-price');
totalCart.innerHTML = formatter.format(total);

btnMinusCart.forEach(function(btnMinus, index){
    btnMinus.onclick = function(){
        var num = Number.parseInt(inputQuantityCart[index].value);
        if(num>1){
            num -= 1;
            inputQuantityCart[index].value = num;
            newPrice = price[index]*num;
            priceProduct[index].innerHTML = formatter.format(newPrice);
            total = total - price[index];
            totalCart.innerHTML = formatter.format(total);
        }
    }
})

btnPlusCart.forEach(function(btnPlus, index){
    btnPlus.onclick = function(){
        var num = Number.parseInt(inputQuantityCart[index].value)
        if(num<9){
            num += 1;
            inputQuantityCart[index].value = num;
            newPrice = price[index]*num;
            priceProduct[index].innerHTML = formatter.format(newPrice);
            total = total + price[index];
            totalCart.innerHTML = formatter.format(total);
        }
    }
})

