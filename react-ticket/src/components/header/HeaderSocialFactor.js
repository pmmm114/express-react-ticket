import React, { Component } from 'react';

class HeaderSocialFactor extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <i className="fa fa-google-plus"></i>
            </a>

        );
    }
}

export default HeaderSocialFactor;


// render() {
//     return (
//         <div className="header_social_icon">
//             <HeaderSocialIconFactor link="/" cName="fa fa-facebook"/>
//             <HeaderSocialIconFactor link="/" cName="fa fa-twitter"/>
//             <HeaderSocialIconFactor link="/" cName="fa fa-google-plus"/>
//             <HeaderSocialIconFactor link="/" cName="fa fa-tumblr"/>
//             <HeaderSearchbar/>
//         </div>
//     );
// }