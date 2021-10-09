import React from 'react';

import styles from './headerAnimated.module.scss';
import './animation.css';

export default function HeaderAnimated ({ title, direction, showTitle, showLine }) {
    return(
        <section className={styles.header}>
            <h1 style={{transform: direction === 'right' ? 'translateX(150%)' : 'translateX(-150%)'}} id={showTitle ? 'showTitle' : 'hideTitle'} className={styles.title}>{title}</h1>
            <div style={{transform: direction === 'right' ? 'translateX(350%)' : 'translateX(-350%)'}} id={showLine ? 'showLine' : 'hideLine'} className={styles.line}></div>
        </section>
    )
}