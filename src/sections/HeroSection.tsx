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
                        *Now on tour now with <span>Maroon 5</span> (UK & Europe) and <span>The Hu</span> (Europe)
                    </p>

                    <div className="py-2"></div>

                    <div className={styles.photo}>
                        <Image src={'/images/hero.jpg'} alt='Hero Image' width={652} height={786} />
                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default HeroSection
