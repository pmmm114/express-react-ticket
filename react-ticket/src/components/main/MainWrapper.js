import React, { Component } from 'react';
import MainContent from './MainContent';

class MainWrapper extends Component {
    render() {
        return (
            <div className="main_wrapper section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="blog_left_content">
                                <MainContent direction="main_content_left"/>
                                <MainContent direction="main_content_right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainWrapper;