import React, { Component } from 'react';
import SingleBlogTop from './SingleBlogTop';
import SingleBlogContent from './SingleBlogContent';

class SingleBlog extends Component {
    render() {
        return (
            <div className="single_blog padding_bottom">
                <SingleBlogTop/>
                <SingleBlogContent/>
            </div>
        );
    }
}

export default SingleBlog;