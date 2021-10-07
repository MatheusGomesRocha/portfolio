import React, { useState, useEffect } from "react";

import styles from './about.module.scss';
import './animation.css';

export default function About () {

    const [showTitle, setShowTitle] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset >= 220) {
                setShowTitle(true);
            } if (window.pageYOffset >= 300) {
                setShowLine(true);
            } if (window.pageYOffset >= 600) {
                setShowContent(true);
            }

        }
    }, []);

    return(
        <div id="about" className={styles.container}>
            <section className={styles.header}>
                <h1 className={showTitle ? styles.show : undefined}>About</h1>
                <div className={showLine ? styles.line : undefined}></div>
            </section>

            {/* <div className={styles.goalArea}>
                <div className={showGoal ? styles.goalItem : styles.goalHiddenItem}>
                    <div className={styles.goalPolygon}></div>

                    <h2>Backend</h2>
                </div>

                <div className={showGoal ? styles.goalItem : styles.goalHiddenItem}>
                    <div style={{animationDelay: '250ms'}} className={styles.goalPolygon}></div>

                    <h2>Frontend</h2>
                </div>

                <div className={showGoal ? styles.goalItem : styles.goalHiddenItem}>
                    <div style={{animationDelay: '500ms'}} className={styles.goalPolygon}></div>

                    <h2>Banco de Dados</h2>
                </div>
            </div> */}

            <section className={styles.content}>
                <div id={showContent ? 'showContent' : 'hideContent'} className={styles.left}>
                    <div className={styles.image} />

                    <h2>Quem é esse cara?</h2>

                    <p>
                        Eu sou um Desenvolvedor Full-Stack. Comecei nessa área à quase 3 anos e desde então venho focando em me aperfeiçoar como um Desenvolvedor. Usar a lógica para resolver problemas do Backend e Banco de Dados é minha paixão. 
                        Adoro recriar designs para melhorar meu código no Frontend.
                    </p>
                </div>
            </section>
        </div>
    )
}