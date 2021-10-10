import React from "react";

import { FaAngleDoubleUp } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import styles from './footer.module.scss';

export default function Footer () {
    return(
        <div className={styles.container}>
            <a href="#introduction" className={styles.toTopButton}>
                <FaAngleDoubleUp color="#fff" size={20} />
            </a>

            <div className={styles.socials}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matheus-gomes-2a61a8190/" className={styles.socialsItem}>
                    <RiLinkedinFill color="#fff" size={20} />
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mattheeeeeus/" className={styles.socialsItem}>
                    <BsInstagram color="#fff" size={20} />
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MatheusGomesRocha" className={styles.socialsItem}>
                    <AiFillGithub color="#fff" size={20} />
                </a>
            </div>

            <span className={styles.name}>Matheus Gomes</span>
        </div>
    )
}