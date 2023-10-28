import React from "react";
import Slider from "react-slick";

const adimage=['images/book1.jpg', 'images/book2.jpg', 'images/book3.jpg', 'images/book4.jpg', 'images/book5.jpg'];

function AdPanel(){

    const adimages=adimage.map((images)=>
        <div className="adpanel-img-all" key={images}>
            <img className="adpanel-img" src={images}></img>
        </div>
    )

    function setButton(e){
        var directionButton = document.querySelectorAll('#root > div > div.body-all.container > div > div > button.slick-arrow.slick-button');
        if(!(directionButton[0].classList.contains("slick-button-visible"))){
            directionButton[0].classList.add("slick-button-visible");
            directionButton[1].classList.add("slick-button-visible");
        }
        else{
            directionButton[0].classList.remove("slick-button-visible");
            directionButton[1].classList.remove("slick-button-visible");
        }
    }

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button{...props} className={"slick-button slick-prev slick-arrow"} type="button">
            <svg aria-hidden='true' fill='#cc9900' width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' className='button__icon'>
                <path d='M11.757 3.314a1.07 1.07 0 00-1.514 0L5.314 8.243a1.07 1.07 0 000 1.514l4.929 4.929a1.07 1.07 0 101.514-1.514L7.591 8.995l4.166-4.167a1.08 1.08 0 000-1.514z'></path>
            </svg>
            Previous
        </button>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button{...props} className={"slick-button slick-next slick-arrow"} type="button">
            <svg aria-hidden="true" fill="#cc9900" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="button__icon">
                <path d="M6.314 3.316a1.07 1.07 0 000 1.515l4.17 4.17-4.17 4.17a1.07 1.07 0 101.516 1.515l4.932-4.933a1.07 1.07 0 000-1.515L7.83 3.305a1.08 1.08 0 00-1.516.01z"></path>
            </svg>
            Next
        </button>
    );

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // prevArrow: <button type='button' className='slick-button2 slick-prev prev-button'><svg aria-hidden='true' fill='#cc9900' width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' className='button__icon'><path d='M11.757 3.314a1.07 1.07 0 00-1.514 0L5.314 8.243a1.07 1.07 0 000 1.514l4.929 4.929a1.07 1.07 0 101.514-1.514L7.591 8.995l4.166-4.167a1.08 1.08 0 000-1.514z'></path></svg></button>,// nextArrow: '.slick-next';
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };

    return(
        <div className="slider-all" onMouseEnter={(e) => setButton(e)} onMouseLeave={(e) => setButton(e)}>
            <Slider {...settings}>
                {
                    adimages
                }
            </Slider>
        </div>
    )
}

export default AdPanel;
