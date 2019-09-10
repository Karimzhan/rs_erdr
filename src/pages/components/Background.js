import React from 'react';
import '../../css/style.css';


function Background (props) {
    return (
        <div className="coverBackground">
            <div className="main_container">
                {props.children}
            </div>
            
        </div>
    );
}

export default Background;