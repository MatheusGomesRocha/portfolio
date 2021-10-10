import React from "react";
import HeaderAnimated from "../HeaderAnimated";

import styles from './contact.module.scss';
import './animation.css';

export default function Contact ({ showTitleContact, showLineContact, showFormContact }) {
    return(
        <div id="contact" className={styles.container}>
            <HeaderAnimated title="Contato" direction="left" showTitle={showTitleContact} showLine={showLineContact} />

            <span id={showLineContact ? 'showQuestion' : 'hideQuestion'}  className={styles.questionText}>Tem alguma pergunta?</span>

            <form id={showFormContact ? 'showForm' : 'hideForm'} >
                <input placeholder="Nome" />
                <input placeholder="Email" />

                <textarea placeholder="Sua mensagem" />
                
                <div className={styles.submitButton}>
                    <span>Enviar</span>
                </div>
            </form>
        </div>
    )
}