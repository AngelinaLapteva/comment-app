import React from 'react';
import './Avatar.css'

const avatar = props => {
    return (
        <img className="Avatar" alt="profile" src={props.avatarPath} />
    )
}
export default avatar;