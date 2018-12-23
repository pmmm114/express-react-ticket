import React, { Component } from 'react';

const SingleConcertContent = ({concertTitle, concertVenue, onClick}) => (
    <div className="col-sm-9">
        <h2 className="concert-name">
            <a>{concertTitle}</a>{/* <a>{title}</a> */}
        </h2>
        <p>{concertVenue}</p>{/* <p>{venue}}</p> */}
        <p>2018. 11. 16(금)~17(토))</p>{/* <p>{start_date} ~ {end_date}</p> */}
        <p><button onClick={onClick}>More</button></p>
    </div>
)

export default SingleConcertContent