import React from 'react';
import './Button.css';

export default (props) => (
    <div className="button" role="button" onTouchStart={() => { props.onPressed(props.title) }} onTouchEnd={() => props.onReleased(props.title)}>
        {props.title}
    </div>
);
