import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

import ImgPizzaria1 from '../../assets/pizzaria-portfolio/1.png';
import ImgPizzaria2 from '../../assets/pizzaria-portfolio/2.png';
import ImgPizzaria3 from '../../assets/pizzaria-portfolio/3.png';
import ImgPizzaria4 from '../../assets/pizzaria-portfolio/4.png';
import ImgPizzaria5 from '../../assets/pizzaria-portfolio/5.png';

import ImgRecipe1 from '../../assets/recipe-portfolio/1.jpeg';
import ImgRecipe2 from '../../assets/recipe-portfolio/2.jpeg';
import ImgRecipe3 from '../../assets/recipe-portfolio/3.jpeg';
import ImgRecipe4 from '../../assets/recipe-portfolio/4.jpeg';
import ImgRecipe5 from '../../assets/recipe-portfolio/5.jpeg';
import ImgRecipe6 from '../../assets/recipe-portfolio/6.jpeg';
import ImgRecipe7 from '../../assets/recipe-portfolio/7.jpeg';
import ImgRecipe8 from '../../assets/recipe-portfolio/8.jpeg';

import styles from './projects.module.scss';
import './animation.css';
import HeaderAnimated from '../HeaderAnimated';

let projectsArray = [
    {
        id: 1, 
        imgBanner: ImgPizzaria1,
        img: [
            ImgPizzaria1,
            ImgPizzaria2,
            ImgPizzaria3,
            ImgPizzaria4,
            ImgPizzaria5,
        ], 
        name: 'Pizza Home', 
        description: 'Um lindo website de apresentação para uma Pizzaria', 
        whatCanDo: 'Pizza Home é um website simples, com uma API feita em Node para testar como seria a visão do usuário ao fazer os pedidos', 
        linkSite: 'https://pizza-home.herokuapp.com',
        linkGithub: 'https://github.com/MatheusGomesRocha/pizzaria_react',
        languages: 'React / Node', 
        languageFilter: 'react', 
        languageFilter2: 'node', 
        node: true
    },
    {
        id: 2,
        showDelay: 0.3,  
        imgBanner: ImgRecipe1,
        img: [
            ImgRecipe1,
            ImgRecipe2,
            ImgRecipe3,
            ImgRecipe4,
            ImgRecipe5,
            ImgRecipe6,
            ImgRecipe7,
            ImgRecipe8,
        ], 
        name: 'Recipe', 
        description: 'Um App para experimentar coisas novas na cozinha', 
        whatCanDo: 'Recipe é um App que permite o usuário postar suas receitas, e ver receitas de outros usuários. Bom para quem está começando ou quer aprender a fazer algo novo. ', 
        linkGithub: 'https://github.com/MatheusGomesRocha/pizzaria_react',
        languages: 'React-Native / Node', 
        languageFilter: 'react-native', 
        languageFilter2: 'node', 
        node: true
    },
];

export default function Projects ({ showTitleProject, showLineProject, showProjects }) {
    const [filter, setFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);

    const [img, setImg] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [whatCanDo, setWhatCanDo] = useState('');
    const [site, setSite] = useState('');
    const [github, setGithub] = useState('');

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
                        {img.map((item, k) => (
                            <div className={styles.imgContainer} key={k}>
                                <img style={{objectFit: name === 'Pizza Home' ? 'cover' : 'contain', objectPosition: name === 'Pizza Home' ? 'center' : undefined}} src={item} />
                            </div>
                        ))}
                    </Carousel>

                    <div className={styles.headerModal}>
                        <h2>{name}</h2>
                        <span>{description}</span>
                    </div>

                    <div className={styles.footerModal}>
                        <p>{whatCanDo}</p>

                        <div className={styles.footerRow}>
                            {site ? 
                                <a href={site} target="_blank" className={styles.buttonModal}>
                                    <BiLinkExternal className={styles.icon} size={18} />
                                    <span>Ver site</span>
                                </a>
                                : undefined
                            }
                            
                            <a href={github} target="_blank" className={styles.buttonModalGithub}>
                                <AiFillGithub className={styles.icon} size={18} />
                                <span>Ver github</span>
                            </a>
                        </div>

                        <div onClick={() => setModalVisible(false)} className={styles.closeButtonModal}>
                            <span>&#x2717;</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RenderItem = ({ item }) => {
        return(
            <div style={{backgroundImage: `url(${item.imgBanner})`, animationDelay: `${item.showDelay}s`}} className={styles.projectsItem}>
                <div className={styles.projectsItemHidden}>
                    <div className={styles.projectsItemHeader}>
                        <h2>{item.name}</h2>
                        <span>{item.languages}</span>
                    </div>

                    <div onClick={() => openModal(item.img, item.name, item.description, item.whatCanDo, item.linkSite, item.linkGithub)} className={styles.projectsItemButton}>
                        <span>Saiba Mais</span>
                    </div>
                </div>
            </div>
        )
    }

    function openModal (img, name, description, whatCanDo, linkSite, linkGithub) {
        setImg(img);
        setName(name);
        setDescription(description);
        setWhatCanDo(whatCanDo);
        setSite(linkSite);
        setGithub(linkGithub);
        setModalVisible(true);
    }

    return(
        <div className={styles.container}>
            {modalVisible ?
                <Modal />
                :
                undefined
            }

            <HeaderAnimated title="Projetos" direction='right' showTitle={showTitleProject} showLine={showLineProject} />

            <section id={showProjects ? 'showProjectsItem' : 'hideProjectsItem'} className={styles.projects}>
                <div id={showProjects ? 'showFilter' : 'hideFilter'} className={styles.filterArea}>
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
                            <RenderItem item={item} key={k} />
                        :
                        filter === item.languageFilter ?
                            <RenderItem item={item} key={k} />
                        :
                        filter === item.languageFilter2 &&
                            <RenderItem item={item} key={k} />
                    ))}
                </div>

            </section>
        </div>
    )
}