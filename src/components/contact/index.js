import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/w_arrow.svg';
import call from '../../images/articles/call.png';

import './style.scss';

const Contact = () => {
    return (
        <>
        <div className="contact" id="contact">
            <div className="contact_container">

                <div className="vertical_line"></div>
                <div className="main_content">
        
                    <article>
                        <div className="section_title" id="contact">
                            <div className="palette_title">
                                <img className="palette" src={palette} alt="#" />
                                <img className="arrow" src={arrow} alt="#" />
                                <p className="contact_subtitle">Contact me</p>
                                <img className="title_ilustration" src={call} alt="#" />
                            </div>
                        </div>

                        <div className="contact_card">
                            <code>
                                If you have any questions, want to meet me or just wanna chat, <b className="hilight">drop me a line!</b>
                                <p>
                                    I'll reply very quickly!
                                </p>
                            </code>
                        </div>

                        <div className="form_card">
                            <div className="balls">
                                <div className="red ball"></div>
                                <div className="yellow ball"></div>
                                <div className="green ball"></div>
                            </div>
                            <form className="message">
                                <input type="email" name="email" required placeholder="your email here"></input>
                                <textarea name="message" rows="10" required placeholder="your message here..."></textarea>
                                <button className="submit" type="submit">send message</button>
                            </form>
                        </div>
            
                    </article>

                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
