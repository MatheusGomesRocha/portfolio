import React, { useState, useEffect } from 'react';

import styles from './projects.module.scss';
import './animation.css';

export default function Projects ({ showTitle, showLine }) {
    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <h1 id={showTitle ? 'showTitle' : 'hideTitle'} className={styles.title}>Projects</h1>
                <div id={showLine ? 'showLine' : 'hideLine'} className={styles.line}></div>
            </section>
        </div>
    )
}