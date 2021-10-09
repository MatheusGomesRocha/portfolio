import React from "react";
import HeaderAnimated from "../HeaderAnimated";

import styles from './contact.module.scss';

export default function Contact ({ showTitleContact, showLineContact }) {
    return(
        <div className={styles.container}>
            <HeaderAnimated title="Contact" direction="left" showTitle={showTitleContact} showLine={showLineContact} />
        </div>
    )
}