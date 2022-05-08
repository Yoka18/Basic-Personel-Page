import React from 'react';

function Conteiner(props) {
    return ( 
        <div className='container'>
            <img className='profile-photo' src={props.photo}></img>
            <h1 className='profile-name'>{props.name}</h1>
            <p className='profile-desc'>{props.desc}</p>
            <p className='profile-desc'>{props.desc2}</p>
        </div>
     );
}

export default Conteiner;