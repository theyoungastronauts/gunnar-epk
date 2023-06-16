import type { NextPage } from 'next'
import styles from '../styles/BioPage.module.scss'
import AppHead from '../src/components/AppHead'
import HeroSection from '../src/sections/HeroSection'
import BioSection from '../src/sections/BioSection'
import Wrapper from '../src/components/Wrapper'
import Image from 'next/image'

const BioPage: NextPage = () => {
    return (

        <>
            <AppHead />
            <main className={styles.main}>

                <div className="py-2"></div>
                <Wrapper>
                    <div className={styles.logo}>
                        <Image src={'/images/logo.png'} alt='GUNNAR' width={700} height={201} />
                    </div>
                </Wrapper>

                <BioSection isExpanded />

                <div className="py-3"></div>

            </main>
        </>
    )
}

export default BioPage
