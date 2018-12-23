import React, {Component} from 'react'
import PageTemplate from '../components/base/PageTemplate';

import Main from '../components/container/main/Main';

class Home extends Component {
    render() {
        return (
            <PageTemplate>
                <Main />
            </PageTemplate>
        );
    }
}

export default Home;