import React, {Component} from 'react'
import HeroArea from '../../slide/HeroArea';
import MainWrapper from '../../main/MainWrapper';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <HeroArea />
                <MainWrapper />
            </React.Fragment>
        );
    }
}

export default Main;