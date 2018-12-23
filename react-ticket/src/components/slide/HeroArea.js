import React, { Component } from "react";
import Slider from "react-slick";

class HeroArea extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         slides: [
    //             createCarouselItem(0),
    //             createCarouselItem(1),
    //             createCarouselItem(2)
    //         ]
    //     }
    // }
    
    render() {
        return (
            <div className="main_slider">
                    <div className="main_slider_list">
                            <Slider dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}>
                                <div className="main-slick_banner" 
                                style = {{ 
                                    // backgroundImage: 'url(' + require('../../img/index_6_hero_area_bg_1.jpg') + ')', 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <div>
                                        <h1>TEST 1</h1>
                                    </div>
                                </div>
                                <div className="main-slick_banner">
                                    <div className="hero_area_text">
                                        <div className="hero_area_table">
                                            <div className="hero_area_table_cell">
                                                <div className="hero_area_text_content">
                                                    <p className="hero_area_btn"><a href="/">예매하러 가기</a></p>
                                                    <h1>공연 소개</h1>
                                                    <p><i className="fa fa-calendar"></i>2018년 12월 10일 ~ 2018년 12월 20일</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-slick_banner">
                                <div>
                                        <h1>TEST 2</h1>
                                    </div>
                                </div>
                                <div className="main-slick_banner">
                                <div>
                                        <h1>TEST 3</h1>
                                    </div>
                                </div>
                                <div className="main-slick_banner">
                                <div>
                                        <h1>TEST 4</h1>
                                    </div>
                                </div>
                                <div className="main-slick_banner">
                                <div>
                                        <h1>TEST 5</h1>
                                    </div>
                                </div>
                            </Slider>
                    </div>
            </div>
        );
    }
}

export default HeroArea;