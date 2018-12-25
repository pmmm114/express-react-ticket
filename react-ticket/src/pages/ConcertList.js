import React from 'react'

import PageTemplate from '../components/base/PageTemplate';
import ConcertApp from '../components/container/concertlist/ConcertApp'

const Main = ({location}) => (
    <PageTemplate>
        <ConcertApp/>
    </PageTemplate>
)

export default Main;