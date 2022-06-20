import React, { useState } from 'react';
import portfolio from '../../images/nav/portfolio.svg';
import github from '../../images/nav/github.svg';
import linkedin from '../../images/nav/linkedin.svg';
import contact from '../../images/nav/contact.svg';
import mac from '../../images/hero/mac.png';
import Item from './Item';
import './style.scss';


const Header = () => {

    const [ open, setOpen ] = useState(false);

    return (
            <section className="hero">

                <nav>
                    <Item img={portfolio} title="about me" route="#aboutme" />
                    <Item img={portfolio} title="portfolio" route="#portfolio" />
                    <Item img={github} title="github" route="" />
                    <Item img={linkedin} title="Linkedin" route="" />
                    <Item img={contact} title="Contact" route="" />
                </nav>

                <div onClick={ () => {setOpen(!open)}} className={!open ? "menuButton" : "menuButton on"}>
                    <div className="menu_hamb"></div>
                </div>
                <div className={!open ? "mobile_nav closed" : "mobile_nav open"}>
                    <Item img={portfolio} title="about me" route="#aboutme" />
                    <Item img={portfolio} title="portfolio" route="#portfolio" />
                    <Item img={github} title="github" route="" />
                    <Item img={linkedin} title="Linkedin" route="" />
                    <Item img={contact} title="Contact" route="" />
                </div>


                <div className="main_title_container">
                    <div className="title_container">
                        <div className="title">
                            <p className="name">Abel Martín</p>
                            <p className="lastName">BERGESIO</p>
                        </div>
                        <div className="drop_title">
                            <div className="drop_border">
                                <p className="drop">Fullstack MERN / Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="hero_img" src={mac} alt="just me" />
                    </div>
                </div>
            </section>
    );
}

export default Header;
