import React from 'react';
import About from './aboutme';
import Tech from './tech';
import Portfolio from './portfolio';
import './compstyles/style.scss';

const Main = () => {
    return (
        <main>
            <div className="vertical_line"></div>
            <div className="main_content">
                <About />
                <Tech />
                <Portfolio />
            </div>
        </main>
    );
}

export default Main;
