import { useEffect, useRef } from 'react';

import BackgroundVideo from '../../assets/videos/technology-background-2.mp4';

import styles from './introduction.module.scss';

export default function Introduction () {
    const video = useRef();

    useEffect(() => {
        video.current.play()
    }, []);

    return(
        <div className={styles.container}>
            <video ref={video} src={BackgroundVideo} muted loop/>

            <div className={styles.content}>
                <p>
                    Olá, meu nome é 
                    <span className={styles.textColorize}> Matheus Gomes</span>
                    <br /> 
                    <span>Eu sou um desenvolvedor Full-Stack</span>
                </p>

                <div className={styles.button}>
                    <span className={styles.text}>Veja meu trabalho</span>
                    <span className={styles.icon}>&#x279C;</span>
                </div>
            </div>
        </div>
    )
}