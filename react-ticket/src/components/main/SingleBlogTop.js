import React, { Component } from 'react';
import SingleBlogTopBtn from './SingleBlogTopBtn'
import SingleBlogTopMark from './SingleBlogTopMark'
// import blog_img from '../../img/index_6_blog_img_1.jpg'

class SingleBlogTop extends Component {
    render() {
        return (
            <div className="single_blog_top">
                <a href = "/">
                    {/* <img src={require('../../img/index_6_blog_img_1.jpg')}/> */}
                </a>
                <SingleBlogTopBtn/>
                <SingleBlogTopMark/>
            </div>
        );
    }
}

export default SingleBlogTop;