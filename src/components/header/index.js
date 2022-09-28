import React, { useState } from 'react';
import about from '../../images/nav/about.svg';
import techs from '../../images/nav/techs.svg';
import portfolio from '../../images/nav/portfolio.svg';
import github from '../../images/nav/github.svg';
import linkedin from '../../images/nav/linkedin.svg';
import contact from '../../images/nav/contact.svg';
import mac from '../../images/hero/mac.png';
import Item from '../navitem/Item';
import './style.scss';


const Header = () => {

    const [ open, setOpen ] = useState(false);

    return (
            <section className="hero">

                <div className="nav_container">
                    <nav>
                        <Item img={about} title="sobre mi" route="#aboutme" />
                        <Item img={techs} title="tecnologías" route="#technologies" />
                        <Item img={portfolio} title="portfolio" route="#portfolio" />
                        <Item img={github} title="github" route="https://github.com/ambergesio" target="_blank"/>
                        <Item img={linkedin} title="Linkedin" route="https://www.linkedin.com/in/abel-martin-bergesio-42819820a/" target="_blank"/>
                        <Item img={contact} title="Contacto" route="#contact" />
                    </nav>
                </div>

                <div onClick={ () => {setOpen(!open)}} className={!open ? "menuButton" : "menuButton on"}>
                    <div className="menu_hamb"></div>
                </div>
                <div className={!open ? "mobile_nav closed" : "mobile_nav open"} onClick={() => setOpen(false)}>
                    <Item img={about} title="sobre mi" route="#aboutme" />
                    <Item img={techs} title="tecnologías" route="#technologies" />
                    <Item img={portfolio} title="portfolio" route="#portfolio" />
                    <Item img={github} title="github" route="https://github.com/ambergesio" target="_blank"/>
                    <Item img={linkedin} title="Linkedin" route="https://www.linkedin.com/in/abel-martin-bergesio-42819820a/" target="_blank"/>
                    <Item img={contact} title="Contacto" route="#contact" />
                </div>


                <div className="main_title_container">
                    <div className="title_container">
                        <div className="title">
                            <p className="name">Abel Martín</p>
                            <p className="lastName">BERGESIO</p>
                        </div>
                        <div className="drop_title">
                            <div className="drop_border">
                                <p className="drop">Fullstack MERN / Diseñador gráfico</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="hero_img" src={mac} alt="Abel Martín Bergesio" title="Abel Martín Bergesio" />
                    </div>
                </div>
            </section>
    );
}

export default Header;
