import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'
import styles from '../../styles/sections/HighlightsSection.module.scss'
import Playlist from '../components/Playlist'
import Image from 'next/image'


const highlightItems = [
    "Direct support for Maroon 5, The Hu and Dead Poet Society for Europe 2023 tours",
    "Completed three tours in North America playing over 50 dates",
    "Performed opening night of SXSW 2022",
    "Rock Band 4 video game placement for “Bad Idea”",
    "22M global streams and views across all platforms",
]


const HighlightsSection = () => {
    return (
        <>
            <section>

                <Wrapper>
                    <h2>Highlights</h2>
                    <div className="py-1"></div>
                    <ul className={styles.ul}>
                        {highlightItems.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })}
                    </ul>
                    <div className="py-3"></div>
                    <iframe style={{ width: '100%' }} src="https://player.vimeo.com/video/829627834?h=05210167aa" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>

                    <div className="py-1"></div>

                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Performance Reel</h3>
                        <a href="#" target='_blank' className='default-link'>Watch</a>
                    </div>

                    <div className="py-3"></div>

                    <h3>Featured on:</h3>

                    <div className="py-2"></div>

                </Wrapper>

                <Gallery height={590}>
                    <Playlist image='/images/playlists/spotify.jpg' platform='Spotify' items={['New Music Friday', 'New Noise', 'Fresh Finds Rock', 'The New Alt', 'Spotify Wrapped: Fresh Finds Rock', 'All New Rock', 'Rock The World', 'Hangover Friendly Rock', 'Top of the Rock', 'life sucks…i need some rock!']} />
                    <Playlist image='/images/playlists/apple.jpg' platform='Apple Music' items={["Apple Rock New Releases", "New Music Daily", "New in Rock", "Amped Up", "Breaking Rock", "The Best New Music (Shazam)"]} />
                    <Playlist image='/images/playlists/vevo.jpg' platform='Vevo' items={["Pure Rock", "Incoming Pop", "Incoming Rock", "Incoming Alt"]} />
                    <Playlist image='/images/playlists/amazon.jpg' platform='Amazon Music' items={["Brand New Music", "Breakthrough Rock", "Breakthrough Pop", "Best of What's New"]} />
                    <Playlist image='/images/playlists/youtube.jpg' platform='YouTube' items={["Rooftop Rock", "Indie Makeout", "The Razor's Edge"]} />
                </Gallery>
                <div className="py-3"></div>

                <Wrapper>

                    <h3>Brand Deals:</h3>
                    <div className="py-3"></div>
                    <div className="d-flex justify-content-between align-items-end">
                        <Image src={'/images/brands/inkbox.png'} alt='inkbox' width={155} height={29} />
                        <Image src={'/images/brands/calirosa.png'} alt='calirosa' width={127} height={58} />
                    </div>
                </Wrapper>



            </section>
        </>
    )
}

export default HighlightsSection
