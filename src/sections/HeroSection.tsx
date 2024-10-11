import Image from 'next/image'
import styles from '../../styles/sections/HeroSection.module.scss'
import Wrapper from '../components/Wrapper'

const HeroSection = () => {
    return (
        <>
            <section>
                <div className="py-2"></div>
                <Wrapper>
                    <div className={styles.logo}>
                        <Image src={'/images/logo.png'} alt='GUNNAR' width={700} height={201} />
                    </div>

                    <div className="py-1"></div>

                    <p className={styles.subtitle}>
                        *Headline Tour Spring 2025;<br /> Direct support for <span>Jaden Hossler</span> (2024), <span>Maroon 5</span> and <span>Gwen Stefani</span> (2023); Performed at KIIS FM Jingle Ball 2023

                    </p>

                    <div className="py-2"></div>

                    <div className={styles.photo}>
                        <Image src={'/images/hero-sept-2024.jpg'} alt='Hero Image' width={652} height={978} />
                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default HeroSection
