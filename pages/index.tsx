import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import AppHead from '../src/components/AppHead'
import HeroSection from '../src/sections/HeroSection'
import BioSection from '../src/sections/BioSection'
import GallerySection from '../src/sections/GallerySection'
import PressSection from '../src/sections/PressSection'
import HighlightsSection from '../src/sections/HighlightsSection'
import MusicAndVideosSection from '../src/sections/MusicAndVideosSection'
import SocialsSection from '../src/sections/SocialsSection'
import ContactSection from '../src/sections/ContactSection'

const Home: NextPage = () => {
  return (

    <>
      <AppHead />
      <main className={styles.main}>

        <HeroSection />

        <div className="py-1"></div>

        <BioSection />

        <div className="py-2"></div>

        <GallerySection />

        <div className="py-2"></div>

        <PressSection />

        <div className="py-4"></div>

        <HighlightsSection />

        <div className="py-4"></div>

        <MusicAndVideosSection />

        <div className="py-4"></div>

        <SocialsSection />

        <div className="py-4"></div>

        <ContactSection />

        <div className="py-4"></div>


      </main>
    </>
  )
}

export default Home
