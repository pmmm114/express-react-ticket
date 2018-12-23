import React, { Component } from 'react';
import SingleBlog from './SingleBlog'

class MainContent extends Component {
    render() {
        return (
            <div className={this.props.direction}>
                <div className="col-md-6 col-sm-6">
                    <SingleBlog/>
                    <SingleBlog/>
                    <SingleBlog/>
                </div>
            </div>
        );
    }
}

export default MainContent;