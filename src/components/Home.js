// import MyTerminal from "./Terminal"

import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
    return (
        <div className="homeBody">
            <div className="typeBox">
                <h1 className="typewriter">My Name is Anthony</h1>
            </div>
            <br></br>
            <div className="typeBox">
                <h3 className="typewriter2">An aspiring Software Engineer and/or Web Developer</h3>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <SocialIcon style={{ height: 75, width: 75 }} className="social" url="https://linkedin.com/in/anthony-j-gatti/" />
            <SocialIcon style={{ height: 75, width: 75 }} className="social" bgColor="black" url="https://github.com/agatti4" />
            <SocialIcon style={{ height: 75, width: 75 }} className="social" url="https://www.instagram.com/agatti4/" />
        </div>
        
    )
}