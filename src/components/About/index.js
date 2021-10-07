import React, { useState, useEffect } from "react";

import styles from './about.module.scss';

export default function About () {

    const [showTitle, setShowTitle] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [showGoal, setShowGoal] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset >= 220) {
                setShowTitle(true);
            } if (window.pageYOffset >= 300) {
                setShowLine(true);
            } if (window.pageYOffset >= 380) {
                setShowGoal(true);
            }

        }
    }, []);

    return(
        <div id="about" className={styles.container}>
            <div className={styles.header}>
                <h1 className={showTitle ? styles.show : undefined}>About</h1>
                <div className={showLine ? styles.line : undefined}></div>
            </div>

            <div className={styles.goalArea}>
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
            </div>
        </div>
    )
}