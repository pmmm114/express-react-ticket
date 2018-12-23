import React, { Component } from 'react';
import SingleBlogBottom from './SingleBlogBottom';
import SingleBlogFooter from './SingleBlogFooter';

class SingleBlogContent extends Component {
    render() {
        return (
            <div className="single_blog_content">
                <SingleBlogBottom/>
                <SingleBlogFooter/>
            </div>
        );
    }
}

export default SingleBlogContent;