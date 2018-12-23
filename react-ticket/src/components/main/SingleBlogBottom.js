import React, { Component } from 'react';
import SingleBlogBottomMeta from './SingBlogBottomMeta'

class SingleBlogBottom extends Component {
    render() {
        return (
            <div className="single_blog_bottom">
                <h2 className="blog_headings"><a href="single_blog.html">Your Dream Holiday Destination</a></h2>
                <SingleBlogBottomMeta/>
            </div>
        );
    }
}

export default SingleBlogBottom;