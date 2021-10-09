import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiLinkExternal } from 'react-icons/bi';

import ImgPizzaria1 from '../../assets/pizzaria-portfolio/1.png';
import ImgPizzaria2 from '../../assets/pizzaria-portfolio/2.png';
import ImgPizzaria3 from '../../assets/pizzaria-portfolio/3.png';
import ImgPizzaria4 from '../../assets/pizzaria-portfolio/4.png';
import ImgPizzaria5 from '../../assets/pizzaria-portfolio/5.png';

import styles from './projects.module.scss';
import './animation.css';

let projectsArray = [
    {id: 1, img: ImgPizzaria1, name: 'Pizza Home', description: 'Um lindo website de apresentação para uma Pizzaria', whatCanDo: 'Pizza Home é um website simples, com uma API feita em Node para testar como seria a visão do usuário ao fazer os pedidos', languages: 'React / Node', languageFilter: 'react', languageFilter2: 'node', node: true},
    {id: 2, img: ImgPizzaria1, name: 'Recipe', languages: 'React-Native / Node', languageFilter: 'react-native', languageFilter2: 'node', node: true},
];

export default function Projects ({ showTitle, showLine, showFilter }) {
    const [filter, setFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [whatCanDo, setWhatCanDo] = useState('');

    const [hover, setHover] = useState(false);

    const arrowPrev = (clickHandler) => {
        return(
            <div onClick={clickHandler} style={{left: 0}} className={styles.arrow}>
                <span>&#x276E;</span>
            </div>
        )
    }

    const arrowNext = (clickHandler) => {
        return(
            <div onClick={clickHandler} style={{right: 0}} className={styles.arrow}>
                <span>&#x276F;</span>
            </div>
        )
    }

    const Modal = () => {
        return(
            <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    <Carousel renderArrowNext={arrowNext} renderArrowPrev={arrowPrev} useKeyboardArrows infiniteLoop showStatus={false} showThumbs={false} showIndicators={false} >
                        <div>
                            <img src={ImgPizzaria1} />
                        </div>

                        <div>
                            <img src={ImgPizzaria2} />
                        </div>

                        <div>
                            <img src={ImgPizzaria3} />
                        </div>

                        <div>
                            <img src={ImgPizzaria4} />
                        </div>

                        <div>
                            <img src={ImgPizzaria5} />
                        </div>
                    </Carousel>

                    <div className={styles.headerModal}>
                        <h2>{name}</h2>
                        <span>{description}</span>
                    </div>

                    <p>{whatCanDo}</p>

                    <div className={styles.buttonModal}>
                        <BiLinkExternal className={styles.icon} size={18} />
                        <span>Ver site</span>
                    </div>

                    <div onClick={() => setModalVisible(false)} className={styles.closeButtonModal}>
                        <span>&#x2717;</span>
                    </div>
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

                    <div onClick={() => openModal(item.img, item.name, item.description, item.whatCanDo)} className={styles.projectsItemButton}>
                        <span>Saiba Mais</span>
                    </div>
                </div>
            </div>
        )
    }

    function openModal (img, name, description, whatCanDo) {
        setImg(img);
        setName(name);
        setDescription(description);
        setWhatCanDo(whatCanDo);
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