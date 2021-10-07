import React, { useState, useEffect } from "react";

import styles from './about.module.scss';
import './animation.css';

let languagesArray = [
    {id: 1, name: 'CSS / SASS', value: 90},
    {id: 2, name: 'HTML', value: 90},
    {id: 3, name: 'Javascript', value: 85},
    {id: 4, name: 'React', value: 93},
    {id: 5, name: 'Next', value: 70},
    {id: 6, name: 'React-Native', value: 95},
    {id: 7, name: 'Typescript', value: 83},
    {id: 8, name: 'PHP', value: 75},
    {id: 9, name: 'Laravel', value: 82},
    {id: 10, name: 'Node', value: 85},
    {id: 11, name: 'MySQL', value: 93},
    {id: 12, name: 'Firebase', value: 78},
];

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
                <div id={showContent ? 'showContentLeft' : 'hideContentLeft'} className={styles.left}>
                    <div className={styles.image} />

                    <h2>Quem é esse cara?</h2>

                    <p>
                        Eu sou um Desenvolvedor Full-Stack. Comecei nessa área à quase 3 anos e desde então venho focando em me aperfeiçoar como um Desenvolvedor. Usar a lógica para resolver problemas do Backend e Banco de Dados é minha paixão. 
                        Adoro recriar designs para melhorar meu código no Frontend.
                    </p>
                </div>

                <div id={showContent ? 'showContentRight' : 'hideContentRight'} className={styles.right}>
                    {languagesArray.map((item, k) => (
                        <div key={k} className={styles.progressBar}>
                            <div style={{width: `${item.value}%`}} className={styles.progressActive}></div>
                            <div className={styles.progressNameArea}>
                                <span>{item.name}</span>
                            </div>

                            <span className={styles.progressValue}>{item.value}%</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}