import portfolio from '../../images/nav/portfolio.svg';
import github from '../../images/nav/github.svg';
import linkedin from '../../images/nav/linkedin.svg';
import contact from '../../images/nav/contact.svg';

import Item from "../navitem/Item";

import './style.scss';

const Footer = () => {
    return (
        <footer>
        <div className="bottom_end">
            <div className="bottom_end_data">
                <p>Abel Martin Bergesio - 2022 - Buenos Aires, Argentina.</p>
            </div>
            <nav>
                <Item img={portfolio} title="about me" route="#aboutme" />
                <Item img={portfolio} title="technologies" route="#technologies" />
                <Item img={portfolio} title="portfolio" route="#portfolio" />
                <Item img={github} title="github" route="https://github.com/ambergesio" target="_blank"/>
                <Item img={linkedin} title="Linkedin" route="https://www.linkedin.com/in/abel-martin-bergesio-42819820a/" target="_blank"/>
                <Item img={contact} title="Contact" route="#contact" />
            </nav>
        </div>
    </footer>
    );
};

export default Footer;
