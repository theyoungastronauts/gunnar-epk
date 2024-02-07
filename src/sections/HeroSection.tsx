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
                        *2023 direct support for <span>Maroon 5</span> (UK & Europe), <span>Gwen Stefani</span>; Performed at KIIS FM&apos;s Jingle Ball 2023
                    </p>

                    <div className="py-2"></div>

                    <div className={styles.photo}>
                        <Image src={'/images/hero-feb-2024.jpg'} alt='Hero Image' width={652} height={1079} />
                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default HeroSection
