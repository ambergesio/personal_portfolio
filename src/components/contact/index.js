import { useState, useRef } from 'react';
import config from '../../config';

import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/w_arrow.svg';
import call from '../../images/articles/call.png';

//imagenes del modal
import loader from '../../images/assets/loader.svg'
import sent from '../../images/assets/sent.png';
import fail from '../../images/assets/fail.png';

import './style.scss';


const Contact = () => {


    const inputEmail = useRef('');
    const inputMessage = useRef('');


    const [ serverResponse, setServerResponse] = useState('');
    const [ modal, setModal ] = useState(false);
    const [ modalImage, setModalImage ] = useState('');
    const [ sended, setSended ] = useState(false);


    const sendMessage = (e) => {
        e.preventDefault();
        const email = inputEmail.current.value;
        const message = inputMessage.current.value;
        const data = {email, message};
        setModal(true);
        setServerResponse('Enviando mensage-aguarda un momento');
        setModalImage(loader);
        fetch(`${config.backendpath}/contactme`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                setServerResponse(res.message);
                setModalImage(fail);
                setModal(true);
                return;
            };
            setServerResponse(res.message);
            setModalImage(sent);
            setModal(true);
            setSended(true);
            inputEmail.current.value = '';
            inputMessage.current.value = '';
        })
    }
    return (
        <>
        <div className="contact" id="contact">
            <div className={modal ? "message_pop_up_on" : "message_pop_up_off"}>
                <div className="modal">
                <div className="close_modal" onClick={() => {setModal(false);setSended(false);}}></div>
                <div className="serverResponse">
                    <img className="response_illustration" src={modalImage} alt="respuesta" />
                    <h2>{serverResponse.split('-')[0]}</h2>
                    <p>{serverResponse.split('-')[1]}</p>
                </div>
                </div>
            </div>
            <div className="contact_container">

                <div className="vertical_line"></div>
                <div className="main_content">
        
                    <article>
                        <div className="section_title" id="contact">
                            <div className="palette_title">
                                <img className="palette" src={palette} alt="#" />
                                <img className="arrow" src={arrow} alt="#" />
                                <p className="contact_subtitle">Contactame</p>
                                <img className="title_ilustration" src={call} alt="contactame" />
                            </div>
                        </div>

                        <div className="contact_card">
                            <code>
                                Querés preguntarme algo, contratarme o simplemente charlar?,
                                <b className="hilight"> mandame un mensaje!</b>
                                <p>
                                    Prometo contestarte rápido! 🚀
                                </p>
                            </code>
                        </div>

                        <div className="form_card">
                            <div className="balls">
                                <div className="red ball"></div>
                                <div className="yellow ball"></div>
                                <div className="green ball"></div>
                            </div>
                            <form className="message" onSubmit={sendMessage}>
                                <input
                                    ref={inputEmail}
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="tu mail aquí"
                                >
                                </input>

                                <textarea
                                    ref={inputMessage}
                                    name="message"
                                    rows="10"
                                    required
                                    minLength={10}
                                    maxLength={2000}
                                    placeholder="tu mensaje por acá..."
                                >
                                </textarea>

                                <button
                                    className={sended ? "success_submit" : "submit"}
                                    type="submit">
                                    {sended ? 'Listo!' : 'enviar'}
                                </button>
                            </form>
                        </div>
                    </article>
                </div>
            </div>
            {console.log('render')}
        </div>
        </>
    );
}

export default Contact;
