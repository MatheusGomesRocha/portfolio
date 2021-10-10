import React, { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import styles from './header.module.scss';
import './animation.css';

export default function Header ({ fixedHeader, currentComponent }) {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <nav id={fixedHeader ? 'fixedHeader' : undefined} style={{position: fixedHeader ? 'fixed' : 'absolute'}} className={styles.nav}>
            <ul className={styles.ulDesktop}>
                <li><a style={{color: currentComponent === 'home' ? '#9f75ff' : undefined}} href="#introduction">Home</a></li>
                <li><a style={{color: currentComponent === 'about' ? '#9f75ff' : undefined}} href="#about">Sobre</a></li>
                <li><a style={{color: currentComponent === 'projects' ? '#9f75ff' : undefined}} href="#projects">Projetos</a></li>
                <li><a style={{color: currentComponent === 'contact' ? '#9f75ff' : undefined}} href="#contact">Contato</a></li>
            </ul>

            <div onClick={() => setOpenMenu(true)} className={styles.openMenuButton}>
                <AiOutlineMenu color="#fff" size={25} />
            </div>

            {openMenu ? 
                <div id={openMenu ? 'showMenu' : 'hideMenu'} className={styles.menu}>
                    <div onClick={() => setOpenMenu(false)} className={styles.closeMenuButton}>
                        <span>&#x2717;</span>
                    </div>

                    <ul className={styles.ulMobile}>
                        <li><a style={{color: currentComponent === 'home' ? '#9f75ff' : undefined}} href="#introduction">Home</a></li>
                        <li><a style={{color: currentComponent === 'about' ? '#9f75ff' : undefined}} href="#about">Sobre</a></li>
                        <li><a style={{color: currentComponent === 'projects' ? '#9f75ff' : undefined}} href="#projects">Projetos</a></li>
                        <li><a style={{color: currentComponent === 'contact' ? '#9f75ff' : undefined}} href="#contact">Contato</a></li>
                    </ul>
                </div>
            : 
                undefined
            }
        </nav>
    )
}