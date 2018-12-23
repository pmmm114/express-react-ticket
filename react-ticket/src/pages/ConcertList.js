import React from 'react'

import PageTemplate from '../components/base/PageTemplate';
import ConcertApp from '../components/container/concertlist/ConcertApp'

const Main = ({location}) => (
    <PageTemplate>
        <ConcertApp query={location.search}/>
    </PageTemplate>
)

export default Main;