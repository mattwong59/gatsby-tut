import React from "react"

import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles);

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
            username="Louie Manx"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Louie and I'm a Manx but this isn't my picture. It's a picture of someone else."
        />
        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="Hey I'm Bob Smith and this is a little bit about myself. I like coffee and cats."  
        />
    </Container>
)