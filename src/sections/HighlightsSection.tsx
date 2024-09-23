import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'
import styles from '../../styles/sections/HighlightsSection.module.scss'
import Playlist from '../components/Playlist'
import Image from 'next/image'


const highlightItems = [
    "Headline North America Tour Spring 2025",
    "Opened for Jaden Hossler North America tour Summer 2024 ",
    "Walked NYFW 2024 for TOMBOGO",
    "Performed at 2023 Jingle Ball LA & Jingle Ball DC",
    "Direct support for Maroon 5, Gwen Stefani, The Hu & Dead Poet Society 2023 ",
    "Completed 5 tours in North America and Europe playing over 75 dates",

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
                    {/* <iframe style={{ width: '100%' }} src="https://player.vimeo.com/video/829627834?h=05210167aa" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
                    <iframe style={{ width: '100%' }} width="560" height="315" src="https://www.youtube.com/embed/111_oyTK8ng" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    <div className="py-1"></div>

                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Tour Recap</h3>
                        <a href="https://www.youtube.com/watch?v=-111_oyTK8ng" target='_blank' className='default-link'>Watch</a>
                    </div>

                    <div className="py-3"></div>


                    <iframe style={{ width: '100%' }} width="560" height="315" src="https://www.youtube.com/embed/-YihZ-TgnA8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    <div className="py-1"></div>

                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Performance Reel</h3>
                        <a href="https://www.youtube.com/watch?v=-YihZ-TgnA8" target='_blank' className='default-link'>Watch</a>
                    </div>

                    <div className="py-3"></div>

                    <h3>Featured on:</h3>

                    <div className="py-2"></div>

                </Wrapper>

                <Gallery height={620}>
                    <Playlist image='/images/playlists/spotify.jpg' platform='Spotify' items={['New Music Friday', 'New Noise', 'Fresh Finds Rock', 'The New Alt', 'Spotify Wrapped: Fresh Finds Rock', 'All New Rock', 'Rock The World', 'Hangover Friendly Rock', 'Top of the Rock', 'life sucks…i need some rock!', "New Pop Picks", "Mellow Favorites"]} />
                    <Playlist image='/images/playlists/apple.jpg' platform='Apple Music' items={["Apple Rock New Releases", "New Music Daily", "New in Rock", "Amped Up", "Breaking Rock", "The Best New Music (Shazam)", "New in Alternative", "Getting a Haircut"]} />
                    <Playlist image='/images/playlists/vevo.jpg' platform='Vevo' items={["Pure Rock", "Incoming Pop", "Incoming Rock", "Incoming Alt"]} />
                    <Playlist image='/images/playlists/amazon.jpg' platform='Amazon Music' items={["Brand New Music", "Breakthrough Rock", "Breakthrough Pop", "Best of What's New"]} />
                    <Playlist image='/images/playlists/youtube.jpg' platform='YouTube' items={["Rooftop Rock", "Indie Makeout", "The Razor's Edge"]} />
                </Gallery>
                <div className="py-3"></div>

                <Wrapper>

                    <h3>Brand Partnerships:</h3>
                    <div className="py-3"></div>
                    <div className="d-md-flex d-none justify-content-between align-items-end">
                        <Image src={'/images/brands/inkbox.png'} alt='inkbox' width={155} height={29} />
                        <Image src={'/images/brands/calirosa.png'} alt='calirosa' width={127} height={58} />

                        <Image src={'/images/brands/rockband.webp'} alt='rockband' width={150} height={78} style={{ position: 'relative', top: 16 }} />


                    </div>

                    <div className="py-3"></div>

                    <div className="d-md-flex d-none justify-content-between align-items-center">

                        <Image src={'/images/brands/bobatime.png'} alt='boba time' width={100} height={78} style={{ position: 'relative', top: 12 }} />
                        <div style={{ width: 40 }}></div>
                        <Image src={'/images/brands/loxclub.png'} alt='lox club' width={153} height={40} style={{ position: 'relative', top: 12 }} />
                        <div style={{ width: 40 }}></div>

                        <Image src={'/images/brands/tombogo.png'} alt='lox club' width={184 * .5} height={186 * .5} style={{ position: 'relative', top: 12, left: -24 }} />

                    </div>

                    <div className="py-3"></div>


                    <div className="d-md-flex d-none justify-content-start align-items-center">
                        <Image src={'/images/brands/bodyarmor.png'} alt='lox club' width={356 / 2} height={58 / 2} style={{ position: 'relative', top: 19 }} />
                        <div style={{ width: 54 }}></div>
                        <Image src={'/images/brands/bombas.png'} alt='boba time' width={322 / 2} height={128 / 2} style={{ position: 'relative', top: 0 }} />
                    </div>





                    <div className="d-md-none d-flex flex-column justify-content-between align-items-center">
                        <Image src={'/images/brands/inkbox.png'} alt='inkbox' width={155 * 1.5} height={29 * 1.5} />
                        <Image src={'/images/brands/calirosa.png'} alt='calirosa' width={127 * 1.5} height={58 * 1.5} />
                        <Image src={'/images/brands/rockband.webp'} alt='rockband' width={150 * 1.5} height={78 * 1.5} style={{ position: 'relative', top: 12 }} />
                        <div className="py-2"></div>
                        <Image src={'/images/brands/bobatime.png'} alt='bob time' width={100 * 1.5} height={78 * 1.5} style={{ position: 'relative', top: 12 }} />
                        <div className="py-3"></div>
                        <Image src={'/images/brands/loxclub.png'} alt='lox club' width={153} height={40} style={{ position: 'relative', top: 12 }} />
                        <div className="py-3"></div>

                        <Image src={'/images/brands/tombogo.png'} alt='lox club' width={184 * .5} height={186 * .5} style={{ position: 'relative', }} />
                        <div className="py-3"></div>

                        <Image src={'/images/brands/bodyarmor.png'} alt='lox club' width={356 / 2} height={58 / 2} style={{ position: 'relative', }} />
                        <div className="py-3"></div>

                        <Image src={'/images/brands/bombas.png'} alt='boba time' width={322 / 2} height={128 / 2} style={{ position: 'relative', top: 0 }} />

                    </div>
                </Wrapper>



            </section>
        </>
    )
}

export default HighlightsSection
