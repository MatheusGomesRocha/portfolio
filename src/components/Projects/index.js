import React, { useState } from 'react';

import Img from '../../assets/images/profile.jpeg';

import styles from './projects.module.scss';
import './animation.css';

let projectsArray = [
    {id: 1, img: Img, name: 'Pizza Home', languages: 'React / Node', languageFilter: 'react', languageFilter2: 'node', node: true},
    {id: 2, img: Img, name: 'Recipe', languages: 'React-Native / Node', languageFilter: 'react-native', languageFilter2: 'node', node: true},
];

export default function Projects ({ showTitle, showLine, showFilter }) {
    const [filter, setFilter] = useState('all');

    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <h1 id={showTitle ? 'showTitle' : 'hideTitle'} className={styles.title}>Projects</h1>
                <div id={showLine ? 'showLine' : 'hideLine'} className={styles.line}></div>
            </section>

            <section className={styles.projects}>
                <div id={showFilter ? 'showFilter' : 'hideFilter'} className={styles.filterArea}>
                    <div style={{left: filter === 'all' && '0rem' || filter === 'react' && '10rem' || filter === 'react-native' && '20rem' || filter === 'node' && '30rem'}} className={styles.background} />

                    <div onClick={() => setFilter('all')} className={styles.filterItem}>
                        <span style={{color: filter === 'all' ? '#fff' : '#000'}}>All</span>
                    </div>

                    <div onClick={() => setFilter('react')} className={styles.filterItem}>
                        <span style={{color: filter === 'react' ? '#fff' : '#000'}}>React</span>
                    </div>

                    <div onClick={() => setFilter('react-native')} className={styles.filterItem}>
                        <span style={{color: filter === 'react-native' ? '#fff' : '#000'}}>React Native</span>
                    </div>

                    <div onClick={() => setFilter('node')} className={styles.filterItem}>
                        <span style={{color: filter === 'node' ? '#fff' : '#000'}}>Node</span>
                    </div>
                </div>

                <div className={styles.projectsArea}>
                    {projectsArray.map((item, k) => (
                        filter === 'all' ?
                        <div style={{backgroundImage: `url(${item.img})`}} key={k} className={styles.projectsItem}>
                            <div className={styles.projectsItemHidden}>
                                <div className={styles.projectsItemHeader}>
                                    <h2>{item.name}</h2>
                                    <span>{item.languages}</span>
                                </div>

                                <div className={styles.projectsItemButton}>
                                    <span>Saiba Mais</span>
                                </div>
                            </div>
                        </div>
                        :
                        filter === item.languageFilter ?
                        <div style={{backgroundImage: `url(${item.img})`}} key={k} className={styles.projectsItem}>
                            <div className={styles.projectsItemHidden}>
                                <div className={styles.projectsItemHeader}>
                                    <h2>{item.name}</h2>
                                    <span>{item.languages}</span>
                                </div>

                                <div className={styles.projectsItemButton}>
                                    <span>Saiba Mais</span>
                                </div>
                            </div>
                        </div>
                        :
                        filter === item.languageFilter2 &&
                        <div style={{backgroundImage: `url(${item.img})`}} key={k} className={styles.projectsItem}>
                            <div className={styles.projectsItemHidden}>
                                <div className={styles.projectsItemHeader}>
                                    <h2>{item.name}</h2>
                                    <span>{item.languages}</span>
                                </div>

                                <div className={styles.projectsItemButton}>
                                    <span>Saiba Mais</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}