import React, { useState, useEffect }  from 'react';

import styles from './header.module.scss';
import './animation.css';

export default function Header ({ fixedHeader, currentComponent }) {
    return(
        <nav id={fixedHeader ? 'fixedHeader' : undefined} style={{position: fixedHeader ? 'fixed' : 'absolute'}} className={styles.nav}>
            <ul>
                <li><a style={{color: currentComponent === 'home' ? '#9f75ff' : undefined}} href="#introduction">Home</a></li>
                <li><a style={{color: currentComponent === 'about' ? '#9f75ff' : undefined}} href="#about">Sobre</a></li>
                <li><a style={{color: currentComponent === 'projects' ? '#9f75ff' : undefined}} href="#projects">Projetos</a></li>
                <li><a style={{color: currentComponent === 'contact' ? '#9f75ff' : undefined}} href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}