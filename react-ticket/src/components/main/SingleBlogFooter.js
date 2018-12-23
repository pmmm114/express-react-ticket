import React, { Component } from 'react';
import SingleBlogFooterIcon from './SingleBlogFooterIcon';

class SingleBlogFooter extends Component {
    render() {
        return (
            <div className="single_blog_footer">
                <p><a href="single_blog.html">Continue Reading <i className="fa fa-long-arrow-right"></i> </a></p>
                <span className="footer_social">
                    <span className="footer_share">Share :</span>
                        <SingleBlogFooterIcon SBD_cName="fa fa-twitter"/>
                        <SingleBlogFooterIcon SBD_cName="fa fa-google-plus"/>
                </span>
            </div>
        );
    }
}

export default SingleBlogFooter;