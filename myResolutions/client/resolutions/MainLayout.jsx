import React from "react";
import AccountsUI from "./AccountsUI.jsx";
import About from './About.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>My resolutions</h2>
            <nav>
                <AccountsUI />
                <a href='/'>My resolutions</a>
                <a href='/about'>About</a>
            </nav>
        </header>
        
        <main>
            {content}
        </main>
    </div>  
)