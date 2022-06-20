import React from 'react';
import About from './aboutme';
import Tech from './tech';
import Portfolio from './portfolio';
import './compstyles/style.scss';

const Main = () => {
    return (
        <main>
            <div class="vertical_line"></div>
            <div class="main_content">
                <About />
                <Tech />
                <Portfolio />
            </div>
        </main>
    );
}

export default Main;
