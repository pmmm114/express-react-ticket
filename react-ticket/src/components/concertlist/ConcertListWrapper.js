import React from 'react';

const ConcertListWrapper = ({children}) => (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
                {children}
            </div>
        </div>
    </div>
)

export default ConcertListWrapper;