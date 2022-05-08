import React from 'react';
function Media(props) {
    return ( 
        <div className='media'>
            <a href={props.link} target="_blank"><i class={props.media}></i></a>
        </div>
     );
}

export default Media;