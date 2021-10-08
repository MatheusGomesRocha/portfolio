import React, { useState } from 'react';

import Img from '../../assets/pizzaria-portfolio/1.png';

import styles from './projects.module.scss';
import './animation.css';

let projectsArray = [
    {id: 1, img: Img, name: 'Pizza Home', languages: 'React / Node', languageFilter: 'react', languageFilter2: 'node', node: true},
    {id: 2, img: Img, name: 'Recipe', languages: 'React-Native / Node', languageFilter: 'react-native', languageFilter2: 'node', node: true},
];

export default function Projects ({ showTitle, showLine, showFilter }) {
    const [filter, setFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [img, setImg] = useState();

    const Modal = () => {
        return(
            <div className={styles.modalContainer}>
                <div onClick={() => setModalVisible(false)} className={styles.modal}>
                    <img src={img} />
                </div>
            </div>
        )
    }

    const RenderItem = ({ item, k }) => {
        return(
            <div style={{backgroundImage: `url(${item.img})`}} key={k} className={styles.projectsItem}>
                <div className={styles.projectsItemHidden}>
                    <div className={styles.projectsItemHeader}>
                        <h2>{item.name}</h2>
                        <span>{item.languages}</span>
                    </div>

                    <div onClick={() => openModal(item.img)} className={styles.projectsItemButton}>
                        <span>Saiba Mais</span>
                    </div>
                </div>
            </div>
        )
    }

    function openModal (img) {
        setImg(img);
        setModalVisible(true);
    }

    return(
        <div className={styles.container}>
            {modalVisible ?
                <Modal />
                :
                undefined
            }

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
                            <RenderItem item={item} k={k} />
                        :
                        filter === item.languageFilter ?
                            <RenderItem item={item} k={k} />
                        :
                        filter === item.languageFilter2 &&
                            <RenderItem item={item} k={k} />
                    ))}
                </div>
            </section>
        </div>
    )
}