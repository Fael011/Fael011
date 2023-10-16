import {React, blank} from "react"

import styles from "./Integrantes.module.css"
import Header from "../components/Header"

import Rafael_imagem from "../images/Fael_image.jpg"
import Geh_imagem from "../images/Geh_image.jpg"
import Preto_imagem from "../images/Preto_imagem.jpg"
import Thiago_imagem from "../images/Thiago_image.jpg"

import { InstagramLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react"


function Integrantes() {
    return(
        <>
            <Header />
            <section className={styles.Integrantes}>
                <h1>INTEGRANTES</h1>

                <div className={styles.integrantes_cards}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Rafael_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Rafael Lima</p>
                        </div>

                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/faell.lv/" target="_blank"><InstagramLogo size={40}/></a>
                            <a href="https://www.linkedin.com/in/rafael-lima-viana-623538264/" target="_blank"><LinkedinLogo size={40}/></a>
                            <a href="mailto:rlimaviana011@hotmail.com" target="_blank"><Envelope size={40}/></a>           
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Geh_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Geovanna Lisboa</p>
                        </div>

                        <div className={styles.icons}>
                        <a href="https://www.instagram.com/geh.lisboa/" target="_blank"><InstagramLogo size={40}/></a>
                        <a href=""><LinkedinLogo size   ={40}/></a>
                        <a href="mailto:geovanna.lisboa@eaporal.org" target="_blank"><Envelope size={40}/></a>
                    
                        </div>
                    </div>
                    
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Preto_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Pietro Pestana</p>
                        </div>

                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/pietro_pestana/" target="_blank"><InstagramLogo size={40}/></a>
                            <a href="https://www.linkedin.com/in/pietro-moreira-abreu-pestana-7721b3269/" target="_blank"><LinkedinLogo size={40}/></a>
                            <a href="mailto:pietropestana@gmail.com" target="_blank"><Envelope size={40}/></a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Thiago_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Thiago Costa</p>
                        </div>

                        <div className={styles.icons}>
                        <a href="https://www.instagram.com/thiagotoglory/" target="_blank"><InstagramLogo size={40}/></a>
                            <a href=""><LinkedinLogo size={40}/></a>
                            <a href="mailto:thagocostanascimento@gmail.com" target="_blank"><Envelope size={40}/></a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Integrantes