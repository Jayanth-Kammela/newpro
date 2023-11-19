import React from 'react'
import NtwistNav from '../components/ntwist/NtwistNav'
import HeroNtwist from '../components/ntwist/HeroNtwist'
import styles from "../index.module.css";
import CardImageRight from '../components/ntwist/CardImageRight';
import { ntwistCardleftImage, ntwistCardleftImage1, ntwistRighrCard, ntwistRighrCard1 } from '../utils/utils';
import CardImageLeft from '../components/ntwist/CardImageLeft';
import Ntwistfooter from '../components/ntwist/Ntwistfooter';

const Ntwist = () => {
    return (
        <React.Fragment>
            <main>
                <section>
                    <div className={`${styles.ntwistnav}`}>
                        <NtwistNav />
                        <HeroNtwist />
                    </div>
                </section>
                <div>
                    <CardImageRight data={ntwistRighrCard}/>
                </div>
                <div>
                    <CardImageLeft data={ntwistCardleftImage}/>
                </div>
                <div>
                    <CardImageRight data={ntwistRighrCard1}/>
                </div>
                <div>
                    <CardImageLeft data={ntwistCardleftImage1}/>
                </div>
                <div>
                    <Ntwistfooter/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Ntwist