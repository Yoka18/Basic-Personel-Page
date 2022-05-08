import React from 'react';
import Media from './media';

function Socialmedia() {
    return ( 
        <div className='social-media'>
            <Media
            media="fa-brands fa-github"
            link="https://github.com/"
            />
            <Media
            media="fa-brands fa-linkedin"
            link="https://www.linkedin.com/"
            />
            <Media
            media="fa-brands fa-discord"
            link="https://discord.com/"
            />
        </div>
     );
}

export default Socialmedia;