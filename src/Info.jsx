import React from 'react';
import Avatar from './Avatar';

function Info(props) {
    return <div className='info'>
        <div className='info_top'>
        <Avatar img = {props.img}/>
        </div>
        <div className='info_bottom'>
        <h3 className='name'>{props.name}</h3>
        <h5 className='status'>{props.status}</h5>
        <p>last known location:</p>
        <h6 className='location'>{props.location}</h6>
        </div>

    </div>
}

export default Info;